<template>
  <div class="label">
    <h4 :title="text"><u> {{label}}</u></h4>
  </div>
</template>

<script>
import store from '@/store'
import UtilMixin from './mixins/UtilMixin.js'

export default {
  name: 'FormLabel',
    mixins: [UtilMixin],
  props: {
    text: String
  },
  computed: {
    label () {
      return this.localname(this.text).charAt(0).toUpperCase() + this.localname(this.text).slice(1)
    }
  }
}
</script>
