<template>
  <div class="brouillon">
    <!--  <SolidStore />-->
    test for modules in vuex
    <Shop />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import SolidStore from '@/components/solid/SolidStore.vue'
import Shop from '@/components/Shop.vue'

export default {
  name: 'Brouillon',
  components: {
    Shop /*SolidStore, */
  }
}
</script>
