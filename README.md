# shighl-vuejs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# make a gh-pages branches
https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

create subbranch with dist folder
- comment the dist folder in the .gitignore file

```
git add dist -f && git commit -m "Initial dist subtree commit"
```

- build & publish to gh-pages

```
npm run build && git subtree push --prefix dist origin gh-pages

```

# ckeditor
https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs.html

# build a component
npx vue-cli-service build --mode production --dest lib --target lib --name loadShape --watch --dashboard

with 'entry' parametrized in vue.config.js file

```
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
  ? '/shighl-vuejs/'
  : '/'
  ,
  pages: {
    loadShape: {
      entry: 'src/components/LoadShape.vue',
      //  template: 'client/public/index.html',
      },
      },
    }
```

    # build multi components
    vue-cli-service build --target wc --name foo 'src/components/*.vue'
    vue-cli-service build --target wc-async --name shighl 'src/components/*.vue'  

    node build.js

    npx vue-cli-service build --mode production --dest lib --target wc-async --name shighl-vue
# sur windows , faire un raccourcis vers node_modules/.bin/vue-cli-service
C:\Users\Smag\Documents\dev\shighl-vuejs>vue-cli-service build --mode production --dest lib --target wc-async src/components/*.vue --no-clean


C:\Users\Smag\Documents\dev\shighl-vuejs>npx vue-cli-service build --mode production --dest lib --target wc-async src/components/*.vue --name shighl

npx vue-cli-service build --mode production --dest lib --target wc-async --name shighl-vue && cp src/vendor/* lib/vendor/

Async comp
https://blog.logrocket.com/how-async-components-can-optimize-performance-in-vue-apps/
https://fr.vuejs.org/v2/guide/components-dynamic-async.html
