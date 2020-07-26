<template>
  <div class="modele">
    <div>
      <b-input-group prepend="ShEx shape" class="mt-3">
        <b-form-input v-model="shape_url"
        placeholder="https://holacratie.solid.community/public/Schema/user.shex"
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="load">Load</b-button>
          <b-link href="https://holacratie.solid.community/public/Schema/" target="_blank">
            <b-button variant="info" >Suggestions</b-button></b-link>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </template>

  <script>
  import store from '@/store'
  import ShexMixin from './mixins/ShexMixin.js'

  export default {
    name: 'ShapeRemoteLoader',
    mixins: [ ShexMixin],
    data: function () {
      return {
        shape_url: "https://holacratie.solid.community/public/Schema/user.shex"
      }
    },
    methods: {
      load() {
        console.log(this.shape_url)
        this.load_schema(this.shape_url)
      }
    },
    computed: {
      currentShape () {
        return this.$store.state.local.currentShape
      }
    }
  }
  </script>
