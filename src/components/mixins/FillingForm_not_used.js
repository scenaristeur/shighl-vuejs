export default {
  methods: {
    /* replaced by
    let data = {shape: this.currentShape, predicate: this.predicate, value: this.value, datatype: this.datatype}
    store.commit('local/fillForm', data)
--------------------

    fill(shape, predicate, value, datatype){
      data[shape] == undefined ? this.data[shape] = {} : ""
      data[shape][predicate]=value
      this.$store.commit('local/setData', data)
    }*/
  }
}
