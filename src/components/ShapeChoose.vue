<template>
  <div class="modele">
<!--<ShapeUpload />-->
<ShapeRemoteLoader />
  </div>
</template>

<script>
import store from '@/store'
// wainting for https://github.com/scenaristeur/shighl-vuejs/projects/1#card-42549729
//import ShapeUpload from '@/components/ShapeUpload.vue'
import ShapeRemoteLoader from '@/components/ShapeRemoteLoader.vue'

export default {
  name: 'ShapeChoose',
  components: {
  /*  ShapeUpload,*/ ShapeRemoteLoader
  },
}
</script>
