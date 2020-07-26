<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <p>
      The aim of this project is to take a tour of the tools to help you to build
      decentralized apps, by sharing my experiments.<br>
      Specifically with Solid & WebComponents, but you can propose your tools at
      <a href="https://github.com/scenaristeur/shighl-vuejs"
      target="_blank" rel="noopener">Shighl-vuejs repo</a>.
    </p>
    <p>First attempt : Build Form Components based on Vuejs from ShEx shapes.<br>
      WHY ? <br>
      Forms based on shapes allow you to describe your form in a text file using ShEx notation.
      You can share, distribute, reuse, modify this file the way you want.
      So apps, websites, webapps, native apps can have the same Form flow,
      to build same data structure, providing a magical step to interoperability.
    </p>

    <ul>
      <li>
        see <router-link to="/components">Components</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>

    <p><b>Disclaimer</b><br>
      No <b>ShEx Shape</b> has been hurted during the implementation of that App. <br>
      If you don't trust us about this point, you can find them in the
      <a href="https://holacratie.solid.community/public/Schema/">Schema</a> folder.<br>
      Don't hesitate to copy them on your POD or somewhere else and to modify
      them to use that App according to your needs ;-).

    </p>
    <!--
    <h3>Installed CLI Plugins</h3>
    <ul>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
  </ul>
  <h3>Essential Links</h3>
  <ul>
  <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
  <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
  <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
  <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
  <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
</ul>
<h3>Ecosystem</h3>
<ul>
<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
</ul>-->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
