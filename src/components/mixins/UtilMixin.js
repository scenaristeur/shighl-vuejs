export default {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    },
    localname(uri){
      var ln = uri;
      if (uri.lastIndexOf("#") != -1) {
        ln = uri.substr(uri.lastIndexOf("#")).substr(1)
      }else{
        ln = uri.substr(uri.lastIndexOf("/")).substr(1)
      }
      return ln
    }
  }
}
