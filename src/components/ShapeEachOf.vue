<template>
  <div class="modele">
    <ul  v-for="expression in expressions" :key="expression.predicate">
      <li>
        <FormField :expression="expression" />
      </li>
    </ul>

    <div class="brute">
      <h5>{{ $options.name }}</h5>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import FormField from '@/components/FormField.vue'

export default {
  name: 'ShapeEachOf',
  props: {
    expressions: Array
  },
  components: {
    FormField
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
  background-color: var(--celeste);
}

</style>
