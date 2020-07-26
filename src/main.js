import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//And import Bootstrap and BootstrapVue css files:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { currency } from './currency'

Vue.filter('currency', currency)
/*
import {Solid, SolidLogin} from 'vue-solid-plugin';
Vue.use(Solid);
Vue.component('SolidLogin', SolidLogin);*/

/*
console.log("shexCore", window.shexCore)
console.log("shexLoader", window.shexLoader)
console.log("shexParser", window.shexParser)
console.log("ShExJison", window.ShExJison)*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
