<template>
  <div class="solid-login">
    <b-button variant="success" v-if="logged==false" @click="login">Login</b-button>
    <b-button variant="danger" v-else @click="logout">Logout</b-button>
    <div class="brute-hide">
      logged : {{ logged }}<br>
      webId : {{ webId }}<br>
      storage: {{ storage}}
      <hr>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import auth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';

console.log("FETCHDOCUMENT", fetchDocument)
//import '@solid/query-ldflex'

console.log("data",solid)

export default {
  name: 'SolidLogin',
  components: {
    auth,/* solidData*/
    //  componentName
  },
  props: {
    attribut: String
  },

  data: function () {
    return {
      logged: false,
      webId: null,
      storage: "boo"
    }
  },
  created(){
    auth.trackSession(async session => {
      if (!session){
        this.logged = false
        this.webId = null
        console.log('The user is not logged in', this.logged, this.webId)
        store.commit('local/setWebId', this.webId)
        store.commit('local/setStorage', "")
      }

      else{
        this.logged = true
        this.webId = session.webId
        console.log(`The user is ${session.webId}`)
        store.commit('local/setWebId', this.webId)
        let st  = await solid.data[session.webId].storage
        this.storage = `${st}`
        console.log(this.storage)
        store.commit('local/setStorage', this.storage)
        /*  console.log("STORAGE",`${solid.data.user.storage}`)
        let st = `${solid.data.user.storage}`
        console.log("STORAGE",st)
        store.commit('storage', st)*/
      }

    })
  },
  computed: {
    currentShape () {
      return this.$store.state.local.currentShape
    }
  },
  methods: {
    login(){
      this.popupLogin()
    },
    logout(){
      auth.logout()
    },
    async popupLogin() {
      let session = await auth.currentSession();
      let popupUri = 'https://solid.community/common/popup.html';
      if (!session)
      session = await auth.popupLogin({ popupUri });
      //  alert(`Logged in as ${session.webId}`);
    }

  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
