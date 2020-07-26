<template>
  <div class="hello">

    <ExpressionSwitcher :expression="expression" />




    <div class="brute-hide">
      {{ $options.name }}<br>
      {{ expression }}
      <DebugProperties :object="expression"/>
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
      return this.$store.state.local.currentShape
    },
    shapes () {
      return this.$store.state.local.shapes
    }
  }
}
</script>
