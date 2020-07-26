<template>
  <div class="submit">
    <div class="mt-3">
      CurrentShape : {{ currentShape}}<br>
      WebId : {{ webId }}<br>
      Storage: {{ storage }}<br>

      <b-button-group>
        <!--  <b-button variant="success" @click="save" disabled>Save on currentShape (footprint)</b-button>
        <b-button variant="success" @click="save" disabled>Save on my POD</b-button>
        <b-button variant="info" disabled>Choose Where to save</b-button>-->
        <b-button variant="warning" @click="download">Download</b-button>
      </b-button-group>
    </div>

  </div>
</template>

<script>
import store from '@/store'
import UtilMixin from './mixins/UtilMixin.js'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormSubmit',
  mixins: [UtilMixin],
  components: {
    //  componentName
  },
  props: {
    attribut: String
  },

  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    webId(){
      return this.$store.state.local.webId
    },
    currentShape () {
      return this.$store.state.local.currentShape
    },
    storage () {
      return this.$store.state.local.storage
    },
  },
  methods: {
    save() {
      console.log("CurrentShape",this.currentShape)
      console.log("data", this.$store.state.local.formData)
      console.log(this.$store.state.local.formData[this.currentShape])
      let data = this.$store.state.local.formData[this.currentShape]
      console.log("DATA TO CREATE", data)
    },
    download (){
      //EXPORT https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
      let data = this.$store.state.local.formData[this.currentShape]
      data['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] = this.currentShape
      console.log("DATA TO CREATE", data)
      let fileName= this.localname(this.currentShape)
      let extension = "json"

      var textToWrite=JSON.stringify(data, undefined, 2);
      //  var fileNameToSaveAs="";
      var textFileAsBlob="";

      console.log(data);
      /*
      if((typeof data != "undefined")&& (data.length>0)){
      textToWrite=data;
    }else{
    textToWrite = document.getElementById("inputTextToSave").value;
  }

  if ((typeof nomFichier != "undefined") && (nomFichier.length>0)){
  fileNameToSaveAs = nomFichier+"."+extension;
}else{
fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value+"."+extension;
}*/


if ((typeof extension != "undefined") && (extension.length>0)){
  switch(extension){
    case "ttl" :
    textFileAsBlob = new Blob([textToWrite], {
      type:
      'text/turtle'
    }
  );
  break;
  case "rdf" :
  textFileAsBlob = new Blob([textToWrite], {
    type:
    'application/rdf+xml'
  }
);
break;
case "json" :
textFileAsBlob = new Blob([textToWrite], {
  type:
  'application/json'
}
);
break;
default :
console.log("non traite  , extension : "+extension);
break;
}
}


//  console.log(nomFichier+" : "+extension);



var downloadLink = document.createElement("a");
downloadLink.download = fileName;
downloadLink.innerHTML = "Download File";
if (window.URL != null)
{
  // Chrome allows the link to be clicked
  // without actually adding it to the DOM.
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
} else
{
  // Firefox requires the link to be added to the DOM
  // before it can be clicked.
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
}

downloadLink.click();
}
}
}
</script>
