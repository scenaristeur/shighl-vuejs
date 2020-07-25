<template>
  <div class="modele">

    <b-form-group label="Individual radios">
      <b-form-radio
      v-for="option in options"
      :key="option.value"
      v-model="selected"
      name="some-radios"
      :value="option.value">


      <div v-if="typeof option.value === 'string'" class="not-found">
        {{ option.value }}
        <FormSelect :source="option.value"/>
      </div>
      <div v-else-if="typeof option.value === 'object'" class="found">
        <ExpressionSwitcher :expression="option.value" />
      </div>
      <div v-else class="not-found">TODO : typeof option.value unknown</div>





    </b-form-radio>
  </b-form-group>



  <div class="brute">
    <h5>{{ $options.name }}</h5>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    shapeExprs: {{ shapeExprs }}
    <hr>
  </div>

</div>
</template>

<script>
import store from '@/store'
import ExpressionSwitcher from '@/components/ExpressionSwitcher.vue'

export default {
  name: 'FormRadio',
  components: {
    ExpressionSwitcher
  },
  props: {
    shapeExprs: Array,
    selected: String
  },

  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    options () {
      let opts = [{text: "Option A", value:"A"}, {text:"Option B", value: "B"}]
      this.shapeExprs.forEach((se, i) => {
        console.log("se",se)
        let o = {text:i, value: se}
        opts.push(o)
      });

      return opts
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
