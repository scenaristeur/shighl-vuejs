export default {
  methods: {
    fill(shape, predicate, value, datatype){
      data[shape] == undefined ? this.data[shape] = {} : ""
      data[shape][predicate]=value
      this.$store.commit('local/setData', data)
    }
  }
}
