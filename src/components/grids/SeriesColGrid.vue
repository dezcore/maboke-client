<template>
<div>
    <v-card class="overflow-auto">
        <v-container fluid>
            <v-row dense>
                <v-col
                  v-for="(item, index) in currentSeries"
                  :key="item.img + index"
                  :cols="3"
                >
                  <v-card @click="previewSeasons(item)">
                      <v-img
                        :src="'https://i.ytimg.com/vi/' + item.img + '/mqdefault.jpg'"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        @click="()=>{}"
                        height="200px"
                    >
                    </v-img>
                    <v-card-actions>
                      <v-btn variant="outlined">
                        Append
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
            </v-row>
            <v-pagination v-model="currentPageable.pageNumber" :length="currentPageable.totalPages" rounded="circle"></v-pagination>
        </v-container>
  </v-card>
</div>
</template>
<script>
  export default {
    name: 'SeriesColGrid',
    props : {
      series : {
        type : Array
      },
      pageable : {
        type :  Object
      },
      getSerie : {
        type : Function
      },
      appendVideo : {
        type : Function
      },
      previewSeasons : {
        type : Function
      }
    },
    watch : {
      series : function(series) {
        if(series)
          this.currentSeries = series
      },
      pageable: {
        handler: function (pageable) {
          if(pageable && pageable.pageNumber !== this.page) {
            this.page = pageable.pageNumber
            this.currentPageable = pageable
          }
        },
        deep: true
      },
      currentPageable : {
        handler: function (pageable) {
          if(pageable && pageable.pageNumber !== this.page) {
            this.getSerie({page : pageable.pageNumber, size : 12})
          }
        },
        deep: true
      }
    },
    data () {
      return {
        page: 1,
        currentSeries : [],
        currentPageable : {
          pageNumber : 1,
          totalPages : 1
        }
      }
    },
    methods : {}
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
