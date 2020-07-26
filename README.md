# shighl-vuejs

# Special notes
- module in Vuex sounds cool to represent a temporary POD storage instead duplication of the Vuejs/vuex store in a pod (store interacting with a pod, solid-rest or whatelse ?)
https://vuex.vuejs.org/guide/modules.html
Vuex modules for namespaces and registration for nested modules .
https://vuex.vuejs.org/guide/plugins.html

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

### TODO
CHOICE :
-https://joshuajohnson.co.uk/Choices/   
-https://fr.vuejs.org/v2/cookbook/avoiding-memory-leaks.html



# make a gh-pages branches
https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

create subbranch with dist folder
- comment the dist folder in the .gitignore file

```
git add dist -f && git commit -m "Initial dist subtree commit"
```

- build & publish to gh-pages

```
npm run build && git add .
git commit -m "my modif"
git push && git subtree push --prefix dist origin gh-pages

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

# GTTD (GOOD TRACKS to Dev)  
- https://youtu.be/b9XasJth5i0
- https://www.youtube.com/watch?v=nNzszFdzxKk
- https://www.youtube.com/watch?v=iz6ZqsFX9x4
- https://www.youtube.com/watch?v=QhRPa7aG3eY
- https://www.youtube.com/watch?v=KJt-FM46eec
- https://www.youtube.com/watch?v=L2gZceGjDDk

# Palette
```
/*https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc*/
/* CSS */
--light-pink: hsla(0, 100%, 84%, 1);
--deep-champagne: hsla(33, 100%, 82%, 1);
--lemon-yellow-crayola: hsla(62, 100%, 86%, 1);
--tea-green: hsla(110, 100%, 87%, 1);
--celeste: hsla(185, 100%, 80%, 1);
--baby-blue-eyes: hsla(217, 100%, 81%, 1);
--maximum-blue-purple: hsla(249, 100%, 85%, 1);
--mauve: hsla(300, 100%, 89%, 1);
--baby-powder: hsla(60, 100%, 99%, 1);

/* SCSS HEX */
$light-pink: #ffadadff;
$deep-champagne: #ffd6a5ff;
$lemon-yellow-crayola: #fdffb6ff;
$tea-green: #caffbfff;
$celeste: #9bf6ffff;
$baby-blue-eyes: #a0c4ffff;
$maximum-blue-purple: #bdb2ffff;
$mauve: #ffc6ffff;
$baby-powder: #fffffcff;

/* SCSS HSL */
$light-pink: hsla(0, 100%, 84%, 1);
$deep-champagne: hsla(33, 100%, 82%, 1);
$lemon-yellow-crayola: hsla(62, 100%, 86%, 1);
$tea-green: hsla(110, 100%, 87%, 1);
$celeste: hsla(185, 100%, 80%, 1);
$baby-blue-eyes: hsla(217, 100%, 81%, 1);
$maximum-blue-purple: hsla(249, 100%, 85%, 1);
$mauve: hsla(300, 100%, 89%, 1);
$baby-powder: hsla(60, 100%, 99%, 1);

/* SCSS RGB */
$light-pink: rgba(255, 173, 173, 1);
$deep-champagne: rgba(255, 214, 165, 1);
$lemon-yellow-crayola: rgba(253, 255, 182, 1);
$tea-green: rgba(202, 255, 191, 1);
$celeste: rgba(155, 246, 255, 1);
$baby-blue-eyes: rgba(160, 196, 255, 1);
$maximum-blue-purple: rgba(189, 178, 255, 1);
$mauve: rgba(255, 198, 255, 1);
$baby-powder: rgba(255, 255, 252, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-right: linear-gradient(90deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-bottom: linear-gradient(180deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-left: linear-gradient(270deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-top-right: linear-gradient(45deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-bottom-right: linear-gradient(135deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-top-left: linear-gradient(225deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-bottom-left: linear-gradient(315deg, #ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
$gradient-radial: radial-gradient(#ffadadff, #ffd6a5ff, #fdffb6ff, #caffbfff, #9bf6ffff, #a0c4ffff, #bdb2ffff, #ffc6ffff, #fffffcff);
```
