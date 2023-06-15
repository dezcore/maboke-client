<template>
<div>
    <v-card class="overflow-auto">
        <v-container fluid>
            <v-row dense>
                <v-col
                  v-for="(item, index) in  series"
                  :key="item.img + index"
                  :cols="3"
                >
                  <v-card @click="previewSeasons(item.seasons)">
                      <v-img
                        :src="'https://img.youtube.com/vi/' + item.img + '/hqdefault.jpg'"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        @click="()=>{}"
                        height="200px"
                    >
                    </v-img>
                  </v-card>
                </v-col>
            </v-row>
            <v-pagination v-model="pageable.pageNumber" :length="pageable.totalPages" rounded="circle"></v-pagination>
        </v-container>
  </v-card>
</div>
</template>
<script>
  import apiMixin from '../../mixins/apiMixin'
  export default {
    name: 'SeriesColGrid',
    props : {
      previewSeasons : {
        type : Function,
        default : () => {}
      }
    },
    watch : {
      pageable: {
        handler: function (pageable) {
          if(pageable && pageable.pageNumber !== this.page) {
            this.page = pageable.pageNumber
            this.getSerie({page : pageable.pageNumber, size : 12})
          }
        },
        deep: true
      }
    },
    data () {
      return {
        page: 1,
        pageable : {
          pageNumber : 1,
          totalPages : 1
        },
        series : []
      }
    },
    mixins : [
      apiMixin
    ],
    mounted() {
      this.getSerie({page : 1, size : 12})
    },
    methods : {
      getSerie : function(params) {
        this.getData(import.meta.env.VITE_MABOKE_API_ROOT + "/serie", params, (series) => {
          const {number, totalPages} = series

          if(series) {
            this.series = series.content
            this.pageable.pageNumber = number
            this.pageable.totalPages = totalPages
            //console.log("Serie : ", series)
          }
        })
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
