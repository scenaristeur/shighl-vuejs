<template>
  <div class="form-tab">


    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active>
          <p>Select a Tab to use a Form or choose
            <b-link href="https://holacratie.solid.community/public/Schema/" target="_blank">another ShEx shapes</b-link>.


            <ShapeChoose />
            <SolidLogin />
            <!--
            <SolidLogin popupUri="/popup.html">
            <div slot-scope="{ initializing, login, logout, loggedIn, webId }">
            <button v-if="initializing">Loading...</button>
            <button v-else-if="loggedIn" @click="logout()" :title="webId">Log out</button>
            <button v-else @click="login()">Log In</button>
          </div>
        </SolidLogin>-->
      </p>
      <!--  <p>
      <b-button disabled>Toggle Debug</b-button>
    </p>-->

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      currentShape : {{ currentShape}}<br>
      shapes length ({{ shapes.length }}): {{ shapes }}<br>
      footprint_shapes ({{ footprint_shapes.length}}): {{ footprint_shapes}}<br>
      translate_shapes ({{ translate_shapes.length}}): {{ translate_shapes}}<br>
    </div>
  </b-tab>

<!--  -->
  <b-tab
  v-for="shape in shapes"
v-bind:class="{ active: currentShape == shape.id }"
  :key="shape.id" :title="shape.localname"
  @click="changeCurrentShape(shape.id)">
<!--test {{currentShape}} & {{shape.id}} -->
  <FormShape :shape="shape"/>
  <FormSubmit :shape="shape"/>

</b-tab>
</b-tabs>
</div>


</div>
</template>

<script>
import SolidLogin from '@/components/solid/SolidLogin.vue'
import ShapeChoose from '@/components/ShapeChoose.vue'
import FormShape from '@/components/FormShape.vue'
import FormSubmit from '@/components/FormSubmit.vue'

export default {
  name: 'FormTab',
  components: {
    FormShape, FormSubmit, SolidLogin, ShapeChoose
  },
  props: {
    //  msg: String
  },
  data: function () {
    return {
      //  currentShape: "",
/*      shapes: [],*/
    }
  },
  watch:{
    currentShape(s){
  console.log("2new current shape",s)
    }
  },
  computed: {
    currentShape (s) {
      console.log("new current shape",s)
      return this.$store.state.local.currentShape
    },
    shapes () {
      return this.$store.state.local.shapes
    },
    footprint_shapes () {
      return this.$store.state.local.footprint_shapes
    },
    translate_shapes () {
      return this.$store.state.local.translate_shapes
    }
  },
  methods: {
    changeCurrentShape(shape){
      console.log(shape)
      this.$store.commit('local/setCurrentShape', shape)
    }
  }
}
</script>
