<template>
  <div class="hello">

    <ExpressionSwitcher :expression="expression" />
    Expression de type {{ expression.type }}
    <DebugProperties :object="expression"/>



    <div class="brute">
      Expression {{ expression }}
    </div>


  </div>
</template>

<script>
import store from '@/store'
import ExpressionSwitcher from '@/components/ExpressionSwitcher.vue'
import DebugProperties from '@/components/DebugProperties.vue'

export default {
  name: 'FormExpression',
  components: {
    ExpressionSwitcher,
    DebugProperties
  },
  props: {
    expression: Object
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
