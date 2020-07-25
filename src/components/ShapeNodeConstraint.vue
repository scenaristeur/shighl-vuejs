<template>
  <div class="modele">
    <FormInput :valueExpr="valueExpr"/>

    <div class="brute">
      <h5>{{ $options.name }}</h5>
      TODO : values, nodeKind, datatype
      {{ valueExpr }}<br>
      <DebugProperties :object="valueExpr" />
    </div>

  </div>
</template>

<script>
import store from '@/store'
import DebugProperties from '@/components/DebugProperties.vue'
import FormInput from '@/components/FormInput.vue'

export default {
  name: 'ShapeNodeConstraint',
  components: {
    DebugProperties, FormInput
  },
  props: {
    valueExpr: Object
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
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
