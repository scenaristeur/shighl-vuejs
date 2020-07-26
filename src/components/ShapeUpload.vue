<template>
  <div class="modele">
    <h5>{{ $options.name }}</h5>

    <!-- Styled -->
    <b-form-file
    v-model="file"
    accept=".shex"
    :state="Boolean(file)"
    placeholder="Choose a shex file or drop it here..."
    drop-placeholder="Drop file here..."
    ></b-form-file>



    <div class="brute">
      currentShape : {{ currentShape }}
      <hr>
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'ShapeUpload',
  components: {
    //  componentName
  },
  props: {

  },

  data: function () {
    return {
      file: null,
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  watch:{
    file(f){
      console.log(f)
      const reader = new FileReader()
      reader.onload = this.handleFileLoad;
      reader.readAsText(f)



console.log("loaded")

}
},
methods: {
  handleFileLoad(event){
    console.log(event);
    console.log(event.target.result)
      window.shexLoader.load([event.target.result], [], [], []).then(loaded => {
    if (loaded.schema){
    console.log("LOADED",loaded.schema)
  //  store.commit('local/increment')

  //  console.log(store.state.local.count)
  //  store.commit('local/setSchema',loaded.schema)
    //console.log(store.state.local.schema)
    //app.schema = JSON.stringify(loaded.schema);
    //  app.splitSchema(loaded.schema)
  }
}, err => {
console.log("erreur ",err)
alert(err.message)

}
);
    //  document.getElementById('fileContent').textContent = event.target.result;
  }
},
computed: {
  currentShape () {
    return this.$store.state.local.currentShape
  }
}
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
