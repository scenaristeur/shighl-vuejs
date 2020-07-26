<template>
  <div class="submit">
    <div class="mt-3">
      CurrentShape : {{ currentShape}}<br>
      WebId : {{ webId }}<br>
      Storage: {{ storage }}<br>
      STORAGE FROM POD : {{ storagePOD }}
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
      return this.$store.state.webId
    },
    currentShape () {
      return this.$store.state.currentShape
    },
    storage () {
      return this.$store.state.storage
    },
    storagePOD () {
      return pod.state.storage
    },
  },
  methods: {
    save() {
      console.log("CurrentShape",this.currentShape)
        pod.commit('changeOrAdd', this.currentShape, "Boo")
        pod.commit('changeOrAdd', "ba", "BoMPMo")
        console.log(pod.state.data)
        console.log(pod.state.data.ba)
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
