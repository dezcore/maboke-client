<template>
<div>
    <v-card class="overflow-auto">
        <v-container fluid>
            <v-row dense>
                <v-col
                  v-for="(item, index) in  series"
                  :key="item.title + index"
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
            console.log("watch pageable : ", pageable, this.page);
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
        series : [
        {
          title: "\"FILLE MÈRE\" EPISODE 1 [ film congolaise ] juin 2023",
          img: "2fPCb8V4onM",
          viewCount : "64 070 vues",
          year: "1970-01-01T09:41:00Z",
          seasons: [
            {
              title: "\"FILLE MÈRE\" EPISODE 1 [ film congolaise ] juin 2023",
              date: "1970-01-01T09:41:00Z",
              summary: "",
              number: 1,
              videoId : "2fPCb8V4onM",
              videos: [
                {
                  title: "FILLE  MÈRE EPISODE 6 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=2fPCb8V4onM",
                  length: "50:05",
                  censor_rating: "/watch?v=2fPCb8V4onM",
                  videoId: " 2fPCb8V4onM"
                },
                {
                  title: "\"FILLE MÈRE\" EPISODE 1 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=N44Cppb8GHo",
                  length: "52:04",
                  censor_rating: "/watch?v=N44Cppb8GHo",
                  videoId: " N44Cppb8GHo"
                },
                {
                  title: "\"FILLE MÈRE\" EPISODE 3 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=rj4sBXvc5vc",
                  length: "51:37",
                  censor_rating: "/watch?v=rj4sBXvc5vc",
                  videoId: " rj4sBXvc5vc"
                },
                {
                  title: "FILLE  MÈRE EPISODE 7 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=gY7Tv6TVzms",
                  length: "52:49",
                  censor_rating: "/watch?v=gY7Tv6TVzms",
                  videoId: " gY7Tv6TVzms"
                },
                {
                  title: "\"FILLE MÈRE\" EPISODE 5 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=Qne_khUvUoU",
                  length: "50:12",
                  censor_rating: "/watch?v=Qne_khUvUoU",
                  videoId: " Qne_khUvUoU"
                },
                {
                  title: "\"FILLE MÈRE\" EPISODE 4 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=d8ug0l_bUiM",
                  length: "51:04",
                  censor_rating: "/watch?v=d8ug0l_bUiM",
                  videoId: " d8ug0l_bUiM"
                },
                {
                  title: "\"FILLE MÈRE\" EPISODE 2 [ film congolaise ] juin 2023",
                  category: "",
                  summary: "",
                  url: "/watch?v=nG4jdulgVuc",
                  length: "50:46",
                  censor_rating: "/watch?v=nG4jdulgVuc",
                  videoId: " nG4jdulgVuc"
                },
                {
                  title: "Série- Vie d'ici- Episode 1",
                  category: "",
                  summary: "",
                  url: "/watch?v=43AB5m0ScJs",
                  length: "25:45",
                  censor_rating: "/watch?v=43AB5m0ScJs",
                  videoId: " 43AB5m0ScJs"
                },
                {
                  title: "EPISODE 5",
                  category: "",
                  summary: "",
                  url: "/watch?v=BL9XhZxCrdQ",
                  length: "46:22",
                  censor_rating: "",
                  videoId: " BL9XhZxCrdQ"
                }
            ]
          }
        ]
      }]
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
            console.log("Serie : ", series)
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
