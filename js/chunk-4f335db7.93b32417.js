(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f335db7"],{2719:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shape-node-constraint"},[e.valueExpr.values?a("div",{staticClass:"not-found"},[a("FormSelect",{attrs:{values:e.valueExpr.values,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1):e.valueExpr.nodeKind?a("div",{staticClass:"found"},["literal"==e.valueExpr.nodeKind?a("div",{staticClass:"not-found"},[a("FormTextarea",{attrs:{nodeKind:e.valueExpr.nodeKind,predicate:e.predicate}})],1):"iri"==e.valueExpr.nodeKind?a("div",{staticClass:"not-found"},[e._v(" URI TODO: "),a("FormInput",{attrs:{valueExpr:e.valueExpr,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1):e._e()]):a("div",{staticClass:"not-found"},[a("FormInput",{attrs:{valueExpr:e.valueExpr,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1),a("div",{staticClass:"brute-hide"},[a("h5",[e._v(e._s(e.$options.name))]),e._v(" TODO : values, nodeKind, datatype "+e._s(e.valueExpr)),a("br"),a("DebugProperties",{attrs:{object:e.valueExpr}})],1)])},s=[],o=a("fb86"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-input"},["webid"==e.type?a("div",[a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"webid"}},[a("b-form-input",{attrs:{value:e.value},on:{change:e.updateValue}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-success"}},[e._v("Me")]),a("b-button",{attrs:{variant:"info"}},[e._v("Friends")])],1)],1)],1):a("div",[a("b-input-group",{attrs:{size:"lg"}},[a("b-form-input",{attrs:{size:"lg",id:"type-"+e.type,type:e.type,placeholder:e.placeholder,value:e.value},on:{input:e.updateValue}}),a("br")],1),a("small",[e._v(e._s(this.valueExpr.datatype))])],1),a("div",{staticClass:"brute-hide"},[a("h5",[e._v(e._s(e.$options.name))]),e._v(" valueExpr : "+e._s(e.valueExpr)),a("br"),e._v(" datatype : "+e._s(e.datatype)),a("br"),e._v(" currentData: "+e._s(e.currentData)+" ")])])},i=[],l=(a("fb6a"),a("bf19"),{name:"FormInput",props:{valueExpr:Object,predicate:String,datatype:String},methods:{updateValue:function(e){console.log(e,this.currentShape,this.predicate);var t={shape:this.currentShape,predicate:this.predicate,value:e,datatype:this.datatype};this.$store.commit("local/fillForm",t)}},data:function(){return{placeholder:"",value:"",types:["text","number","email","password","search","url","tel","date","time","range","color"]}},computed:{type:function(){var e="text";switch(this.valueExpr.datatype){case"http://www.w3.org/2001/XMLSchema#date":case"http://www.w3.org/2001/XMLSchema#dateTime":e="date";var t=new Date;t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),this.value=t.toJSON().slice(0,10);var a={shape:this.currentShape,predicate:this.predicate,value:this.value,datatype:this.datatype};this.$store.commit("local/fillForm",a);break;case"http://www.w3.org/2001/XMLSchema#string":e="text";break;case"http://www.w3.org/2001/XMLSchema#integer":e="number";break;case"http://www.w3.org/ns/solid/terms#webid":e="webid";break;case"http://www.w3.org/2001/XMLSchema#dateTime":e="datetime-local";break;default:console.log("TODO DATATYPE: ",this.valueExpr.datatype,this.types),e="text"}return e},currentShape:function(){return this.$store.state.local.currentShape},currentData:function(){return this.$store.state.local.formData}}}),c=l,u=a("2877"),p=Object(u["a"])(c,n,i,!1,null,null,null),d=p.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-textarea"},[a("b-textarea",{attrs:{value:""},on:{change:e.updateValue}}),a("div",{staticClass:"brute-hide"},[a("h5",[e._v(e._s(e.$options.name))]),e._v(" nodeKind : "+e._s(e.nodeKind)),a("br"),e._v(" datatype: "+e._s(e.datatype)+" ")])],1)},h=[],m={name:"FormTextArea",components:{},props:{nodeKind:String,predicate:String,datatype:String},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.local.currentShape}},methods:{updateValue:function(e){console.log(e,this.currentShape,this.predicate);var t={shape:this.currentShape,predicate:this.predicate,value:e,datatype:this.datatype};this.$store.commit("local/fillForm",t)}}},f=m,b=Object(u["a"])(f,v,h,!1,null,null,null),g=b.exports,_=a("4eb0"),w={name:"ShapeNodeConstraint",components:{DebugProperties:o["default"],FormInput:d,FormSelect:_["a"],FormTextarea:g},props:{valueExpr:Object,predicate:String},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.local.currentShape}}},x=w,S=Object(u["a"])(x,r,s,!1,null,null,null);t["default"]=S.exports},"4eb0":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-select"},[a("div",[a("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e.source?a("b-button",{attrs:{variant:"secondary"},on:{click:e.switchShape}},[e._v("New "+e._s(this.localname(e.source)))]):e._e()],1),a("div",{staticClass:"brute d-none"},[a("h5",[e._v(e._s(e.$options.name))]),a("div",{staticClass:"mt-3"},[e._v("Selected: "),a("strong",[e._v(e._s(e.selected))])]),e._v(" folder: "+e._s(e.folder)+" source : "+e._s(e.source)),a("br"),e._v(" options : "+e._s(e.options)),a("br"),e._v(" values : "+e._s(e.values)),a("br"),e._v(" datatype : "+e._s(e.datatype)+" ")])])},s=[],o=(a("4160"),a("b0c0"),a("d3b7"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),n=a("fb86"),i=a("ac14"),l=a("8218"),c={name:"FormSelect",mixins:[i["a"],l["a"]],components:{DebugProperties:n["default"]},props:{source:String,values:Array,predicate:String,datatype:String},data:function(){return{selected:null,options:[],folder:{}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return void 0!=e.values&&(console.log("VALUES CJ",e.values),e.values.forEach((function(t,a){t=null!=t.value?t.value:t;var r={value:t,text:e.localname(t)};console.log("o",r),e.options.push(r),console.log("opts1",e.options)})),console.log("opts2",e.options)),console.log("SOURCE : ",e.source),t.next=4,e.fc.itemExists(e.source);case 4:if(!t.sent){t.next=7;break}return t.next=7,e.fc.readFolder(e.source).then((function(t){console.log("Folder",t.folders),e.folder=t}),(function(t){console.log("erreur for url : ",e.source,t)}));case 7:case"end":return t.stop()}}),t)})))()},methods:{switchShape:function(){this.$store.commit("local/setCurrentShape",this.source),console.log("SWITCHTO",this.source)}},watch:{selected:function(e){console.log(e,this.currentShape,this.predicate);var t={shape:this.currentShape,predicate:this.predicate,value:e,datatype:this.datatype};this.$store.commit("local/fillForm",t)},folder:function(e){var t=this;console.log("FOLDERS, FILES",e.folders),console.log(),e.folders.forEach((function(e,a){console.log(e.name,e.url);var r={value:e.url,text:e.name};console.log("o",r),t.options.push(r),console.log("opts1",t.options)}))}},computed:{currentShape:function(){return this.$store.state.local.currentShape}}},u=c,p=a("2877"),d=Object(p["a"])(u,r,s,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-4f335db7.93b32417.js.map