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
        <template #Video>
          <ValidationPlayer 
            :video="video"
          />
        </template>
        <template #Season>
          <VideoMetadata 
            :season="season"
            :extractVideo="extractVideo"
          />
        </template>
        <template #Seasons>
          <SeasonsMetadata 
            :seasons="seasons"
          />
        </template>
        <template #Serie>
          <SerieMetadata
            :serie="serie" 
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
                :serie="serie"
                :season="season"
                :series="series"
                :seasons="seasons"
                :getSerie="getSerie"
                :appendSerie="appendSerie"
                :appendSeason="appendSeason"
                :appendVideos="appendVideos"
                :previewSeasons="previewSeasons"
              />
            </template>
            <template #NoMatch>
              <h2 class="text-h6 mb-2 text-left">
                Nomatch Series Grid
              </h2>
              <SeriesColGrid
                state="no match"
                :serie="serie"
                :season="season"
                :seasons="seasons"
                :series="noMatchSeries"
                :getSerie="getSerie"
                :appendSerie="appendSerie"
                :appendSeason="appendSeason"
                :appendVideos="appendVideos"
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
  import apiMixin from "@/mixins/apiMixin"
  import VideoTabs from "@/components/tabs/VideoTabs.vue"
  import SeriesColGrid from "@/components/grids/SeriesColGrid.vue"
  import VideoPreview from "@/components/metadata/VideoPreview.vue"
  import VideoMetadata from "@/components/metadata/VideoMetadata.vue"
  import SerieMetadata from "@/components/metadata/SerieMetadata.vue"
  import SeasonMetadata from "@/components/metadata/SeasonMetadata.vue"
  import ValidationPlayer from "@/components/player/ValidationPlayer.vue"
  import SeasonsMetadata from "@/components/metadata/SeasonsMetadata.vue"


  export default {
    name: 'ValidationPage',
    components : {
      VideoTabs,
      VideoPreview,
      SerieMetadata,
      SeriesColGrid,
      VideoMetadata,
      SeasonMetadata,
      SeasonsMetadata,
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
        tabs : [
          {
            id : "1",
            title : "Video"
          },
          {
            id : "2",
            title : "Season"
          },
          {
            id : "3",
            title : "Seasons"
          },
          {
            id : "4",
            title : "Serie"
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
          }
        ]
      }
    },
    mixins : [
      apiMixin
    ],
    methods : {
      getSerie : function(params, callBack) {
        this.getData(import.meta.env.VITE_MABOKE_API_ROOT + "/serie", params, (series) => {
          let pageable 
          const {number, totalPages} = series
          if(series) {
            pageable = {
              pageNumber : number,
              totalPages :  totalPages
            }

            if(params.state === "match") {
              this.series = series.content            
            } else if(params.state === "no match") {
              this.noMatchSeries = series.content  
            }

            if(callBack) {
              callBack(pageable)
            }
            //console.log("Serie : ", series)
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
      postConflict : function(orignTitle, conflictTitle) {
        let conflict
        if(orignTitle && conflictTitle) {
          conflict = {orignTitle : orignTitle, conflictTitle : conflictTitle}
          this.postData(import.meta.env.VITE_MABOKE_API_ROOT + "/conflict", conflict)
        }
      },
      putSerie : function(serie, callBack) {
        if(serie) {
          this.putData(import.meta.env.VITE_MABOKE_API_ROOT + "/serie", serie, callBack)
        }
      },
      getTargetSerie : function(callBack) {
        let targetSerie, season

        if(this.serie) {
          targetSerie = this.series.find(serie => serie.id === this.serie.id)
          targetSerie = targetSerie ? targetSerie : this.serie
          //console.log("targetSerie : ", targetSerie, this.serie, this.series)
          if(targetSerie) {
            
            if(this.season)
              season = targetSerie.seasons.find(s => s.title === this.season.title)

            if(callBack)
              callBack(targetSerie, season)
          }
        }
      },
      extractVideo : function(video) { 
        let videos
        this.getTargetSerie((targetSerie, season) => {
          if((videos = season.videos.filter(v => v.title !== video.title))) {
            season.videos = videos
            this.serie = targetSerie
            this.season = season
            this.seasons = targetSerie.seasons
            this.putSerie(this.serie, () => {
              this.postConflict(this.season.title, video.title)
            })
          }
        })
      },
      appendVideos : function(videos) {
        let seasonVideos, seasoncpy

        if(this.serie && this.season && videos) {
          this.getTargetSerie((targetSerie, season) => {
            seasonVideos = [...season.videos, ...videos]
            season.videos = seasonVideos
            this.season = season
            this.seasons = targetSerie.seasons
            this.serie = targetSerie
            //console.log("appendVideos : ", videos, targetSerie, season)
          })
        }
      },
      appendSeason : function(newSeason) {
        let seasons
        if(newSeason) {
          this.getTargetSerie((targetSerie) => {
            seasons = [...targetSerie.seasons, newSeason]
            console.log("seasons : ", seasons)
            targetSerie.seasons = seasons
            this.seasons = targetSerie.seasons
            this.serie = targetSerie
            //console.log("appendVideos : ", videos, targetSerie, season)
          })
          console.log("appendSeason : ", this.seasons)
        }
      },
      appendSerie : function(serie) {
        if(serie) {
          console.log("appendSerie : ", serie)
        }
      }
    }
  }
</script>