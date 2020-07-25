<template>
  <div class="load-shape">
    <div class="container">



      <FormTab />

      <h1>{{ msg }}</h1>
      <!--<ShexLoader />-->

      To load a ShEx shape in your html page you will need to import the browserified
      ShEx library modules (as i've not found how to import them in Vuejs component) : <br>
      They can be found in the public/vendor/ folder of this repo or by installing with
      <br>
      <i>
        npm install @shexjs/core @shexjs/loader @shexjs/parser
      </i>
      <br>
      <br>
      <a href="./examples/loadShape.html">LoadShape Demo</a> <br>
      <a href="./examples/loadShape.html">LoadShape Code</a>

      <div class="alert alert-secondary" role="alert">

        <pre><code>

          &lt;p&gt;Sample text here...&lt;/p&gt;
          &lt;p&gt;And another line of sample text here...&lt;/p&gt;

          &lt;script src="./vendor/shex-core-browserify.min.js"&gt;&lt;/script&gt;
          &lt;script src="./vendor/shex-loader-browserify.min.js"&gt;&lt;/script&gt;
          &lt;script src="./vendor/shex-parser-browserify.min.js"&gt;&lt;/script&gt;

        </code></pre>
      </div>
      
      <div class="alert alert-secondary" role="alert">
        shape_url : {{ shape_url }}<br>
        currentShape : {{ currentShape }}<br>
        shapes length ({{ shapes.length }}): {{ shapes }}<br>
        footprint_shapes ({{ footprint_shapes.length}}): {{ footprint_shapes}}<br>
        translate_shapes ({{ translate_shapes.length}}): {{ translate_shapes}}<br>
      </div>

    </div>

  </div>
</template>


<script>
import store from '@/store'
import UtilMixin from './mixins/UtilMixin.js'
import FormTab from '@/components/FormTab.vue'

export default {
  name: 'LoadShape',
  props: {
    msg: String,
  },
  mixins: [UtilMixin],
  components: {
    FormTab
  },
  data: function () {
    return {
      shape_url: "https://holacratie.solid.community/public/Schema/tension.shex",
      currentShape: "",
      shapes: [],
      footprint_shapes: [],
      translate_shapes: []
    }
  },



  created(){

    console.log("shexCore", shexCore)
    console.log("shexLoader", shexLoader)
    console.log("shexParser", shexParser)
    console.log("ShExJison", ShExJison)
    /*  let sl = new ShexLoader()
    console.log("SL",sl)*/
  },

  async mounted(){
    console.log("shexLoader", window.shexLoader)
    await this.load_schema( this.shape_url )
    store.commit('setShapeUrl', this.shape_url)
    console.log(store.state.shape_url)
    console.log("fin load")
  },
  methods: {
    methodName() {

    },
    async load_schema(shape_url){
      console.log("loading")
      let app = this
      window.shexLoader.load([shape_url], [], [], []).then(loaded => {
        if (loaded.schema){
          console.log("LOADED",loaded.schema)
          store.commit('increment')

          console.log(store.state.count)
          store.commit('setSchema',loaded.schema)
          console.log(store.state.schema)
          //app.schema = JSON.stringify(loaded.schema);
          app.splitSchema(loaded.schema)
        }
      }, err => {
        console.log("erreur ",err)
        alert(err.message)
      }
    );
    console.log("loaded")
  },


  async splitSchema(schema){
    var app = this;
    this.shapes = []
    this.footprint_shapes = []
    this.translate_shapes = []
    //console.log("shapes", schema.shapes)
    schema.shapes.forEach((shape) => {
      shape.localname = this.localname(shape.id)
      if(shape.id.endsWith("_Footprint")){
        shape.use = "footprint"
        this.footprint_shapes.push(shape)
      } else if(shape.id.endsWith("_Translate")){
        shape.use = "translate"
        app.translate_shapes.push(shape)
      }  else {
        shape.use = "regular"
        app.shapes.push(shape)
      }
    });
    this.currentShape = this.shapes[0]
    store.commit('setCurrentShape', this.currentShape)
    /*this.rootElement = document.getElementById(this.root)
    console.log("ROOT Element",this.rootElement)
    this.initRootElement()*/
    /*  this.shapes.forEach((shape) => {
    this.initShape(shape)
  });*/

  console.log("SHAPES",this.shapes)
  console.log("FOOTPRINT_SHAPES",this.footprint_shapes)
  console.log("TRANSLATE_SHAPES",this.translate_shapes)
  store.commit('setShapes', this.shapes)
  store.commit('setFShapes', this.footprint_shapes)
  store.commit('setTShapes', this.translate_shapes)
}

}
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load-shape {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
