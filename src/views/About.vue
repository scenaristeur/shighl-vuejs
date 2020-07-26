<template>
  <div class="about">
    <h1>About Shighl-Vuejs</h1>


    <p>
      To build a Form from ShEx shape we need to use a descendant approach.<br>
      First loading a shape from it's url, then getting it's schema, with all the shapes in, and the starting shape.<br>
      Then for each shape found, we must see it's type, and it's properties, and according to them, go depper and deeper.<br>
      So the Webcomponent specification is very well switted for that as we can include components inside other components binding them some
      usefull properties of the parent. <br>
      A first proto of this app as already been made at <a href="https://scenaristeur.github.io/holon/" target="_blank">https://scenaristeur.github.io/holon/</a>.
      <br>
      Suggestions, Issues & Contributions on
      <ul>
        <li>
          <a href="https://github.com/scenaristeur/shighl-vuejs" target="_blank">Source</a>
        </li>
        <li>
          <a href="https://forum.solidproject.org/t/im-really-too-shexy-for-my-pod/2755/5" target="_blank">Forum</a>
        </li>
      </ul>

      Solid Librairies used :
      <ul>
        <li>
          solid-auth-client (Authetification)
        </li>
        <li>
          solid-file-client (files & folders level)
        </li>
        <li>
          tripledoc (document level)
        </li>
        <li>
          @solid/query-ldflex (triple level)
        </li>

      </ul>

    </p>

    <!--
    <iframe allowtransparency="true" width="485" height="402" src="https://forum.solidproject.org/t/im-really-too-shexy-for-my-pod/2755/5" frameborder="0" allowfullscreen></iframe>
  -->


  <h1>{{ msg }}</h1>
  <!--<ShexLoader />-->

  To load a ShEx shape in your html page you will need to import the browserified
  ShEx library modules (as i've not found how to import them in Vuejs component) : <br>
  They can be found in the public/vendor/ folder of this repo or by installing with
  <br>
  <i>
    npm install @shexjs/core @shexjs/loader<!-- @shexjs/parser -->
  </i>
  <br>
  <br><!--
  <a href="./examples/loadShape.html">LoadShape Demo</a> <br>
  <a href="./examples/loadShape.html">LoadShape Code</a>-->

  <div class="alert alert-secondary" role="alert">

    <pre><code>

      &lt;p&gt;Sample text here...&lt;/p&gt;
      &lt;p&gt;And another line of sample text here...&lt;/p&gt;

      &lt;script src="./vendor/shex-core-browserify.min.js"&gt;&lt;/script&gt;
      &lt;script src="./vendor/shex-loader-browserify.min.js"&gt;&lt;/script&gt;


    </code></pre>
  </div>
  <!--  &lt;script src="./vendor/shex-parser-browserify.min.js"&gt;&lt;/script&gt;-->




</div>
</template>

<style scoped>
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
