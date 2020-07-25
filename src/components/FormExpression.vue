<template>
  <div class="hello">

    Expression de type {{ expression.type }}


    <h1 v-if="expression.type === 'EachOf'">
      EachOf form eachof 
    </h1>
    <h1 v-else-if="expression.type === 'EachOf'">OneOf</h1>
    <h1 v-else>TODO {{ expression.type }}</h1>

    <br>
    {{ expression}}

  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'FormExpression',
  components: {

  },
  props: {
    expression: Object
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
