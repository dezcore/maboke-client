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
            :extractVideo="extractVideo"
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
            :season="season"
            :seasons="seasons"
            :setSeason="setSeason"
            :setMetaData="setVideo"
            :extractVideo="extractVideo"
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
                :series="series"
                :getSerie="getSerie"
                :pageable="pageable" 
                :appendVideo="appendVideo"
                :previewSeasons="previewSeasons"
              />
            </template>
            <template #NoMatch>
              <h2 class="text-h6 mb-2 text-left">
                Nomatch Series Grid
              </h2>
              <SeriesColGrid
                :series="noMatchSeries"
                :getSerie="getNomatchSerie"
                :pageable="noMatchPageable" 
                :appendVideo="()=>{}"
                :previewSeasons="()=>{}"
              />
            </template>
        </VideoTabs>
      </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
  import apiMixin from "@/mixins/apiMixin"
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
        series : [],
        seasons: [],
        serie : null,
        video : null,
        season : null,
        metaData : null,
        noMatchSeries : [],
        currentPreview : "Seasons",
        pageable : {
          pageNumber : 1,
          totalPages : 1
        },
        noMatchPageable : {
          pageNumber : 1,
          totalPages : 1
        },
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
            title : "NoMatch"
          },
          {
            id : "3",
            title : "Match"
          }
        ]
      }
    },
    mixins : [
      apiMixin
    ],
    mounted() {
      this.getSerie({page : 1, size : 12}, () => {
        this.getNomatchSerie({page : 1, size : 12}) 
      })
    },
    methods : {
      getSerie : function(params, callBack) {
        this.getData(import.meta.env.VITE_MABOKE_API_ROOT + "/serie", params, (series) => {
          const {number, totalPages} = series
          if(series) {
            this.series = series.content            
            this.pageable = {
              pageNumber : number,
              totalPages :  totalPages
            }

            if(callBack)
              callBack()
            //console.log("Serie : ", series)
          }
        })
      },
      getNomatchSerie : function(params) {
        this.getData(import.meta.env.VITE_MABOKE_API_ROOT + "/nomatch", params, (noMatchSeries) => {
          const {number, totalPages} = noMatchSeries
          if(noMatchSeries) {
            //console.log("noMatchSeries : ", noMatchSeries)
            this.noMatchSeries = noMatchSeries.content            
            this.noMatchPageable = {
              pageNumber : number,
              totalPages :  totalPages
            }
          }
        })
      },
      previewSeasons : function(serie) {
        if(serie) {
          this.serie = serie
          this.seasons = serie.seasons
          this.currentPreview = {value : "Seasons"}
        }
      },
      setVideo : function(video) {
        //console.log("video : ", video)
        if(video) {
          this.video = video
        }
      },
      setSeason : function(season) {
        if(season) {
          this.season = season
          //console.log("season : ", season)
        }
      },
      extractVideo : function(video) {
        let targetSerie, season, videos
        if(this.serie && this.season && video) {
          targetSerie = this.series.find(serie => serie.id === this.serie.id)
          if(targetSerie) {
            if((season = targetSerie.seasons.find(s => s.title === this.season.title))) {
              //videos = season.videos.filter(v => v.title !== video.title)
              if((videos = season.videos.filter(v => v.title !== video.title))) {
                season.videos = videos
                this.serie = targetSerie
                this.season = season
                this.seasons = targetSerie.seasons
                //console.log("extractVideo : ", targetSerie, season, videos)
              }
            }
            //targetSerie.videos =  targetSerie.videos.filter(v => v.title !== video.title)
            //this.serie = targetSerie
            //this.season
          }
        }
      },
      appendVideo : function(season, video) {
        if(season && video) {
          console.log("season : ", season, video)
        }
      }
    }
  }
</script>