<template>
  <div class="select">
PREDICATE SELECT: {{ predicate}}
-
    <div>
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <b-button variant="secondary">New</b-button>
    </div>
    <div class="brute">
      <h5>{{ $options.name }}</h5>

      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      source : {{ source }}<br>
      options : {{ options }}<br>
      values : {{ values}}
      <!--          <DebugProperties :object="values" />-->
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'
import DebugProperties from '@/components/DebugProperties.vue'


export default {
  name: 'FormSelect',
  components: {
    DebugProperties
  },
  props: {
    source: String,
    values: Array,
    predicate: String
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
      return this.$store.state.currentShape
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
