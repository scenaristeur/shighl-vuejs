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
    },
  today(){
    var local = new Date();
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
}
  }
}
