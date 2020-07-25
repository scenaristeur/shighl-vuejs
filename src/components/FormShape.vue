<template>
  <div class="hello">

  <FormExpression :expression="shape.expression" />

    <ul  v-for="p in properties" :key="p.key" >
      <li>  {{ p.key }} : {{ p.value }}

      </li>
    </ul>

{{ properties }}

  Shape : {{ shape }}
  </div>
</template>

<script>
import store from '@/store'
import FormExpression from '@/components/FormExpression.vue'

export default {
  name: 'FormShape',
  components: {
    FormExpression
  },
  props: {
    shape: Object
  },
  data: function () {
    return {

      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    properties(){
      let props  = []
      for (const [key, value] of Object.entries(this.shape)) {
      let  p = {key: key, value: value}
        props.push(p)
      }
      return props
    },
    currentShape () {
      return this.$store.state.currentShape
    },
    shapes () {
      return this.$store.state.shapes
    }
  }
}
</script>
