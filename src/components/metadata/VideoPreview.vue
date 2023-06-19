<template>
<v-card>
  <v-icon icon="mdi-arrow-left" @click="back"></v-icon>
  <v-icon icon="mdi-arrow-right" @click="foraward"></v-icon>
  <v-breadcrumbs :items="serieTree">
  </v-breadcrumbs>
  <v-container fluid>
  <v-row>
    <v-card height="900" class="overflow-auto">
    <v-col
      v-for="(item, index) in  items"
      class="pa-0 ma-0"
      :key="'title' + index"
      cols="12"
    >
      <v-card
        color="grey-lighten-1"
        class="ma-1"
      >
        <v-img
          class="bg-white"
          width="250px"
          max-height="150"
          :aspect-ratio="1"
          :src="'https://img.youtube.com/vi/' + item.img + '/hqdefault.jpg'"
          cover
          @click="previewSeason(item)"
        ></v-img>
        <v-card-actions v-if="item.length">
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <div class="justify-self-end">
                <v-icon class="me-1" icon="mdi-clock-outline"></v-icon>
                <span class="subheading me-2">{{item.length}}</span>
                <v-icon class="me-1" icon="mdi-eye-outline"></v-icon>
                <span class="subheading">45</span>
              </div>
            </template>

            <template v-slot:append>
              <div class="justify-self-end">
                <v-icon icon="mdi-transfer-right" @click="extractVideo(item)"></v-icon>
              </div>
            </template>
          </v-list-item>
        </v-card-actions>   
      </v-card>
    </v-col>
    </v-card>
  </v-row>
  </v-container>
</v-card>
  
  </template>
  <script>
    export default {
      name: 'VideoPreview',
      props : {
        season : {
          type : Object,
        },
        seasons : {
          type :  Array,
          default : ()=>{return []}
        },
        setSeason : {
          type : Function,
          default : () => {}
        },
        setMetaData : {
          type : Function,
          default : () => {}
        },
        extractVideo : {
          type : Function
        }
      },
      watch : {
        season : {
          handler: function(season) {
            if(season) {
              this.items = season.videos
              console.log("Watch season : ",  season)
            }
          },
          deep: true
        },
        seasons : function(seasons) {
          if(seasons) {
            this.items = this.seasons
            this.currentPreview = {value : "Seasons"}
            this.enableSerieTreeNode(["Seasons"])
            //console.log("Watch : ", currentPreview.value);
          }
        }
      },
      data () {
        return {
          items : [],
          currentPreview : {value : "Seasons"},
          serieTree :  [
            {
              title: 'Seasons',
              disabled: true
            },
            {
              title: 'Season',
              disabled: true
            }
      ]
        }
      },
      methods : {
        enableSerieTreeNode : function(nodesTitle) {
          if(nodesTitle) {
            this.serieTree = this.serieTree.map((n) =>{
              n.disabled = !nodesTitle.some(title => n.title === title)
              return n 
            })
          }
        },
        previewSeason : function(season) {
          if(season && this.currentPreview.value === "Seasons") {
            this.items = season.videos
            this.setSeason(season)
            this.currentPreview = {value : "Season"}
            this.enableSerieTreeNode(["Seasons", "Season"])
          } else if(season && this.currentPreview.value === "Season") { 
            //console.log("setMetaData")
            this.setMetaData(season)
            this.enableSerieTreeNode(["Seasons"])
          }
        },
        back : function() {
          if(this.seasons && this.currentPreview.value === "Season") {
            this.items = this.seasons
            this.currentPreview = {value : "Seasons"}
            this.enableSerieTreeNode(["Seasons"])
          }
        },
        foraward : function() {
          if(this.seasons && this.currentPreview.value === "Seasons") {
            this.items = this.season
            this.currentPreview = {value : "Season"}
            this.enableSerieTreeNode(["Seasons", "Season"])
          }
        }
      }
    }
  </script>
  
  <style>
  .headerClass{
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
  }
  
  </style>
  