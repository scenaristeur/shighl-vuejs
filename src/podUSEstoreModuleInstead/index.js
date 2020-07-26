import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webId: null,
    storage: "",
    count: 0,
    data: {}
  },
  mutations: {
    changeOrAdd(state, {key, value}) {
      Vue.set(state.data, key, value)
      console.log(state.data)
    },
    webId (state, webId) {
      state.webId = webId
    },
    storage (state, storage) {
      state.storage = storage
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
