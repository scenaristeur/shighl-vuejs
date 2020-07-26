<template>
  <div class="submit">
    <div class="mt-3">
      CurrentShape : {{ currentShape}}<br>
      WebId : {{ webId }}<br>
      Storage: {{ storage }}<br>

      <b-button-group>
        <b-button variant="success" @click="save">Save on currentShape (footprint)</b-button>
        <b-button variant="success" @click="save">Save on my POD</b-button>
        <b-button variant="info">Choose Where to save</b-button>
        <b-button variant="warning">Download</b-button>
      </b-button-group>
    </div>

  </div>
</template>

<script>
import store from '@/store'

//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormSubmit',
  components: {
    //  componentName
  },
  props: {
    attribut: String
  },

  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    webId(){
      return this.$store.state.local.webId
    },
    currentShape () {
      return this.$store.state.local.currentShape
    },
    storage () {
      return this.$store.state.local.storage
    },
  },
  methods: {
    save() {
      console.log("CurrentShape",this.currentShape)

    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
