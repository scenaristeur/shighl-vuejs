<template>
  <div class="modele">
    <h5>{{ $options.name }}</h5>
    <!-- <componentName :attribut="property"/> -->

    attribut : {{ attribut }}
<ShapeUpload />
    <div class="brute-hide">

      <hr>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import ShapeUpload from '@/components/ShapeUpload.vue'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'ShapeChoose',
  components: {
    ShapeUpload
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
