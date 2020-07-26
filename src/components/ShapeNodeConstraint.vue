<template>
  <div class="node-constraint">
    <div v-if="valueExpr.values" class="not-found">
     <FormSelect :values="valueExpr.values" :predicate="predicate" :datatype="valueExpr.datatype"/>
    </div>
    <div v-else-if="valueExpr.nodeKind" class="found">
      <div v-if="valueExpr.nodeKind == 'literal'" class="not-found">
        <FormTextarea :nodeKind="valueExpr.nodeKind" :predicate="predicate"/>
      </div>
      <div v-else-if="valueExpr.nodeKind == 'iri'" class="not-found">
        URI TODO:  <FormInput :valueExpr="valueExpr" :predicate="predicate" :datatype="valueExpr.datatype"/>
      </div>
    </div>
    <div v-else class="not-found">
     <FormInput :valueExpr="valueExpr" :predicate="predicate" :datatype="valueExpr.datatype"/>
    </div>



    <div class="brute-hide">
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
import FormTextarea from '@/components/FormTextarea.vue'
import FormSelect from '@/components/FormSelect.vue'

export default {
  name: 'ShapeNodeConstraint',
  components: {
    DebugProperties, FormInput, FormSelect, FormTextarea
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
      return this.$store.state.local.currentShape
    }
  }
}
</script>
