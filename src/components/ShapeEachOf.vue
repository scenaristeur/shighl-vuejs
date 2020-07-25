<template>
  <div class="modele">
    <p>You must fill each fields.</p>
    <div class="contanier-fluid">
      <div class="row"  v-for="expression in expressions" :key="expression.predicate">
        <FormField :expression="expression" />
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
      expressions: Array
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

  <style scoped>
  .modele {
    background-color: var(--celeste);
  }

  </style>
