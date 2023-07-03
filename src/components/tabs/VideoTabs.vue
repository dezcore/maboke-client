<template>
   <v-card>
    <div>
      <v-alert
        v-if="showAlert"
        type="success"
        :title="alertMessage"
      ></v-alert>

      <v-btn
        class="ma-2"
        color="primary"
        @click="generateFiles"
      >
        Generate Files
        <v-icon
          end
          icon="mdi-file-multiple"
        ></v-icon>
      </v-btn>
    </div>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab 
        v-for="(item, index) in tabs" 
        :key="'tab' + index"
        :value="item.id"
      >
        {{item.title}}
      </v-tab>    
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item 
        v-for="(item, index) in tabs" 
          :key="index" 
          :value="item.id"
        >
        <v-container fluid>
          <slot :name="item.title"></slot>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
  export default {
    name: 'VideoTabs',
    props : {
      tabs : {
        type : Array,
        default : ()=>{
          return [
            {
              id : "1",
              title : "Landscape"
            },
            {
              id : "2",
              title : "City"
            },
            {
              id : "3",
              title : "City"
            }
          ]
        }
      },
      postRequest : {
        type : Function, 
        default : ()=>{}
      }
    },
    data () {
      return {
        tab: null,
        showAlert : false,
        alertMessage : "",
      }
    },
    methods : {
      showAlertMessage : function(message) {
        if(message) {
          this.alertMessage = message
          this.showAlert = true
          setTimeout(() => {
            this.alertMessage = ""
            this.showAlert = false
          }, 1000);
        }
      },
      generateFiles : function() {
        this.postRequest("/gfiles/generate", {}, (files) => {
          if(files)
            this.showAlertMessage("Created files successfully");
          //console.log("createFiles : ", files)
        })
      }
    }
  }
</script>

<style scoped>
</style>
