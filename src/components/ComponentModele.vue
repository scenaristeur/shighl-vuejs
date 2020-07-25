<template>
  <div class="hello">



</div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ComponentModele',
  props: {
  //  msg: String
},
  data: function () {
    return {
      currentShape: "",
      shapes: [],
    }
  },
}
</script>
