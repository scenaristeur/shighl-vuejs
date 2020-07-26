<template>
  <div class="input">
PREDICATE INPUT {{ predicate }}

    <div  v-if="type == 'webid'">

      <b-input-group prepend="webid" class="mt-3">
        <b-form-input :value="value" @input="updateValue"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success">Me</b-button>
          <b-button variant="info">Friends</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div v-else>
      <b-form-input  @input="updateValue"
      :id="`type-${type}`" :type="type" :placeholder="placeholder" :value="value"></b-form-input>
    </div>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      valueExpr : {{ valueExpr }}
    </div>

  </div>
</template>

<script>
import store from '@/store'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormInput',

  props: {
    valueExpr: Object,
    predicate: String
  },
  methods: {
    updateValue (e) {
      console.log(e, this.currentShape, this.predicate)
      //this.$store.commit('updateValue', e.target.value)
    }
  },
  data: function () {
    return {
      placeholder : "",
      value: "",
      types: [
        'text',
        'number',
        'email',
        'password',
        'search',
        'url',
        'tel',
        'date',
        'time',
        'range',
        'color'
      ]
    }
  },
  computed: {
    type () {
      let t = "text"
      switch (this.valueExpr.datatype) {
        case "http://www.w3.org/2001/XMLSchema#date":
        t ="date"
        var local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        this.value =local.toJSON().slice(0,10);
        break;
        case "http://www.w3.org/2001/XMLSchema#string":
        t = "text"
        //  this.placeholder = "boo"
        break;
        case "http://www.w3.org/2001/XMLSchema#integer":
        t = "number"
        break;
        case "http://www.w3.org/ns/solid/terms#webid":
        t = "webid"
        break;
        default:
        console.log("TODO DATATYPE: ",this.valueExpr.datatype, this.types)
        t = "text"
      }
      return t
    },
    currentShape () {
      return this.$store.state.local.currentShape
    },
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);

}

</style>
