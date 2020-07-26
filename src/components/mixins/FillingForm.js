export default {
  created: function () {
    this.hello()

  },
  methods: {
    hello: function () {
      console.log('hello from Filling Form!')
    },
    fill(shape, predicate, value, datatype){

      console.log("FILL",shape,predicate,value, datatype)
      data[shape] == undefined ? this.data[shape] = {} : ""
      data[shape][predicate]=value
      console.log("data", data)
      store.commit('local/setData', data)
    }
  }
}
