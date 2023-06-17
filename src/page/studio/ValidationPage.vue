<template>
  <div>
    <v-card-text>
      <h2 class="text-h6 mb-2 text-left">
        Video Validation Page
      </h2>
    </v-card-text>
    <v-card-text>
      <VideoTabs 
        :tabs="tabs"
      >
        <template #Preview>
          <ValidationPlayer 
            :videoId="videoId"
          />
        </template>
        <template #Validation>
          <h2 class="text-h6 mb-2 text-left">
            Video Metadata
          </h2>
          <VideoMetadata 
            :metaData="metaData"
          />
        </template>
      </VideoTabs>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="2">
          <h2 class="text-h6 mb-2 text-left">
            Video Preview   
          </h2>
          <VideoPreview
            :seasons="seasons"
            :setMetaData="setMetaData"
          />
        </v-col>
        <v-col cols="10">
          <h2 class="text-h6 mb-2 text-left">
            Séries Grid
          </h2>
          <SeriesColGrid 
            :previewSeasons="previewSeasons"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
  import VideoTabs from "@/components/tabs/VideoTabs.vue"
  import SeriesColGrid from "../../components/grids/SeriesColGrid.vue"
  import VideoMetadata from "../../components/metadata/VideoMetada.vue"
  import VideoPreview from "../../components/metadata/VideoPreview.vue"
  import ValidationPlayer from "@/components/player/ValidationPlayer.vue"

  export default {
    name: 'ValidationPage',
    components : {
      VideoTabs,
      SeriesColGrid,
      VideoMetadata,
      VideoPreview,
      ValidationPlayer
    },
    data () {
      return {
        seasons: [],
        metaData : null,
        videoId :  "11-lpoJHu0U",
        currentPreview : "Seasons",
        tabs : [
            {
              id : "1",
              title : "Preview"
            },
            {
              id : "2",
              title : "Validation"
            }
          ]
      }
    },
    methods : {
      previewSeasons : function(seasons) {
        if(seasons) {
          this.seasons = seasons
          this.currentPreview = {value : "Seasons"}
        }
      },
      setMetaData : function(metaData) {
        if(metaData) {
          this.metaData = metaData
          this.videoId = metaData.img
        }
      }
    }
  }
</script>