<template>
  <div class="select">

    <div>
      <b-form-select v-model="selected" :options="options"></b-form-select>

    </div>
    <div class="brute">
      <h5>{{ $options.name }}</h5>
      source : {{ source }}
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      options : {{ options }}
      <hr>
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormInput',
  components: {
    //  componentName
  },
  props: {
    source: String
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
