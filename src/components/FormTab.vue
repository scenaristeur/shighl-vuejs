<template>
  <div class="tab">


    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>Select a Tab to use a Form</p>
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

        <b-tab
        v-for="shape in shapes"
        :key="shape.id" :title="shape.localname"
        @click="changeCurrentShape(shape.id)">
        <p>  <a :href="shape.id" target="_blank">{{ shape.id }}</a></p>
        <FormShape :shape="shape"/>
        <FormSubmit :shape="shape"/>
      </b-tab>
    </b-tabs>
  </div>


</div>
</template>

<script>
import store from '@/store'
import FormShape from '@/components/FormShape.vue'
import FormSubmit from '@/components/FormSubmit.vue'

export default {
  name: 'FormTab',
  components: {
    FormShape, FormSubmit
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
      store.commit('local/setCurrentShape', shape)
    }
  }
}
</script>
