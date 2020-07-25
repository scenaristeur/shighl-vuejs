(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?s(t):o(n(t))}},"118a":function(t,e,r){},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var s in o){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=r("ae40"),i=o("forEach"),s=a("forEach");t.exports=i&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2311:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"components"},[r("h1",[t._v("Components")]),r("LoadShape",{attrs:{msg:"LoadShape"}}),r("div",[r("div",[r("b-button-group",[r("b-button",[t._v("Button 1")]),r("b-button",[t._v("Button 2")]),r("b-button",[t._v("Button 3")])],1)],1),r("div",{staticClass:"mt-3"},[r("b-button-group",[r("b-button",{attrs:{variant:"success"}},[t._v("Success")]),r("b-button",{attrs:{variant:"info"}},[t._v("Info")]),r("b-button",{attrs:{variant:"warning"}},[t._v("Warning")])],1)],1)])],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"load-shape"},[t._v(" currentShape : "+t._s(t.currentShape.id)),r("br"),r("FormTab"),r("h1",[t._v(t._s(t.msg))]),t._v(" To load a ShEx shape in your html page you will need to import the browserified ShEx library modules (as i've not found how to import them in Vuejs component) : "),r("br"),t._v(" They can be found in the public/vendor/ folder of this repo or by installing with "),r("br"),r("i",[t._v(" npm install @shexjs/core @shexjs/loader")]),r("br"),r("br"),r("a",{attrs:{href:"./examples/loadShape.html"}},[t._v("LoadShape Demo")]),t._v(" "),r("br"),r("a",{attrs:{href:"./examples/loadShape.html"}},[t._v("LoadShape Code")]),t._m(0),r("div",{staticClass:"brute"},[t._v(" shape_url : "+t._s(t.shape_url)),r("br"),t._v(" currentShape : "+t._s(t.currentShape)),r("br")])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-secondary",attrs:{role:"alert"}},[r("pre",[r("code",[t._v('\n\n        <p>Sample text here...</p>\n        <p>And another line of sample text here...</p>\n\n        <script src="./vendor/shex-core-browserify.min.js"><\/script>\n        <script src="./vendor/shex-loader-browserify.min.js"><\/script>\n\n\n      ')])])])}];r("4160"),r("8a79"),r("159b"),r("96cf"),r("d3b7"),r("e6cf");function s(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))}}var u=r("4360"),f=r("8218"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab"},[r("div",[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"First",active:""}},[r("p",[t._v("Select a Tab to use a Form")]),r("p",[r("b-button",{attrs:{disabled:""}},[t._v("Toggle Debug")])],1),r("div",{staticClass:"brute"},[r("h5",[t._v(t._s(t.$options.name))]),t._v(" currentShape : "+t._s(t.currentShape)),r("br"),t._v(" shapes length ("+t._s(t.shapes.length)+"): "+t._s(t.shapes)),r("br"),t._v(" footprint_shapes ("+t._s(t.footprint_shapes.length)+"): "+t._s(t.footprint_shapes)),r("br"),t._v(" translate_shapes ("+t._s(t.translate_shapes.length)+"): "+t._s(t.translate_shapes)),r("br")])]),t._l(t.shapes,(function(e){return r("b-tab",{key:e.id,attrs:{title:e.localname}},[r("p",[r("a",{attrs:{href:e.id,target:"_blank"}},[t._v(t._s(e.id))])]),r("FormShape",{attrs:{shape:e}})],1)}))],2)],1)])},h=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shape"},[r("FormExpression",{attrs:{expression:t.shape.expression}}),r("div",{staticClass:"brute"},[r("h5",[t._v(t._s(t.$options.name))]),t._v(" Shape : "+t._s(t.shape)+" "),r("DebugProperties",{attrs:{object:t.shape}})],1)],1)},d=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("ExpressionSwitcher",{attrs:{expression:t.expression}}),r("div",{staticClass:"brute"},[t._v(" "+t._s(t.$options.name)),r("br"),t._v(" "+t._s(t.expression)+" "),r("DebugProperties",{attrs:{object:t.expression}})],1)],1)},b=[],m=r("3af3"),g=r("fb86"),y={name:"FormExpression",components:{ExpressionSwitcher:m["a"],DebugProperties:g["default"]},props:{expression:Object},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.currentShape},shapes:function(){return this.$store.state.shapes}}},S=y,_=r("2877"),x=Object(_["a"])(S,v,b,!1,null,null,null),w=x.exports,E={name:"FormShape",components:{FormExpression:w,DebugProperties:g["default"]},props:{shape:Object},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.currentShape},shapes:function(){return this.$store.state.shapes}}},O=E,L=Object(_["a"])(O,p,d,!1,null,null,null),j=L.exports,C={name:"FormTab",components:{FormShape:j},props:{},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.currentShape},shapes:function(){return this.$store.state.shapes},footprint_shapes:function(){return this.$store.state.footprint_shapes},translate_shapes:function(){return this.$store.state.translate_shapes}}},A=C,T=Object(_["a"])(A,l,h,!1,null,null,null),P=T.exports,k={name:"LoadShape",props:{msg:String},mixins:[f["a"]],components:{FormTab:P},data:function(){return{shape_url:"https://holacratie.solid.community/public/Schema/tension.shex",currentShape:{id:"Loading Shape..."},shapes:[],footprint_shapes:[],translate_shapes:[]}},created:function(){console.log("shexCore",shexCore),console.log("shexLoader",shexLoader),console.log("ShExJison",ShExJison)},mounted:function(){var t=this;return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("shexLoader",window.shexLoader),e.next=3,t.load_schema(t.shape_url);case 3:u["a"].commit("setShapeUrl",t.shape_url),console.log(u["a"].state.shape_url),console.log("fin load");case 6:case"end":return e.stop()}}),e)})))()},methods:{methodName:function(){},load_schema:function(t){var e=this;return c(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("loading"),n=e,window.shexLoader.load([t],[],[],[]).then((function(t){t.schema&&(console.log("LOADED",t.schema),u["a"].commit("increment"),console.log(u["a"].state.count),u["a"].commit("setSchema",t.schema),console.log(u["a"].state.schema),n.splitSchema(t.schema))}),(function(t){console.log("erreur ",t),alert(t.message),n.currentShape.id=t.message})),console.log("loaded");case 4:case"end":return r.stop()}}),r)})))()},splitSchema:function(t){var e=this;return c(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e,e.shapes=[],e.footprint_shapes=[],e.translate_shapes=[],t.shapes.forEach((function(t){t.localname=e.localname(t.id),t.id.endsWith("_Footprint")?(t.use="footprint",e.footprint_shapes.push(t)):t.id.endsWith("_Translate")?(t.use="translate",n.translate_shapes.push(t)):(t.use="regular",n.shapes.push(t))})),e.currentShape=e.shapes[0],u["a"].commit("setCurrentShape",e.currentShape),console.log("SHAPES",e.shapes),console.log("FOOTPRINT_SHAPES",e.footprint_shapes),console.log("TRANSLATE_SHAPES",e.translate_shapes),u["a"].commit("setShapes",e.shapes),u["a"].commit("setFShapes",e.footprint_shapes),u["a"].commit("setTShapes",e.translate_shapes);case 13:case"end":return r.stop()}}),r)})))()}}},F=k,$=(r("77eb"),Object(_["a"])(F,a,i,!1,null,"628e02b8",null)),N=$.exports,R={name:"Home",components:{LoadShape:N}},I=R,D=Object(_["a"])(I,n,o,!1,null,null,null);e["default"]=D.exports},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),a=r("d039"),i=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],f=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=s;(f||l)&&n(RegExp.prototype,s,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"314a":function(t,e,r){},"3af3":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"switcher"},["EachOf"===t.expression.type?r("div",{staticClass:"found"},[r("ShapeEachOf",{attrs:{expressions:t.expression.expressions}})],1):"TripleConstraint"===t.expression.type?r("div",{staticClass:"found"},[r("ShapeTripleConstraint",{attrs:{valueExpr:t.expression.valueExpr}})],1):"NodeConstraint"===t.expression.type?r("div",{staticClass:"found"},[r("ShapeNodeConstraint",{attrs:{valueExpr:t.expression}})],1):"ShapeOr"===t.expression.type?r("div",{staticClass:"found"},[r("ShapeOr",{attrs:{valueExpr:t.expression}})],1):r("div",{staticClass:"not-found"},[t._v("TODO "+t._s(t.expression.type))]),r("div",{staticClass:"brute"},[r("h5",[t._v(t._s(t.$options.name))]),t._v(" Expression "+t._s(t.expression)+" "),r("DebugProperties",{attrs:{object:t.expression}})],1)])},o=[],a=(r("d3b7"),r("4360"),{name:"ExpressionSwitcher",components:{DebugProperties:function(){return Promise.resolve().then(r.bind(null,"fb86"))},ShapeEachOf:function(){return r.e("chunk-0d62bb54").then(r.bind(null,"b7e3"))},ShapeOr:function(){return r.e("chunk-350cd064").then(r.bind(null,"b4a7"))},ShapeTripleConstraint:function(){return r.e("chunk-32b7d0f8").then(r.bind(null,"4b99"))},ShapeNodeConstraint:function(){return r.e("chunk-2c44f18b").then(r.bind(null,"2719"))}},props:{expression:Object},data:function(){return{}}}),i=a,s=(r("53b2"),r("2877")),c=Object(s["a"])(i,n,o,!1,null,"747691d2",null);e["a"]=c.exports},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),a=r("7dd0"),i="String Iterator",s=o.set,c=o.getterFor(i);a(String,"String",(function(t){s(this,{type:i,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),a=r("b622"),i=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"49f3":function(t,e,r){"use strict";var n=r("314a"),o=r.n(n);o.a},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,h,p,d=o(t),v="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,g=void 0!==m,y=u(d),S=0;if(g&&(m=n(m,b>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(e=s(d.length),r=new v(e);e>S;S++)p=g?m(d[S],S):d[S],c(r,S,p);else for(l=y.call(d),h=l.next,r=new v;!(f=h.call(l)).done;S++)p=g?a(l,m,[f.value,S],!0):f.value,c(r,S,p);return r.length=S,r}},"4fad":function(t,e,r){var n=r("23e7"),o=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},"53b2":function(t,e,r){"use strict";var n=r("eace"),o=r.n(n);o.a},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),a=function(t){return function(e,r){var a,i,s=String(o(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===u||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):a:t?s.slice(c,c+2):i-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6f53":function(t,e,r){var n=r("83ab"),o=r("df75"),a=r("fc6a"),i=r("d1e7").f,s=function(t){return function(e){var r,s=a(e),c=o(s),u=c.length,f=0,l=[];while(u>f)r=c[f++],n&&!i.call(s,r)||l.push(t?[r,s[r]]:s[r]);return l}};t.exports={entries:s(!0),values:s(!1)}},7295:function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},"77eb":function(t,e,r){"use strict";var n=r("118a"),o=r.n(n);o.a},8218:function(t,e,r){"use strict";r("baa5");e["a"]={created:function(){this.hello()},methods:{hello:function(){console.log("hello from mixin!")},localname:function(t){var e=t;return e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e}}}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"8a79":function(t,e,r){"use strict";var n=r("23e7"),o=r("06cf").f,a=r("50c4"),i=r("5a34"),s=r("1d80"),c=r("ab13"),u=r("c430"),f="".endsWith,l=Math.min,h=c("endsWith"),p=!u&&!h&&!!function(){var t=o(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(s(this));i(t);var r=arguments.length>1?arguments[1]:void 0,n=a(e.length),o=void 0===r?n:l(a(r),n),c=String(t);return f?f.call(e,c,o):e.slice(o-c.length,o)===c}})},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=O(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function b(){}function m(){}function g(){}var y={};y[a]=function(){return this};var S=Object.getPrototypeOf,_=S&&S(S(T([])));_&&_!==r&&n.call(_,a)&&(y=_);var x=g.prototype=b.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,s){var c=f(t[o],t,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function O(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),c(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),h=r("e8b5"),p=r("861d"),d=r("825a"),v=r("7b0b"),b=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),S=r("df75"),_=r("241c"),x=r("057f"),w=r("7418"),E=r("06cf"),O=r("9bf2"),L=r("d1e7"),j=r("9112"),C=r("6eeb"),A=r("5692"),T=r("f772"),P=r("d012"),k=r("90e3"),F=r("b622"),$=r("e538"),N=r("746f"),R=r("d44e"),I=r("69f3"),D=r("b727").forEach,G=T("hidden"),M="Symbol",V="prototype",W=F("toPrimitive"),H=I.set,J=I.getterFor(M),B=Object[V],U=o.Symbol,Y=a("JSON","stringify"),q=E.f,Q=O.f,z=x.f,K=L.f,X=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=o.QObject,ot=!nt||!nt[V]||!nt[V].findChild,at=s&&f((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(B,e);n&&delete B[e],Q(t,e,r),n&&t!==B&&Q(B,e,n)}:Q,it=function(t,e){var r=X[t]=y(U[V]);return H(r,{type:M,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,r){t===B&&ct(Z,e,r),d(t);var n=m(e,!0);return d(r),l(X,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,G)||Q(t,G,g(1,{})),t[G][n]=!0),at(t,n,r)):Q(t,n,r)},ut=function(t,e){d(t);var r=b(e),n=S(r).concat(dt(r));return D(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=m(t,!0),r=K.call(this,e);return!(this===B&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,G)&&this[G][e])||r)},ht=function(t,e){var r=b(t),n=m(e,!0);if(r!==B||!l(X,n)||l(Z,n)){var o=q(r,n);return!o||!l(X,n)||l(r,G)&&r[G][n]||(o.enumerable=!0),o}},pt=function(t){var e=z(b(t)),r=[];return D(e,(function(t){l(X,t)||l(P,t)||r.push(t)})),r},dt=function(t){var e=t===B,r=z(e?Z:b(t)),n=[];return D(r,(function(t){!l(X,t)||e&&!l(B,t)||n.push(X[t])})),n};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=k(t),r=function(t){this===B&&r.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),at(this,e,g(1,t))};return s&&ot&&at(B,e,{configurable:!0,set:r}),it(e,t)},C(U[V],"toString",(function(){return J(this).tag})),C(U,"withoutSetter",(function(t){return it(k(t),t)})),L.f=lt,O.f=ct,E.f=ht,_.f=x.f=pt,w.f=dt,$.f=function(t){return it(F(t),t)},s&&(Q(U[V],"description",{configurable:!0,get:function(){return J(this).description}}),i||C(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),D(S(rt),(function(t){N(t)})),n({target:M,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),Y){var vt=!c||f((function(){var t=U();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,Y.apply(null,o)}})}U[V][W]||j(U[V],W,U[V].valueOf),R(U,M),P[G]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),a=r("5135"),i=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var r=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:c,l=a(e,1)?e[1]:void 0;return s[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,f,l)}))}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&o(a,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),a=r("7b0b"),i=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,h=5==t||l;return function(p,d,v,b){for(var m,g,y=a(p),S=o(y),_=n(d,v,3),x=i(S.length),w=0,E=b||s,O=e?E(p,x):r?E(p,0):void 0;x>w;w++)if((h||w in S)&&(m=S[w],g=_(m,w,y),t))if(e)O[w]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:c.call(O,m)}else if(f)return!1;return l?-1:u||f?f:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},baa5:function(t,e,r){var n=r("23e7"),o=r("e58c");n({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},c25d:function(t,e,r){"use strict";var n=r("7295"),o=r.n(n);o.a},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("e260"),i=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),f=a.values;for(var l in o){var h=n[l],p=h&&h.prototype;if(p){if(p[c]!==f)try{i(p,c,f)}catch(v){p[c]=f}if(p[u]||i(p,u,l),o[l])for(var d in a)if(p[d]!==a[d])try{i(p,d,a[d])}catch(v){p[d]=a[d]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=a.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(h,f);var p=h.prototype=f.prototype;p.constructor=h;var d=p.toString,v="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=d.call(t);if(i(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,r){var n=r("b622");e.f=n},e58c:function(t,e,r){"use strict";var n=r("fc6a"),o=r("a691"),a=r("50c4"),i=r("a640"),s=r("ae40"),c=Math.min,u=[].lastIndexOf,f=!!u&&1/[1].lastIndexOf(1,-0)<0,l=i("lastIndexOf"),h=s("indexOf",{ACCESSORS:!0,1:0}),p=f||!l||!h;t.exports=p?function(t){if(f)return u.apply(this,arguments)||0;var e=n(this),r=a(e.length),i=r-1;for(arguments.length>1&&(i=c(i,o(arguments[1]))),i<0&&(i=r+i);i>=0;i--)if(i in e&&e[i]===t)return i||0;return-1}:u},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},eace:function(t,e,r){},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("About Shighl-Vuejs")]),r("p",[t._v(" To build a Form from ShEx shape we need to use a descendant approach."),r("br"),t._v(" First loading a shape from it's url, then getting it's schema, with all the shapes in, and the starting shape."),r("br"),t._v(" Then for each shape found, we must see it's type, and it's properties, and according to them, go depper and deeper."),r("br"),t._v(" So the Webcomponent specification is very well switted for that as we can include components inside other components binding them some usefull properties of the parent. "),r("br"),t._v(" A first proto of this app as already been made at "),r("a",{attrs:{href:"https://scenaristeur.github.io/holon/",target:"_blank"}},[t._v("https://scenaristeur.github.io/holon/")]),t._v(". "),r("br"),t._v(" Suggestions, Issues & Contributions on "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/scenaristeur/shighl-vuejs",target:"_blank"}},[t._v("Source")])]),r("li",[r("a",{attrs:{href:"https://forum.solidproject.org/t/im-really-too-shexy-for-my-pod/2755/5",target:"_blank"}},[t._v("Forum")])])])])])}],a=(r("49f3"),r("2877")),i={},s=Object(a["a"])(i,n,o,!1,null,"4ff6d199",null);e["default"]=s.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),h=r("ae40"),p=l("slice"),d=h("slice",{ACCESSORS:!0,0:0,1:2}),v=f("species"),b=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!p||!d},{slice:function(t,e){var r,n,f,l=c(this),h=s(l.length),p=i(t,h),d=i(void 0===e?h:e,h);if(a(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,p,d);for(n=new(void 0===r?Array:r)(m(d-p,0)),f=0;p<d;p++,f++)p in l&&u(n,f,l[p]);return n.length=f,n}})},fb86:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"properties"},[t._l(t.properties,(function(e){return r("ul",{key:e.key},[r("li",[t._v(" "+t._s(e.key)+" : "+t._s(e.value)+" ")])])})),r("div",{staticClass:"brute"},[t._v(" "+t._s(t.$options.name)+" "+t._s(t.properties)+" ")])],2)},o=[];r("4fad");function a(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0)if(r.push(i.value),e&&r.length===e)break}catch(c){o=!0,a=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(o)throw a}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){return a(t)||i(t,e)||c(t,e)||u()}r("4360");var l={name:"DebugProperties",props:{object:Object},data:function(){return{}},computed:{properties:function(){for(var t=[],e=0,r=Object.entries(this.object);e<r.length;e++){var n=f(r[e],2),o=n[0],a=n[1],i={key:o,value:a};t.push(i)}return t}}},h=l,p=(r("c25d"),r("2877")),d=Object(p["a"])(h,n,o,!1,null,"127724f0",null);e["default"]=d.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.37fbb020.js.map