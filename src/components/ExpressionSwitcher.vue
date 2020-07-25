<template>
  <div class="switcher">
    PREDICATE EXPRESSIONSWITCHER {{ predicate }}
    <div v-if="expression.type === 'EachOf'" class="found">
      <ShapeEachOf :expressions="expression.expressions" :predicate="predicate"/>
    </div>
    <div v-else-if="expression.type === 'TripleConstraint'" class="found">
      <ShapeTripleConstraint :valueExpr="expression.valueExpr" :predicate="predicate"/>
    </div>
    <div v-else-if="expression.type === 'NodeConstraint'" class="found">
      <ShapeNodeConstraint :valueExpr="expression" :predicate="predicate"/>
    </div>
    <div v-else-if="expression.type === 'ShapeOr'" class="found">
      <ShapeOr :valueExpr="expression" :predicate="predicate"/>
    </div>

    <div v-else class="not-found">TODO {{ expression.type }}</div>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      Expression {{ expression }}
      <DebugProperties :object="expression"/>
    </div>


  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ExpressionSwitcher',
  components: {
    //Lazy import of components due to recursivity
    DebugProperties: () => import('@/components/DebugProperties.vue'),
    ShapeEachOf: () => import('@/components/ShapeEachOf.vue'),
    ShapeOr: () => import('@/components/ShapeOr.vue'),
    ShapeTripleConstraint: () => import('@/components/ShapeTripleConstraint.vue'),
    ShapeNodeConstraint: () => import('@/components/ShapeNodeConstraint.vue')
  },
  props: {
    expression: Object,
    predicate: String
  },
  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
}
</script>

<style scoped>
.found {
  background-color: var(--tea-green);
}
.not-found {
  background-color: red;

}
</style>
