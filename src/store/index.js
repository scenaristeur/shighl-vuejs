import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    shape_url: "",
    schema: null,
    currentShape: "",
    shapes: [],
    footprint_shapes: [],
    translate_shapes: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setShapeUrl (state, shape_url) {
      state.shape_url = shape_url
    },
    setSchema (state, schema) {
      state.schema = schema
    },
    setShapes (state, shapes) {
      state.shapes = shapes
    },
    setFShapes (state, fshapes) {
      state.footprint_shapes = fshapes
    },
    setTShapes (state, tshapes) {
      state.translate_shapes = tshapes
    },
    setCurrentShape (state, shape) {
      state.currentShape = shape
    },
  },
  actions: {
  },
  modules: {
  }
})
