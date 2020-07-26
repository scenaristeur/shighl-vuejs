import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import local from './modules/local'
import pod from './modules/pod'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products,
    local,
    pod
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
