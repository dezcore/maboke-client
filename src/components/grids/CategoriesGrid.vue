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
              @update:modelValue="setCategoryPage(key, index)"
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
      getFile : {
        type : Function,
        default : () => {}
      },
      getCategory : {
        type : Function,
        default : () => {}
      },
      getFileByName : {
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
      season : {
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
      postFile : {
        type : Function,
        default : ()=>{}
      },
      appendVideos : {
        type : Function,
        default : ()=>{}
      },
      appendSeason : {
        type : Function,
        default : ()=>{}
      },
      appendSerie : {
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
        configFiles : {}
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
      this.getCategory((categories)=>{
        //console.log("Categories : ", categories)
        if(categories)
          this.categories = categories

        this.getSerie({page : 1, size : 12,  state : this.state}, (pageable) => {
          if(pageable)
            this.pageable = pageable
          
          this.fileHandler()
          /*this.getFile({id : "1X_MVW8KdKyUc-kauRgVcvMadLWVAmz6d" }, (content) => {
            console.log("Content : ", content)
          })*/
        })
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
      },
      setCategoryPage : function(category, index) {
        if(category) {
          this.postCategory(this.selectPage[index], category, (res) => {
            console.log("Set category page : ", category, this.selectPage, res)
          }) 
        }
      },
      createFolder : function(folderName, fileName, callBack) {
        if(folderName && fileName) {
          this.postFile("/gapi/drive/folders/create", {
            "fileName" : fileName,
            "folderName" : folderName,
            "fileContent": {
              "test" :  "Hello world !"
            }
          }, callBack)
        }
      },
      createFile : function(folderName, fileName, callBack) {
        if(folderName && fileName) {
          this.postFile("/gapi/drive/files/create", {
            "fileName" : fileName,
            "foldersPaths" : folderName,
            "mimeType" : "application/json",
            "fileContent": {
              "test" :  "Hello world !"
            }
          }, callBack)
        }
      },
      fileHandler : function() {
        this.getFileByName("/gapi/dapi/name", {fileName : "maboke"}, (files) => {
          let mabokeFile
          let filesNames = Object.keys(files);

          if(filesNames) {
            mabokeFile = filesNames.find(name => name === "maboke")
            if(mabokeFile === undefined) {
              this.createFolder("maboke", "testDefault", (folder) => {
                this.configFiles["maboke"] = folder.id
                this.createFile("maboke", "home.json", (file)=>{
                  this.configFiles["home"] = file.id
                  console.log("file : ", this.configFiles)
                })
              })
            } else {
              this.configFiles[mabokeFile] = files[mabokeFile]
              console.log("files : ", this.configFiles)
            }
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
