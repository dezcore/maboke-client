<template>
<div>
    <v-card class="overflow-auto">
      <v-alert
        v-if="showAlert"
        type="warning"
        :title="alertMessage"
      ></v-alert>
      <v-container fluid>
            <v-row dense>
                <v-col
                  v-for="(item, index) in currentSeries"
                  :key="item.img + index"
                  :cols="3"
                >
                  <v-card>
                      <v-img
                        :src="'https://i.ytimg.com/vi/' + item.img + '/mqdefault.jpg'"
                        class="white--text align-end"
                        @click="previewSeasons(item)"
                        height="200px"
                    >
                    </v-img>
                    <v-card-actions>
                      <v-list-item class="w-100">
                      <template v-slot:append>
                      <v-tooltip text="Append Serie" location="bottom">
                        <template v-slot:activator="{ props }">
                          <v-icon
                            size="large"
                            color="green-darken-2"
                            icon="mdi-folder-play"
                            v-bind="props"
                            @click="createSerieHandler(item)"
                          ></v-icon>
                        </template>
                      </v-tooltip>
                      <v-tooltip text="Append Season" location="bottom">
                        <template v-slot:activator="{ props }">
                          <v-icon
                            size="large"
                            color="red"
                            icon="mdi-multimedia"
                            v-bind="props"
                            @click="createSeasonHandler(item)"
                          ></v-icon>
                        </template>
                      </v-tooltip>
                      <v-tooltip text="Append videos" location="bottom">
                        <template v-slot:activator="{ props }">
                          <v-icon
                            size="large"
                            icon="mdi-file-video"
                            v-bind="props"
                            @click="appendVideoHandler(item)"
                          ></v-icon>
                        </template>
                      </v-tooltip>
                      </template>
                      </v-list-item>
                    </v-card-actions>
                  </v-card>
                </v-col>
            </v-row>
            <v-pagination v-model="pageable.pageNumber" :length="pageable.totalPages" rounded="circle"></v-pagination>
        </v-container>
  </v-card>
</div>
</template>
<script>
  export default {
    name: 'SeriesColGrid',
    props : {
      state : {
        type : String,
        default : ()=>{return "match"}
      },
      series : {
        type : Array
      },
      serie : {
        type : Object
      },
      season : {
        type : Object
      },
      seasons : {
        type :  Array,
        default : ()=>{return []}
      },
      getSerie : {
        type : Function
      },
      appendVideos : {
        type : Function
      },
      appendSeason : {
        type : Function
      },
      appendSerie : {
        type : Function
      },
      previewSeasons : {
        type : Function
      }
    },
    watch : {
      series : function(series) {
        console.log("Watch serie : ", series)
        if(series)
          this.currentSeries = series
      },
      pageable: {
        handler: function(pageable) {
          if(pageable && pageable.pageNumber !== this.page) {
            this.page = pageable.pageNumber
            console.log("mWatch")
            this.getSerie({page : pageable.pageNumber, size : 12, state : this.state}, (pageable) => {
              console.log("mWatch")
              if(pageable)
                this.pageable = pageable
            })
          }
        },
        deep: true
      }
    },
    data () {
      return {
        page: 1,
        showAlert : false,
        currentSeries : [],
        alertMessage : "",
        pageable : {
          pageNumber : 1,
          totalPages : 1
        }
      }
    },
    mounted() {
      console.log("mounted serie")
      this.getSerie({page : 1, size : 12,  state : this.state}, (pageable) => {
        console.log("mounted")
        if(pageable)
          this.pageable = pageable
      })
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
      serieHandler : function() {
        console.log("serieHandler")
      },
      appendVideoHandler : function(serie) {
        if(serie && this.season) {
          //console.log("appendVideoHandler : ", serie)
          serie.seasons.forEach(season => {
            this.appendVideos(season.videos)
          })
        } else {
          this.showAlertMessage("Please select a season")
        }
      },
      createSeasonHandler : function(serie) {
        if(serie && this.serie) {
          //console.log("appendVideoHandler : ", serie)
          serie.seasons.forEach(season => {
            this.appendSeason(season)
          })
        }else {
          this.showAlertMessage("Please select a serie")
        }
      },
      createSerieHandler : function(serie) {
        if(serie) {
          this.appendSerie(serie)
        }
      }
    }
  }
</script>

<style scoped>
.headerClass{
  white-space: nowrap ;
  word-break: normal;
  overflow: hidden ;
  text-overflow: ellipsis;
}
</style>
