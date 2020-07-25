<template>
  <div class="hello">

Field

  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'FormField',
  components: {

  },
  props: {
    //  msg: String
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
    },
    shapes () {
      return this.$store.state.shapes
    }
  }
}
</script>
