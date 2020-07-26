<template>
  <div class="components">

    <h1>Components</h1>
    <LoadShape />


  </div>
</template>

<script>
// @ is an alias to /src
import LoadShape from '@/components/LoadShape.vue'

export default {
  name: 'Home',
  components: {
    LoadShape
  }
}
</script>
