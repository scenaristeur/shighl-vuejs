<template>
  <div class="switcher">
    <div v-if="expression.type === 'EachOf'">
      <ShapeEachOf :expressions="expression.expressions" :predicate="predicate"/>
    </div>
    <div v-else-if="expression.type === 'TripleConstraint'">
      <ShapeTripleConstraint :valueExpr="expression.valueExpr" :predicate="predicate"/>
    </div>
    <div v-else-if="expression.type === 'NodeConstraint'">
      <ShapeNodeConstraint :valueExpr="expression" :predicate="predicate"/>
    </div>
    <div v-else-if="expression.type === 'ShapeOr'">
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
