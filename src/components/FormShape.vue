<template>
  <div class="shape">

    <FormExpression :expression="shape.expression" />

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      Shape : {{ shape }}
      <DebugProperties :object="shape"/>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import FormExpression from '@/components/FormExpression.vue'
import DebugProperties from '@/components/DebugProperties.vue'

export default {
  name: 'FormShape',
  components: {
    FormExpression,
    DebugProperties
  },
  props: {
    shape: Object
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
