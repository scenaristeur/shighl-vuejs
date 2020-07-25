<template>
  <div class="input">


    <b-input-group size="lg">
      <b-form-input></b-form-input>
    </b-input-group>

    <div class="brute">
      <h5>{{ $options.name }}</h5>
      valueExpr : {{ valueExpr }}
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormInput',
  components: {
    //  componentName
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
