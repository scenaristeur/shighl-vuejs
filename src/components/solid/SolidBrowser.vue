<template>
  <div class="solid-login">
    <h5>{{ $options.name }}</h5>
    <!-- <componentName :attribut="property"/> -->

    attribut : {{ attribut }}

    <div class="brute">

      <hr>
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'SolidLogin',
  components: {
    //  componentName
  },
  props: {
    attribut: String
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
