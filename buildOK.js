const { performance } = require('perf_hooks');
const consola = require('consola');
const path = require('path');
const glob = require('glob');
const shell = require('shelljs');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const fs = require('fs-extra');
const os = require('os');

const getLibraryNameFromFilePath = (filepath) => {
  const [ directory, file ] = filepath.split('/').slice(-2);

  if (file === 'index.js') {
    return directory;
  } else if (file === 'index.vue') {
    return directory;
  } else if (/\.vue$/.test(file)) {
    return file.slice(0, -4);
  } else {
    return null;
  }
};

const getNormalizedPath = filepath => path.normalize(filepath).replace(/\\/g, '/');

const getBuildInstruction = (filepath) => {
  const entry = getNormalizedPath(filepath);
  const rawLibraryName = getLibraryNameFromFilePath(entry);

  return (
    rawLibraryName
      ? ({
        entry,
        libraryName: (
          upperFirst(
            camelCase(
              getLibraryNameFromFilePath(entry)
            )
          )
        ),
      })
      : null
  );
};

const buildWithInstruction = (options) => ({ libraryName, entry }) => new Promise((resolve, reject) => {
  const command = `yarn run vue-cli-service build --target lib --name ${libraryName} ${entry} --no-clean`;

  shell.exec(
    command,
    {
      silent: !options.verbose,
    },
    (code, stdout, stderr) => {
      if (code === 0) {
        resolve({
          entry,
          libraryName,
          stdout,
          code,
        });
      } else {
        reject({
          entry,
          libraryName,
          stderr,
          code,
        });
      }
    },
  );
});


async function * buildWithBuffer(instructions, options, adapter = {}) {
  const buildComponent = buildWithInstruction(options);
  const passthroughFn = (x => x);

  for (let iterationCount = 0; iterationCount < instructions.length; iterationCount += options.parallel) {

    const stuffs = instructions
      .slice(iterationCount, iterationCount + options.parallel)
      .map(getBuildInstruction)
      .filter(x => x)
      .map(adapter.beforeBuild || passthroughFn)
      .map(buildComponent)
    ;
    const output = await Promise.all(stuffs);
    output.map(adapter.afterBuild || passthroughFn);
    yield output;
  }
}

const build = async (overridingOption = {}) => {
  const options = {
    entry: 'src/components',
    parallel: os.cpus().length,
    verbose: false,
    ...overridingOption,
  };

  const inputFilepaths = glob
    .sync(`${options.entry}/**/*.{vue,js}`, {
      ignore: 'node_modules/**/*',
    })
    .map(filepath => path.resolve(filepath))
  ;

  const adapter = {
    afterBuild: (x) => {
      consola.success(`${x.libraryName}  -  ${x.entry.replace(getNormalizedPath(__dirname), '')}`);
      return x;
    },
  };

  consola.info({
    badge: true,
    message: 'Starting',
  });
  const startTime = performance.now();
  const accumulatedOutput = [];

  try {
    for await (const outputs of buildWithBuffer(inputFilepaths, options, adapter)) {
      accumulatedOutput.push(...outputs);
    }
    const timeDuration = (performance.now() - startTime) / 1000;

    consola.success({
      badge: true,
      message: 'Build finished!',
    });
    consola.info(`Build ended: ${timeDuration.toFixed(2)} s`);

  } catch (error) {
    consola.error({
      badge: true,
      message: 'Build failed!',
    });
    consola.error({
      badge: false,
      message: error,
    });
  }
}

const getRenameInstruction = (target) => (normalizedFilePath) => {
  const pathArray = normalizedFilePath.split('/');

  const lastPart = pathArray.slice(-1);
  const [ libraryName, ...extensions ] = lastPart.slice(-1)[0].split(`.${target}`);
  const filename = `index${extensions.join('.')}`;

  const destination = [
    ...(pathArray.slice(0,-1)),
    target,
    libraryName,
  ]
    .join('/');
  const newPath = `${destination}/${filename}`;

  return ({
    oldPath: normalizedFilePath,
    destination,
    newPath,
  });
}

const move = (target) => {
  const targetFolder = path.resolve(__dirname, 'dist', target);
  fs.ensureDirSync(targetFolder);
  const toMoveFilepaths = glob
    .sync(`dist/*.${target}.{js,js.map}`, {
      ignore: 'node_modules/**/*',
    })
    .map(filepath => path.resolve(filepath))
  ;

  const getRenameInstructionForTarget = getRenameInstruction(target);

  toMoveFilepaths
    .map(getNormalizedPath)
    .map(getRenameInstructionForTarget)
    .map((instruction) => {
      const { oldPath, newPath, destination } = instruction;
      fs.ensureDirSync(destination);
      fs.renameSync(oldPath, newPath)
      return instruction;
    })
  ;
}

shell.rm('-rf', './dist');
build()
  .then(() => {
    move('umd');
    move('umd.min');
    move('common');
  })
;
