<template>
  <div class="tab">


    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>Select a Tab to use a Form</p>

          <p>
            <b-button disabled>Toggle Debug</b-button>
          </p>

          <div class="brute-hide">
          <h5>{{ $options.name }}</h5>
            currentShape : {{ currentShape}}<br>
            shapes length ({{ shapes.length }}): {{ shapes }}<br>
            footprint_shapes ({{ footprint_shapes.length}}): {{ footprint_shapes}}<br>
            translate_shapes ({{ translate_shapes.length}}): {{ translate_shapes}}<br>
          </div>
        </b-tab>

        <b-tab  v-for="shape in shapes" :key="shape.id" :title="shape.localname">
          <p>  <a :href="shape.id" target="_blank">{{ shape.id }}</a></p>
          <FormShape :shape="shape"/>
        </b-tab>
      </b-tabs>
    </div>


  </div>
</template>

<script>
import store from '@/store'
import FormShape from '@/components/FormShape.vue'

export default {
  name: 'FormTab',
  components: {
    FormShape
  },
  props: {
    //  msg: String
  },
  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.currentShape
    },
    shapes () {
      return this.$store.state.shapes
    },
    footprint_shapes () {
      return this.$store.state.footprint_shapes
    },
    translate_shapes () {
      return this.$store.state.translate_shapes
    }

  }
}
</script>
