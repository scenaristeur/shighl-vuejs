<template>
  <div class="triple-constraint">
    <div v-if="typeof valueExpr === 'string'" class="not-found">
      <FormSelect :source="valueExpr" :predicate="predicate"/>
    </div>
    <div v-else-if="typeof valueExpr === 'object'" class="found">
      <ExpressionSwitcher :expression="valueExpr" :predicate="predicate"/>
    </div>
    <div v-else class="not-found">TODO : typeof valueExpr unknown</div>
    <span v-if="valueExpr.min">min : {{valueExpr.min}} </span>
    <span v-if="valueExpr.max">max : {{valueExpr.max}}</span>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      typeof valueExpr: {{ typeof valueExpr}}<br>
      {{ valueExpr }}
    </div>

  </div>
</template>

<script>
import store from '@/store'
import ExpressionSwitcher from '@/components/ExpressionSwitcher.vue'
import FormSelect from '@/components/FormSelect.vue'

export default {
  name: 'ShapeTripleConstraint',
  components: {
    ExpressionSwitcher, FormSelect
  },
  props: {
    valueExpr:{
      type: [ String, Object ]
    },
    predicate: ""
  },

  data: function () {
    return {
      /*currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.local.currentShape
    }
  }
}
</script>
