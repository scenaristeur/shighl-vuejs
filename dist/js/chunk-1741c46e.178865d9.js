(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1741c46e"],{2719:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shape-node-constraint"},[t.valueExpr.values?a("div",{staticClass:"not-found"},[a("FormSelect",{attrs:{values:t.valueExpr.values,predicate:t.predicate,datatype:t.valueExpr.datatype}})],1):t.valueExpr.nodeKind?a("div",{staticClass:"found"},["literal"==t.valueExpr.nodeKind?a("div",{staticClass:"not-found"},[a("FormTextarea",{attrs:{nodeKind:t.valueExpr.nodeKind,predicate:t.predicate}})],1):"iri"==t.valueExpr.nodeKind?a("div",{staticClass:"not-found"},[t._v(" URI TODO: "),a("FormInput",{attrs:{valueExpr:t.valueExpr,predicate:t.predicate,datatype:t.valueExpr.datatype}})],1):t._e()]):a("div",{staticClass:"not-found"},[a("FormInput",{attrs:{valueExpr:t.valueExpr,predicate:t.predicate,datatype:t.valueExpr.datatype}})],1),a("div",{staticClass:"brute-hide"},[a("h5",[t._v(t._s(t.$options.name))]),t._v(" TODO : values, nodeKind, datatype "+t._s(t.valueExpr)),a("br"),a("DebugProperties",{attrs:{object:t.valueExpr}})],1)])},s=[],n=a("4360"),i=a("fb86"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-input"},["webid"==t.type?a("div",[a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"webid"}},[a("b-form-input",{attrs:{value:t.value},on:{change:t.updateValue}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-success"}},[t._v("Me")]),a("b-button",{attrs:{variant:"info"}},[t._v("Friends")])],1)],1)],1):a("div",[a("b-form-input",{attrs:{id:"type-"+t.type,type:t.type,placeholder:t.placeholder,value:t.value},on:{input:t.updateValue}})],1),a("div",{staticClass:"brute-hide"},[a("h5",[t._v(t._s(t.$options.name))]),t._v(" valueExpr : "+t._s(t.valueExpr)),a("br"),t._v(" datatype : "+t._s(t.datatype)),a("br"),t._v(" currentData: "+t._s(t.currentData)+" ")])])},l=[],u=(a("fb6a"),a("bf19"),a("ab09")),c={name:"FormInput",mixins:[u["a"]],props:{valueExpr:Object,predicate:String,datatype:String},methods:{updateValue:function(t){console.log(t,this.currentShape,this.predicate);var e={shape:this.currentShape,predicate:this.predicate,value:t,datatype:this.datatype};n["a"].commit("local/fillForm",e)}},data:function(){return{placeholder:"",value:"",types:["text","number","email","password","search","url","tel","date","time","range","color"]}},computed:{type:function(){var t="text";switch(this.valueExpr.datatype){case"http://www.w3.org/2001/XMLSchema#date":t="date";var e=new Date;e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),this.value=e.toJSON().slice(0,10);var a={shape:this.currentShape,predicate:this.predicate,value:this.value,datatype:this.datatype};n["a"].commit("local/fillForm",a);break;case"http://www.w3.org/2001/XMLSchema#string":t="text";break;case"http://www.w3.org/2001/XMLSchema#integer":t="number";break;case"http://www.w3.org/ns/solid/terms#webid":t="webid";break;default:console.log("TODO DATATYPE: ",this.valueExpr.datatype,this.types),t="text"}return t},currentShape:function(){return this.$store.state.local.currentShape},currentData:function(){return this.$store.state.local.formData}}},p=c,d=a("2877"),v=Object(d["a"])(p,o,l,!1,null,null,null),h=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-textarea"},[a("b-textarea",{attrs:{value:""},on:{change:t.updateValue}}),a("div",{staticClass:"brute-hide"},[a("h5",[t._v(t._s(t.$options.name))]),t._v(" nodeKind : "+t._s(t.nodeKind)),a("br"),t._v(" datatype: "+t._s(t.datatype)+" ")])],1)},b=[],f={name:"FormTextArea",mixins:[u["a"]],components:{},props:{nodeKind:String,predicate:String,datatype:String},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.local.currentShape}},methods:{updateValue:function(t){console.log(t,this.currentShape,this.predicate);var e={shape:this.currentShape,predicate:this.predicate,value:t,datatype:this.datatype};n["a"].commit("local/fillForm",e)}}},x=f,_=Object(d["a"])(x,m,b,!1,null,null,null),g=_.exports,y=a("4eb0"),S={name:"ShapeNodeConstraint",components:{DebugProperties:i["default"],FormInput:h,FormSelect:y["a"],FormTextarea:g},props:{valueExpr:Object,predicate:String},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.local.currentShape}}},w=S,E=Object(d["a"])(w,r,s,!1,null,null,null);e["default"]=E.exports},"4eb0":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-select"},[a("div",[t._v(' [ not implemented yet see "Contribute menu" ;-)] '),a("b-form-select",{attrs:{disabled:"",options:t.options},on:{change:t.updateValue},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("b-button",{attrs:{variant:"secondary",disabled:""}},[t._v("New")])],1),a("div",{staticClass:"brute-hide"},[a("h5",[t._v(t._s(t.$options.name))]),a("div",{staticClass:"mt-3"},[t._v("Selected: "),a("strong",[t._v(t._s(t.selected))])]),t._v(" source : "+t._s(t.source)),a("br"),t._v(" options : "+t._s(t.options)),a("br"),t._v(" values : "+t._s(t.values)),a("br"),t._v(" datatype : "+t._s(t.datatype)+" ")])])},s=[],n=(a("cb29"),a("4360"),a("ab09")),i=a("fb86"),o={name:"FormSelect",mixins:[n["a"]],components:{DebugProperties:i["default"]},props:{source:String,values:Array,predicate:String,datatype:String},data:function(){return{selected:null,options:[{value:null,text:"Please select an option"},{value:"a",text:"This is First option"},{value:"b",text:"Selected Option"},{value:{C:"3PO"},text:"This is an option with object value"},{value:"d",text:"This one is disabled",disabled:!0}]}},watch:{values:function(t){console.log("VALUES CJ",t),this.options=[{value:"d",text:"This one is disabled"}]}},computed:{currentShape:function(){return this.$store.state.local.currentShape}},methods:{updateValue:function(t){console.log(t,this.currentShape,this.predicate),this.fill(this.currentShape,this.predicate,t,"selectForm")}}},l=o,u=a("2877"),c=Object(u["a"])(l,r,s,!1,null,null,null);e["a"]=c.exports},"81d5":function(t,e,a){"use strict";var r=a("7b0b"),s=a("23cb"),n=a("50c4");t.exports=function(t){var e=r(this),a=n(e.length),i=arguments.length,o=s(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,u=void 0===l?a:s(l,a);while(u>o)e[o++]=t;return e}},ab09:function(t,e,a){"use strict";e["a"]={created:function(){this.hello()},methods:{hello:function(){console.log("hello from Filling Form!")},fill:function(t,e,a,r){console.log("FILL",t,e,a,r),void 0==data[t]&&(this.data[t]={}),data[t][e]=a,console.log("data",data),store.commit("local/setData",data)}}}},cb29:function(t,e,a){var r=a("23e7"),s=a("81d5"),n=a("44d2");r({target:"Array",proto:!0},{fill:s}),n("fill")}}]);
//# sourceMappingURL=chunk-1741c46e.178865d9.js.map