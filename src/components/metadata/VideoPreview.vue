<template>
<v-card>
  <v-icon icon="mdi-arrow-left" @click="back"></v-icon>
  <v-icon icon="mdi-arrow-right" @click="foraward"></v-icon>
  <v-container fluid>
  <v-row>
    <v-col
      v-for="(item, index) in  items"
      class="pa-0 ma-0"
      :key="item.title + index"
      cols="12"
    >
      <v-card
        color="grey-lighten-1"
        :class="['ma-1', selectedClass]"
        @click="previewSeason(item)"
      >
        <v-img
          class="bg-white"
          width="250px"
          max-height="150"
          :aspect-ratio="1"
          :src="'https://img.youtube.com/vi/' + item.videoId.trim() + '/hqdefault.jpg'"
          cover
        ></v-img>   
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</v-card>
  
  </template>
  <script>
    export default {
      name: 'VideoPreview',
      props : {
        seasons : {
          type :  Array,
          default : ()=>{return []}
        },
        setMetaData : {
          type : Function,
          default : () => {}
        }
      },
      watch : {
        seasons : function(seasons) {
          if(seasons) {
            this.items = this.seasons
            this.currentPreview = {value : "Seasons"}
            //console.log("Watch : ", currentPreview.value);
          }
        }
      },
      data () {
        return {
          items : [],
          season : [],
          currentPreview : "Seasons"
        }
      },
      methods : {
        previewSeason : function(season) {
          if(season && this.currentPreview.value === "Seasons") {
            this.items = season.videos
            this.season = season.videos
            this.currentPreview = {value : "Season"}
          } else if(season && this.currentPreview.value === "Season") { 
            console.log("setMetaData")
            this.setMetaData(season)
          }
        },
        back : function() {
          if(this.seasons && this.currentPreview.value === "Season") {
            this.items = this.seasons
            this.currentPreview = {value : "Seasons"}
          }
        },
        foraward : function() {
          if(this.seasons && this.currentPreview.value === "Seasons") {
            this.items = this.season
            this.currentPreview = {value : "Season"}
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
  