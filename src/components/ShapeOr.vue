<template>
  <div class="shape-or">
PREDICATE SHAPEOR {{ predicate }}
    <FormRadio :shapeExprs="valueExpr.shapeExprs" :predicate="predicate"/>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      TODO shapeExprs <br>
      {{ valueExpr }}<br>
      <DebugProperties :object="valueExpr" />
    </div>

  </div>
</template>

<script>
import store from '@/store'
import DebugProperties from '@/components/DebugProperties.vue'
import FormRadio from '@/components/FormRadio.vue'


export default {
  name: 'ShapeOr',
  components: {
    DebugProperties, FormRadio
  },
  props: {
    valueExpr: Object,
    predicate: String
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
