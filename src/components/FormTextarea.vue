<template>
  <div class="form-textarea">

    <b-textarea value="" @change="updateValue"></b-textarea>


    <!--
    <b-input-group size="lg">
    <b-form-input></b-form-input>
  </b-input-group>
-->
<div class="brute-hide">
  <h5>{{ $options.name }}</h5>
  nodeKind : {{ nodeKind }}<br>
  datatype:   {{ datatype }}
</div>

</div>
</template>

<script>
import store from '@/store'
import FillingForm from './mixins/FillingForm.js'

//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormTextArea',
  mixins: [FillingForm],
  components: {
    //  componentName
  },
  props: {
    nodeKind: String,
    predicate: String,
    datatype: String,
  },

  data: function () {
    return {
      //predicate: String
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.local.currentShape
    }
  },
  methods: {
    updateValue (value) {
      console.log(value, this.currentShape, this.predicate)
      let data = {shape: this.currentShape, predicate: this.predicate, value: value, datatype: this.datatype}
      store.commit('local/fillForm', data)
      //  this.fill(this.currentShape, this.predicate, value, this.datatype)
      //this.$store.commit('updateValue', e.target.value)
    }
  },
}
</script>
