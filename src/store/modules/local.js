import shop from '../../api/shop'

// initial state
const state = () => ({
  count: 0,
  webId: null,
  storage: "",
  shape_url: "",
  schema: null,
  currentShape: "",
  shapes: [],
  footprint_shapes: [],
  translate_shapes: [],
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  increment (state) {
    state.count++
  },
  setWebId(state, webId){
    state.webId = webId
  },
  setStorage(state, storage){
    state.storage = storage
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
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
