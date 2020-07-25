<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/components">Shighl-Vuejs Components</router-link> |
      <!--    <router-link to="/about">Shighl</router-link> |
      <router-link to="/about">Shighl-Elements</router-link> |-->
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  /* palette */
  --light-pink: hsla(0, 100%, 84%, 1);
  --deep-champagne: hsla(33, 100%, 82%, 1);
  --lemon-yellow-crayola: hsla(62, 100%, 86%, 1);
  --tea-green: hsla(110, 100%, 87%, 1);
  --celeste: hsla(185, 100%, 80%, 1);
  --baby-blue-eyes: hsla(217, 100%, 81%, 1);
  --maximum-blue-purple: hsla(249, 100%, 85%, 1);
  --mauve: hsla(300, 100%, 89%, 1);
  --baby-powder: hsla(60, 100%, 99%, 1);

}

.container {
  text-align: left;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* brute is used for debug */
.brute {
  background-color: var(--mauve);
  border:1px dotted black;
  font-size: smaller;
}
.brute-hide {
  display: none;
}
.brute:before {
  content: "♥ debug: ";
}
</style>
