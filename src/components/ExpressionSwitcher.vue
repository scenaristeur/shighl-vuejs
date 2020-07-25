<template>
  <div class="switcher">
    <div class="brute">
      

      Switcher :
      <h1 v-if="expression.type === 'EachOf'" class="found">
        EachOf form eachOf

      </h1>
      <h1 v-else-if="expression.type === 'EachOf'" class="found">OneOf</h1>
      <h1 v-else class="not-found">TODO {{ expression.type }}</h1>

    </div>

  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ExpressionSwitcher',
  props: {
    expression: Object
  },
  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
}
</script>

<style scoped>
.found {
  background-color: green;
}
.not-found {
  background-color: red;
}
</style>
