<template>
  <CatalogsTopBar :showAppBar="true">
    <template #main>
      <div>
        
        <VideoTabs :tabs="tabs">
          <template #Series>
            <v-row>
              <v-col cols="8">
                <CategoriesGrid
                  state="match"
                  :series="series"
                  :getSerie="getSerie"
                  :previewSeasons="setSerie"
                />
              </v-col>
              <v-col cols="4">
                <v-card height="800" class="overflow-auto">
                  <v-card-text>
                    <SerieForm 
                      :serie="serie"
                      :showButtons="false"
                    />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
          <template #Preview>
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              style="width: 0; min-width: 100% !important;" height="800"
              src="http://localhost:8080">
            </iframe>
          </template>
        </VideoTabs>
      </div>
    </template>
  </CatalogsTopBar>
</template>
<script>
import apiMixin from "@/mixins/apiMixin"
import VideoTabs from "@/components/tabs/VideoTabs.vue"
import CatalogsTopBar from "@/components/nav/CatalogsTopBar.vue"
import CategoriesGrid from "@/components/grids/CategoriesGrid.vue"
import SerieForm from "@/components/form/SerieForm.vue"

export default {
  name: 'CatalogsHomeView',
  components : {
    SerieForm,
    VideoTabs,
    CategoriesGrid,
    CatalogsTopBar
  },
  data: () => ({
    serie : null, 
    items: [],
    series : [],
    tabs : [
      {
        id : "1",
        title : "Series"
      },
      {
        id : "2",
        title : "Preview"
      }
    ], 
  }),
  mixins : [
    apiMixin
  ],
  methods : {
    getSerie : function(params, callBack) {
      this.getData(import.meta.env.VITE_MABOKE_API_ROOT + "/serie/categories", params, (series) => {
        let pageable 
        const {number, totalPages} = series
        if(series) {
          pageable = {
            pageNumber : number,
            totalPages :  totalPages
          }

          if(params.state === "match") {
            this.series = series.content            
          } 

          if(callBack) {
            callBack(pageable)
          }
          //console.log("Serie : ", series)
        }
      })
    },
    setSerie : function(serie) {
      if(serie) {
        this.serie = serie
      }
    }
  }
}
</script>
<style>
</style>