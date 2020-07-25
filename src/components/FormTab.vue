<template>
  <div class="hello">


    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>Select a Tab to use a Form</p>

          <p>
            currentShape : {{ currentShape}}<br><br>
            Shapes : {{ shapes }}
          </p>
        </b-tab>

        <b-tab  v-for="shape in shapes" :key="shape.id" :title="shape.localname">
          <p>  {{ shape.id }}</p>
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
    }
  }
}
</script>
