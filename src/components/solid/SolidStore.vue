<template>
  <div class="solid-login">
    <h5>{{ $options.name }}</h5>
    <!-- <componentName :attribut="property"/> -->
    <ul>
       <li
         v-for="product in products"
         :key="product.id">
         {{ product.title }} - {{ product.price | currency }}
         <br>
         <button
           :disabled="!product.inventory"
           @click="addProductToCart(product)">
           Add to cart
         </button>
       </li>
     </ul>
    attribut : {{ attribut }}

    <div class="brute">

      <hr>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import { mapState, mapActions } from 'vuex'
//  import componentName from '@/components/componentName.vue'
/*
console.log(store.hasModule('pod'))
console.log(store.hasModule('pod/myModule'))
// register a module `myModule`
store.registerModule('pod', {

})

// register a nested module `nested/myModule`
store.registerModule(['pod', 'myModule'], {
})

store.hasModule('pod')
console.log(store.hasModule('pod'))
console.log(store.hasModule('pod/myModule'))

*/



export default {
  name: 'SolidStore',
  components: {
    //  componentName
  },
  props: {
    attribut: String
  },
  computed: mapState({
   products: state => state.products.all
 }),
 methods: mapActions('cart', [
   'addProductToCart'
 ]),
 created () {
   this.$store.dispatch('products/getAllProducts')
 },
 /*
created(){

  this.$store.commit('pod/increment')
     console.log(this.$store.state.local.pod.count)
     this.$store.commit('pod/increment')
        console.log(this.$store.state.local.pod.count)
        this.$store.commit('pod/increment')
           console.log(this.$store.state.local.pod.count)
           this.$store.commit('pod/increment')
            this.$store.commit('pod/increment')
             this.$store.commit('pod/increment')

              console.log(this.$store.state.local.pod.count)
              this.$store.commit('pod/increment')
                 console.log(this.$store.state.local.pod.count)
                 this.$store.commit('pod/increment')
                    console.log(this.$store.state.local.pod.count)

},*/
  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },

}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
