<template>
  <div class="submit">
    <div class="mt-3">


      <b-button-group>
        <!--  <b-button variant="success" @click="save" disabled>Save on currentShape (footprint)</b-button>

        <b-button variant="info" disabled>Choose Where to save</b-button>-->

        <b-button variant="warning" @click="download">Download</b-button>
        <b-button variant="info" @click="save">Stream that Activity</b-button>
        <b-button variant="success" @click="savePod">Save on my POD (public/shighltest) Add me to your trusted apps</b-button>
      </b-button-group>
    </div>
    CurrentShape : {{ currentShape}}<br>
    WebId : {{ webId }}<br>
    Storage: {{ storage }}<br>

  </div>
</template>

<script>
import auth from 'solid-auth-client';
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
  created(){
    this.fc   = new SolidFileClient(auth)
    console.log(this.fc)
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
      //console.log("DATA TO CREATE", data)
      let as = this.streamActtivity(this.webId, data)
      console.log(as)
      this.saveFile(as)
    },
    async savePod(){
      let data = this.$store.state.local.formData[this.currentShape]
      console.log(this.fc)
      console.log(this.storage)
      let path = this.storage+"public/shighltest/test.text"
      await this.fc.createFile(path, JSON.stringify(data), "text/plain")
      .then(
        result =>{
          console.log(result)
          console.log (result.url)
          alert("Saved at "+result.url)
        },err => {
          console.log(err)
          alert(err+ "Are you sure you are logged to your pod and you havae allowed thisapp to write on your pod ?")
        }
      )

    },
    download(){
      let data = this.$store.state.local.formData[this.currentShape]
      data['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] = this.currentShape
      console.log("DATA TO CREATE", data)
      this.saveFile(data)
    },
    saveFile (data){
      //EXPORT https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/

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
