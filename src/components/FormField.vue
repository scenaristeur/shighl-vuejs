<template>
  <div class="form-field">
    <h5>  <FormLabel :text="expression.predicate" /></h5>

    <ShapeTripleConstraint  :valueExpr="expression.valueExpr" :predicate="expression.predicate"/>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      {{ expression }}
    </div>

  </div>
</template>

<script>

import ShapeTripleConstraint from '@/components/ShapeTripleConstraint.vue'
import FormLabel from '@/components/FormLabel.vue'

export default {
  name: 'FormField',
  components: {
    ShapeTripleConstraint, FormLabel
  },
  props: {
    expression: Object
  },

  data: function () {
    return {
      currentShape: "",
      shapes: [],
    }
  },
  computed: {

  }
}
</script>
