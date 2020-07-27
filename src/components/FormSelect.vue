<template>
  <div class="form-select">

    <div>
      [ not implemented yet see "Contribute menu" ;-)]
      <b-form-select disabled v-model="selected" :options="options" @change='updateValue'></b-form-select>
      <b-button variant="secondary" disabled>New</b-button>
    </div>
    <div class="brute-hide">
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
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  watch : {
    values(vs){
      console.log("VALUES CJ", vs)
      this.options =    [
        { value: 'd', text: 'This one is disabled'}

      ]
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
      this.fill(this.currentShape, this.predicate, value, "selectForm")
      //this.$store.commit('updateValue', e.target.value)
    }
  },
}
</script>
