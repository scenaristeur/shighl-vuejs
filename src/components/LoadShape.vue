<template>
  <div class="load-shape">
    <!--
    <SolidLogin popupUri="/popup.html">
    <div slot-scope="{ initializing, login, logout, loggedIn, webId }">
    <button v-if="initializing">Loading...</button>
    <button v-else-if="loggedIn" @click="logout()" :title="webId">Log out</button>
    <button v-else @click="login()">Log In</button>
  </div>
</SolidLogin>-->
<SolidLogin />
<ShapeChoose />
<!--currentShape : {{ currentShape.id }}<br>-->
<FormTab />

<div class="brute-hide">
  shape_url : {{ shape_url }}<br>
  currentShape : {{ currentShape }}<br>
</div>
</div>
</template>


<script>
import store from '@/store'
import ShexMixin from './mixins/ShexMixin.js'
import FormTab from '@/components/FormTab.vue'
import SolidLogin from '@/components/solid/SolidLogin.vue'
import ShapeChoose from '@/components/ShapeChoose.vue'


export default {
  name: 'LoadShape',

  mixins: [ShexMixin],
  components: {
    FormTab, SolidLogin, ShapeChoose
  },
  data: function () {
    return {
      shape_url: "https://holacratie.solid.community/public/Schema/tension.shex",
      currentShape: {id:"Loading Shape..."},
      shapes: [],
      footprint_shapes: [],
      translate_shapes: []
    }
  },



  created(){

    console.log("shexCore", shexCore)
    console.log("shexLoader", shexLoader)
    /*    console.log("shexParser", shexParser)*/
    console.log("ShExJison", ShExJison)
    /*  let sl = new ShexLoader()
    console.log("SL",sl)*/
  },

  async mounted(){
    console.log("shexLoader", window.shexLoader)
    await this.load_schema( this.shape_url ) // see ShexMixin
    store.commit('local/setShapeUrl', this.shape_url)
    console.log(store.state.local.shape_url)
    console.log("fin load")
  },
  methods: {


  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
