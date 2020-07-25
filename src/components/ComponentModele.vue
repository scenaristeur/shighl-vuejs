<template>
  <div class="modele">
    <h5>Modele</h5>

    <div class="brute">

    </div>
    
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

<style scoped>
.modele {
  background-color: blue;
}

</style>
