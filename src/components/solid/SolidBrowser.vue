<template>
  <div class="solid-browser">
    <h5>{{ $options.name }}</h5>
    <!-- <componentName :attribut="property"/> -->

    attribut : {{ attribut }}

    <div class="brute-hide">

      <hr>
    </div>

  </div>
</template>

<script>
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
      return this.$store.state.local.currentShape
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
