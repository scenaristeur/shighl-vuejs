<template>
  <div class="shape-eachof">
ICI {{ currentShape }}
    <div class="contanier-fluid">
      <div class="row"  v-for="expression in expressions" :key="expression.predicate">
        <FormField :expression="expression" :predicate="predicate"/>
      </div>
    </div>



    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
    </div>
  </div>
  </template>

  <script>
  import store from '@/store'
  import FormField from '@/components/FormField.vue'

  export default {
    name: 'ShapeEachOf',
    props: {
      expressions: Array,
      predicate: String
    },
    components: {
      FormField
    },
    data: function () {
      return {
        currentShape: "",
        shapes: [],
      }
    },
  }
  </script>
