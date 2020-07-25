<template>
  <div class="textarea">

<b-textarea value="flow">BOO</b-textarea>


<!--
    <b-input-group size="lg">
      <b-form-input></b-form-input>
    </b-input-group>
-->
    <div class="brute">
      <h5>{{ $options.name }}</h5>
      nodeKind : {{ nodeKind }}
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormTextArea',
  components: {
    //  componentName
  },
  props: {
    nodeKind: String
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
