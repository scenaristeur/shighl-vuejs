<template>
  <div class="properties" >

    <h5>DEBUG Properties</h5>
    <ul  v-for="p in properties" :key="p.key" >
      <li>  {{ p.key }} : {{ p.value }}

      </li>
    </ul>

    <div class="brute">
    {{ properties }}
  </div>


  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ComponentModele',
  props: {
    object: Object
  },
  data: function () {
    return {

    }
  },
  computed: {
    properties(){
      let props  = []
      for (const [key, value] of Object.entries(this.object)) {
        let  p = {key: key, value: value}
        props.push(p)
      }
      return props
    },
  }
}
</script>

<style scoped>
.properties {
  background-color: yellow;
}
</style>
