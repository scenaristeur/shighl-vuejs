(function(t){function e(e){for(var o,r,i=e[0],s=e[1],c=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a={app:0},u=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ea8758dc","chunk-1741c46e":"577b7d07","chunk-3c66732d":"0b4efd5f","chunk-9397529a":"0fffa3ae","chunk-f155d606":"8538e932"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"81621856","chunk-1741c46e":"31d6cfe0","chunk-3c66732d":"31d6cfe0","chunk-9397529a":"31d6cfe0","chunk-f155d606":"31d6cfe0"}[t]+".css",a=s.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[t],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var u=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/shighl-vuejs/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1682:function(t,e,n){"use strict";var o=n("7008"),r=n.n(o);r.a},4360:function(t,e,n){"use strict";var o=n("2b0e"),r=n("2f62"),a=(n("7db0"),n("d81d"),n("13d5"),n("2909")),u=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5}],i={getProducts:function(t){setTimeout((function(){return t(u)}),100)},buyProducts:function(t,e,n){setTimeout((function(){Math.random()>.5||navigator.webdriver?e():n()}),100)}},s=function(){return{items:[],checkoutStatus:null}},c={cartProducts:function(t,e,n){return t.items.map((function(t){var e=t.id,o=t.quantity,r=n.products.all.find((function(t){return t.id===e}));return{title:r.title,price:r.price,quantity:o}}))},cartTotalPrice:function(t,e){return e.cartProducts.reduce((function(t,e){return t+e.price*e.quantity}),0)}},l={checkout:function(t,e){var n=t.commit,o=t.state,r=Object(a["a"])(o.items);n("setCheckoutStatus",null),n("setCartItems",{items:[]}),i.buyProducts(e,(function(){return n("setCheckoutStatus","successful")}),(function(){n("setCheckoutStatus","failed"),n("setCartItems",{items:r})}))},addProductToCart:function(t,e){var n=t.state,o=t.commit;if(o("setCheckoutStatus",null),e.inventory>0){var r=n.items.find((function(t){return t.id===e.id}));r?o("incrementItemQuantity",r):o("pushProductToCart",{id:e.id}),o("products/decrementProductInventory",{id:e.id},{root:!0})}}},f={pushProductToCart:function(t,e){var n=e.id;t.items.push({id:n,quantity:1})},incrementItemQuantity:function(t,e){var n=e.id,o=t.items.find((function(t){return t.id===n}));o.quantity++},setCartItems:function(t,e){var n=e.items;t.items=n},setCheckoutStatus:function(t,e){t.checkoutStatus=e}},d={namespaced:!0,state:s,getters:c,actions:l,mutations:f},p=function(){return{all:[]}},h={},m={getAllProducts:function(t){var e=t.commit;i.getProducts((function(t){e("setProducts",t)}))}},v={setProducts:function(t,e){t.all=e},decrementProductInventory:function(t,e){var n=e.id,o=t.all.find((function(t){return t.id===n}));o.inventory--}},b={namespaced:!0,state:p,getters:h,actions:m,mutations:v},g=function(){return{count:0,webId:null,storage:"",shape_url:"",schema:null,currentShape:"",shapes:[],footprint_shapes:[],translate_shapes:[],formData:{},all:[]}},y={},_={getAllProducts:function(t){var e=t.commit;i.getProducts((function(t){e("setProducts",t)}))}},S={fillForm:function(t,e){void 0==t.formData[e.shape]&&(t.formData[e.shape]={}),e.value.length>0?t.formData[e.shape][e.predicate]=e.value:delete t.formData[e.shape][e.predicate],console.log("data",t.formData)},increment:function(t){t.count++},setWebId:function(t,e){t.webId=e},setStorage:function(t,e){t.storage=e},setShapeUrl:function(t,e){t.shape_url=e},setSchema:function(t,e){t.schema=e},setShapes:function(t,e){t.shapes=e},setFShapes:function(t,e){t.footprint_shapes=e},setTShapes:function(t,e){t.translate_shapes=e},setCurrentShape:function(t,e){t.currentShape=e},setProducts:function(t,e){t.all=e},decrementProductInventory:function(t,e){var n=e.id,o=t.all.find((function(t){return t.id===n}));o.inventory--}},k={namespaced:!0,state:g,getters:y,actions:_,mutations:S},w=function(){return{all:[]}},P={},C={getAllProducts:function(t){var e=t.commit;i.getProducts((function(t){e("setProducts",t)}))}},j={setProducts:function(t,e){t.all=e},decrementProductInventory:function(t,e){var n=e.id,o=t.all.find((function(t){return t.id===n}));o.inventory--}},E={namespaced:!0,state:w,getters:P,actions:C,mutations:j};o["default"].use(r["a"]);e["a"]=new r["a"].Store({modules:{cart:d,products:b,local:k,pod:E}})},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/components"}},[t._v("Shighl-Vuejs Components")]),t._v(" | "),n("router-link",{attrs:{to:"/howto"}},[t._v("How To")]),t._v(" | "),n("a",{attrs:{href:"https://github.com/scenaristeur/shighl-vuejs/projects/1?fullscreen=true",target:"_blank"}},[t._v("Contribute")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/brouillon"}},[t._v("Brouillon")]),t._v(" | "),n("router-link",{attrs:{to:"/?lang=fr"}},[t._v(" [en]")])],1),n("div",{staticClass:"container"},[n("router-view")],1)])},a=[],u=(n("034f"),n("2877")),i={},s=Object(u["a"])(i,r,a,!1,null,null,null),c=s.exports,l=n("9483");Object(l["a"])("".concat("/shighl-vuejs/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var f=n("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Shighl-vuejs"}})],1)},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello container"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),t._m(1),n("ul",[n("li",[t._v(" see "),n("router-link",{attrs:{to:"/components"}},[t._v("Components")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),t._m(2)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" The aim of this project is to take a tour of the tools to help you to build decentralized apps, by sharing my experiments."),n("br"),t._v(" Specifically with Solid & WebComponents, but you can propose your tools at "),n("a",{attrs:{href:"https://github.com/scenaristeur/shighl-vuejs",target:"_blank",rel:"noopener"}},[t._v("Shighl-vuejs repo")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("First attempt : Build Form Components based on Vuejs from ShEx shapes."),n("br"),t._v(" WHY ? "),n("br"),t._v(" Forms based on shapes allow you to describe your form in a text file using ShEx notation. You can share distribute, reuse, modify this file the way you want. So apps, websites, webapps, native apps can have the same Form flow, to build same data structure, providing a magical step to interoperability. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("Disclaimer")]),n("br"),t._v(" No "),n("b",[t._v("ShEx Shape")]),t._v(" has been hurted during the implementation of that App. "),n("br"),t._v(" If you don't trust us about this point, you can find them in the "),n("a",{attrs:{href:"https://holacratie.solid.community/public/Schema/"}},[t._v("Schema")]),t._v(" folder."),n("br"),t._v(" Don't hesitate to copy them on your POD or somewhere else and to modify them to use that App according to your needs ;-). ")])}],v={name:"HelloWorld",props:{msg:String}},b=v,g=(n("1682"),Object(u["a"])(b,h,m,!1,null,"247321de",null)),y=g.exports,_={name:"Home",components:{HelloWorld:y}},S=_,k=Object(u["a"])(S,d,p,!1,null,null,null),w=k.exports;o["default"].use(f["a"]);var P=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/brouillon",name:"Brouillon",component:function(){return n.e("about").then(n.bind(null,"19b0"))}},{path:"/howto",name:"HowTo",component:function(){return n.e("about").then(n.bind(null,"5515"))}},{path:"/components",name:"Components",component:function(){return n.e("about").then(n.bind(null,"2311"))}}],C=new f["a"]({name:"router",mode:"history",base:"/shighl-vuejs/",routes:P}),j=C,E=n("4360"),T=n("5f5b"),O=n("b1e0"),x=(n("f9e3"),n("2dd8"),n("fb6a"),n("b680"),n("ac1f"),n("5319"),/(\d{3})(?=\d)/g);function A(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",n=null!=n?n:2;var o=Math.abs(t).toFixed(n),r=n?o.slice(0,-1-n):o,a=r.length%3,u=a>0?r.slice(0,a)+(r.length>3?",":""):"",i=n?o.slice(-1-n):"",s=t<0?"-":"";return s+e+u+r.slice(a).replace(x,"$1,")+i}o["default"].use(T["a"]),o["default"].use(O["a"]),o["default"].filter("currency",A),o["default"].config.productionTip=!1,new o["default"]({router:j,store:E["a"],render:function(t){return t(c)}}).$mount("#app")},7008:function(t,e,n){},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0cebf937.js.map