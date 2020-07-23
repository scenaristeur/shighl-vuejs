<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<ShexLoader />-->
  </div>
</template>


<script>


export default {
  name: 'LoadShape',
  props: {
    msg: String
  },


  created(){

    /*    console.log("shexCore", shexCore)
    console.log("shexLoader", shexLoader)
    console.log("shexParser", shexParser)
    console.log("ShExJison", ShExJison)*/
    /*  let sl = new ShexLoader()
    console.log("SL",sl)*/
  },

  mounted(){
    let shape_url = "https://holacratie.solid.community/public/Schema/tension.shex"
    console.log("shexLoader", window.shexLoader)
    this.load_schema( shape_url )
  },
  methods: {
    methodName() {

    },
    async load_schema(shape_url){
      let app = this
      window.shexLoader.load([shape_url], [], [], []).then(loaded => {
        if (loaded.schema){
          //console.log("LOADED",loaded.schema)
          //app.schema = JSON.stringify(loaded.schema);
          app.splitSchema(loaded.schema)
        }
      }, err => {
        console.log("erreur ",err)
        alert(err.message)
      }
    );
  },


  async splitSchema(schema){
    var app = this;
    this.shapes = []
    this.footprint_shapes = []
    this.translate_shapes = []
    //console.log("shapes", schema.shapes)
    schema.shapes.forEach((shape) => {
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
    /*this.rootElement = document.getElementById(this.root)
    console.log("ROOT Element",this.rootElement)
    this.initRootElement()*/
  /*  this.shapes.forEach((shape) => {
      this.initShape(shape)
    });*/

    console.log("SHAPES",this.shapes)
    console.log("FOOTPRINT_SHAPES",this.footprint_shapes)
    console.log("TRANSLATE_SHAPES",this.translate_shapes)

  }

}
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
