<template>
  <div class="shape-choose">

    <ShapeRemoteLoader />
    <div class="row d-none">
      <div class="col">
          <ShapeEditor />
      </div>
      <div class="col">
      <ShapeUpload />
      </div>
    </div>
  </div>
</template>

<script>
// wainting for https://github.com/scenaristeur/shighl-vuejs/projects/1#card-42549729
import ShapeUpload from '@/components/ShapeUpload.vue'
import ShapeRemoteLoader from '@/components/ShapeRemoteLoader.vue'
import ShapeEditor from '@/components/ShapeEditor.vue'

export default {
  name: 'ShapeChoose',
  components: {
    ShapeUpload, ShapeRemoteLoader, ShapeEditor
  },
}
</script>
