<template>
  <div class="form-select">

    <div>
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <b-button v-if="source" variant="secondary" disabled>New</b-button>
    </div>
    <div class="brute d-none">
      <h5>{{ $options.name }}</h5>

      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      source : {{ source }}<br>
      options : {{ options }}<br>
      values : {{ values}}<br>
      datatype :   {{ datatype }}
      <!--          <DebugProperties :object="values" />-->
    </div>

  </div>
</template>

<script>
import store from '@/store'
import FillingForm from './mixins/FillingForm.js'
//  import componentName from '@/components/componentName.vue'
import DebugProperties from '@/components/DebugProperties.vue'


export default {
  name: 'FormSelect',
  mixins: [FillingForm],
  components: {
    DebugProperties
  },
  props: {
    source: String,
    values: Array,
    predicate: String,
    datatype: String
  },

  data: function () {
    return {
      selected: null,
      options: [ ]
    }
  },
  mounted(){
    if(this.values != undefined){
      console.log("VALUES CJ", this.values)
      this.values.forEach((v, i) => {
        v = v.value != null ? v.value : v
        let o = {value:v , text:v}
        console.log("o",o)
        this.options.push(o)
        console.log("opts1",this.options)
      });
      console.log("opts2",this.options)
    }
  },
  watch : {
    selected(value){
      console.log(value, this.currentShape, this.predicate)
      this.fill(this.currentShape, this.predicate, value, "selectForm")
    },
  },
  computed: {
    currentShape () {
      return this.$store.state.local.currentShape
    }
  },
}
</script>
