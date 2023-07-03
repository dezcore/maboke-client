<template>
<div>
    <v-card class="overflow-auto">
      <v-alert
        v-if="showAlert"
        type="warning"
        :title="alertMessage"
      ></v-alert>
      <v-container fluid>
        <v-card 
          v-for="(key, index) in Object.keys(sortCategories)" 
          :key="'category' + index"
        >

          <div>
            <h2 class="text-h6 mb-2 text-left">
              {{key}}
            </h2>
            <form>
            <v-select
              v-model="selectPage[index]"
              :items="pages"
              label="Page"
            ></v-select>
            </form>

          </div>
          <div  
            v-for="(item, index) in Object.values(sortCategories)[index]"
            :key="item.img + index"
          >
            <v-row dense>
          <v-col
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
            </v-card>
          </v-col>
        </v-row>
          </div>
        </v-card>
        <v-pagination v-model="pageable.pageNumber" :length="pageable.totalPages" rounded="circle"></v-pagination>
      </v-container>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'CategoriesGrid',
    props : {
      state : {
        type : String,
        default : ()=>{return "match"}
      },
      series : {
        type : Array,
        default : ()=> {return []}
      },
      getCategory : {
        type : Function,
        default : () => {}
      },
      getRequest : {
        type : Function,
        default : () => {}
      },
      postCategory : {
        type : Function,
        default : () => {}
      },
      serie : {
        type : Object,
        default : ()=>{return null}
      }, 
      seasons : {
        type :  Array,
        default : ()=>{return []}
      },
      getSerie : {
        type : Function,
        default : ()=>{}
      },
      postRequest : {
        type : Function,
        default : ()=>{}
      },
      previewSeasons : {
        type : Function,
        default : ()=>{}
      }
    },
    watch : {
      series : function(series) {
        if(series) {
          this.currentSeries = series
          Object.keys(this.sortCategories).forEach((key) => {
            let index = this.categories.findIndex(pageCategory => pageCategory.category === key)

            if(index !== -1) {
              this.selectPage.push(this.categories[index].page)
            } else {
              this.selectPage.push("")
            }
          })
        }
      },
      selectPage: {
        handler: function(selectPage) {
          let targetIndex 
          if(this.currentSelectPage) {
            targetIndex = selectPage.findIndex((select, index) => {return select !== this.currentSelectPage[index]})
            this.selectPageHandler(targetIndex, selectPage) 
          }
          this.currentSelectPage = Object.assign({}, selectPage)
        },
        deep: true
      },
      pageable: {
        handler: function(pageable) {
          if(pageable && pageable.pageNumber !== this.page) {
            this.page = pageable.pageNumber
            this.getSerie({page : pageable.pageNumber, size : 12, state : this.state}, (pageable) => {
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
        selectPage : [],
        categories : [],
        showAlert : false,
        currentSeries : [],
        alertMessage : "",
        pageable : {
          pageNumber : 1,
          totalPages : 1
        },
        pages : [
          "Home",
          "Serie",
          "Kids",
          "Shows",
        ],
        configFiles : {},
        currentSelectPage : null,
      }
    },
    computed : {
      sortCategories : function() {
        let categories = []
        if(this.series) {
          this.series.forEach((serie) => {
            if(categories[serie.category] === undefined) {
              categories[serie.category] = []
            }
            categories[serie.category].push(serie)
          })
        }
        //console.log("this.series : ", categories)
        return categories
      }
    },
    mounted() {
      this.initAppEnv()
    },
    methods : {
      initAppEnv : function() {
        this.getCategory((categories) => {
          if(categories)
            this.categories = categories

          this.getSerie({page : 1, size : 12,  state : this.state}, (pageable) => {
            if(pageable)
              this.pageable = pageable
          })
        })
      },
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
      selectPageHandler : function(targetIndex, selectPage) {
        let newPage, oldPage, categories, category
        
        if(targetIndex !== -1 && selectPage) {
          newPage = selectPage[targetIndex]
          oldPage = this.currentSelectPage[targetIndex]
          categories = this.sortCategories
          category =  Object.keys(categories)[targetIndex]
          if(newPage !== oldPage) {
            this.postCategory(newPage, category, () => {
              console.log("postCategory : ", category, ", ", newPage)
            })
          }
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
