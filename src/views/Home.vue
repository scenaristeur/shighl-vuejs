<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Shighl-vuejs"/>
    <!--  <SolidStore />-->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import SolidStore from '@/components/solid/SolidStore.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld/*SolidStore, */
  }
}
</script>
