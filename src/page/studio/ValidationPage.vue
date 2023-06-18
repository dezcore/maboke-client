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
            :video="video"
          />
        </template>
        <template #Validation>
          <VideoMetadata 
            :season="season"
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
            :setSeason="setSeason"
            :setMetaData="setVideo"
          />
        </v-col>
        <v-col cols="10">
          <VideoTabs 
            :tabs="serieTabs"
          >
            <template #Serie>
              <h2 class="text-h6 mb-2 text-left">
                Séries Grid
              </h2>
              <SeriesColGrid 
                :previewSeasons="previewSeasons"
              />
            </template>
        </VideoTabs>
      </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
  import VideoTabs from "@/components/tabs/VideoTabs.vue"
  import SeriesColGrid from "@/components/grids/SeriesColGrid.vue"
  import VideoMetadata from "@/components/metadata/VideoMetada.vue"
  import VideoPreview from "@/components/metadata/VideoPreview.vue"
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
        video : null,
        season : null,
        metaData : null,
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
          ],
          serieTabs : [
            {
              id : "1",
              title : "Serie"
            },
            {
              id : "2",
              title : "Match"
            },
            {
              id : "3",
              title : "NoMatch"
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
      setVideo : function(video) {
        console.log("video : ", video)
        if(video) {
          this.video = video
        }
      },
      setSeason : function(season) {
        if(season) {
          this.season = season
          //console.log("season : ", season)
        }
      }
    }
  }
</script>