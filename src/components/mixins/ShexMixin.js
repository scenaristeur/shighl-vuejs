import store from '@/store'
import UtilMixin from '@/components/mixins/UtilMixin.js'

export default {
  created: function () {

  },
    mixins: [ UtilMixin],
  methods: {
    async load_schema(shape_url){
      console.log("loading")
      let app = this
      console.log(window.shexLoader)
      window.shexLoader.load([shape_url], [], [], []).then(loaded => {
        if (loaded.schema){
          console.log("LOADED",loaded.schema)
          store.commit('local/increment')

          console.log(store.state.local.count)
          store.commit('local/setSchema',loaded.schema)
          console.log(store.state.local.schema)
          //app.schema = JSON.stringify(loaded.schema);
          app.splitSchema(loaded.schema)
        }
      }, err => {
        console.log("erreur ",err)
        alert(err.message)
      //  app.currentShape.id = err.message
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
    this.currentShape = this.shapes[0].id
    store.commit('local/setCurrentShape', this.shapes[0].id)
    /*this.rootElement = document.getElementById(this.root)
    console.log("ROOT Element",this.rootElement)
    this.initRootElement()*/
    /*  this.shapes.forEach((shape) => {
    this.initShape(shape)
  });*/

  console.log("SHAPES",this.shapes)
  console.log("FOOTPRINT_SHAPES",this.footprint_shapes)
  console.log("TRANSLATE_SHAPES",this.translate_shapes)
  store.commit('local/setShapes', this.shapes)
  store.commit('local/setFShapes', this.footprint_shapes)
  store.commit('local/setTShapes', this.translate_shapes)
}




}
}
