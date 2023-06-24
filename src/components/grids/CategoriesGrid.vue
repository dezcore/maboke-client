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
      getCategory : {
        type : Function,
        default : () => {}
      },
      getFile : {
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
      putFile : {
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
        appFiles : [
          "Home.json",
          "Serie.json",
          "Kids.json",
          "Shows.json",
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
      this.initAppEnv()
    },
    methods : {
      initAppEnv : function() {
        this.getCategory((categories) => {
          //console.log("Categories : ", categories)
          if(categories)
            this.categories = categories

          this.getSerie({page : 1, size : 12,  state : this.state}, (pageable) => {
            if(pageable)
              this.pageable = pageable
            //this.fileHandler()
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
        let page, pageId, categories
        if(category) {
          page = this.selectPage[index]
          categories = this.sortCategories
          pageId = this.configFiles[page+ ".json"]

          this.updateFile(page+ ".json", pageId, {"categories" : categories[category]}, (content)=>{
            //console.log("categoriePage : ", page, pageId, categories[category])
            console.log("Update : ", content)
            this.postCategory(this.selectPage[index], category, (res) => {
              console.log("Set category page : ", category, this.selectPage, res)
            }) 
          })
        }
      },
      createFolder : function(folderName, callBack) {
        if(folderName) {
          this.postFile("/gapi/drive/folders/create", {
            "fileName" : "defaultFile",
            "folderName" : folderName,
            "fileContent": {
              "test" :  "Hello world !"
            }
          }, callBack)
        }
      },
      createFile : function(folderName, fileName, content, callBack) {
        if(folderName && fileName) {
          this.postFile("/gapi/drive/files/create", {
            "fileName" : fileName,
            "foldersPaths" : folderName,
            "mimeType" : "application/json",
            "fileContent": content,
          }, callBack)
        }
      },
      appendFile : function(folderId, fileName, content, callBack) {
        if(folderId && fileName) {
          this.postFile("/gapi/dapi/file/append", {
            "fileName" : fileName,
            "parentFileId" : folderId,
            "mimeType" : "application/json",
            "fileContent": content,
          }, callBack)
        }
      },
      updateFile : function(fileName, fileId, content, callBack) {
        if(fileName && fileId && content) {
          this.putFile("/gapi/dapi/file", {
            "fileId" : fileId,
            "fileName" : fileName,
            "mimeType" : "application/json",
            "fileContent": content,
          }, callBack)
        }
      },
      getFileContent : function() {
        this.getFile("/gapi/filecontent", {fileName : fileName}, (content) => {
          if(content) {
            console.log("Content : ", content)
          }
        })
      },
      getFileId : function(fileName, callBack) {
        let file
        if(fileName) {
          this.getFile("/gapi/dapi/name", {fileName : fileName}, (files) => {
            let filesNames = Object.keys(files)
            if(filesNames) {
              file = filesNames.find(name => name === fileName)
              if(file && callBack)
                callBack({name : fileName, id : files[file]})
              else {
                callBack({name : null, id : null})
              }
            }
          })
        }
      },
      createFiles : function(files, parentFileId, index, callBack) {
        if(files && index < files.length) {
          this.appendFile(parentFileId, files[index], {"categories" : []}, (file) => {
            //console.log("fileName : ",files[index])
            this.configFiles[files[index]] = file.id
            //console.log("file : ", this.configFiles)
            this.createFiles(files, parentFileId, index+1, ()=>{
              if(callBack)
                callBack()
            })
          })
        } else if(callBack) {
          callBack()
        }
      },
      getFiles : function(files, index, callBack) {
        if(files  && index < files.length) {
          this.getFileId(files[index], ({name, id})=>{
            if(name && id)
              this.configFiles[name] = id

            this.getFiles(files, index + 1 , ()=>{
              if(callBack)
                callBack()
            })

          })
        } else if(callBack) {
          callBack()
        }
      },
      fileHandler : function() {
        let appFolder = "maboke"
        this.getFileId(appFolder, ({name, id}) => {
          if(name === null) {
            //console.log("name : ", name, id)
            this.createFolder(appFolder, (folder) => {
              this.configFiles[appFolder] = folder.id
              this.createFiles(this.appFiles, folder.id, 0, ()=>{
                console.log("Create configFile : ", this.configFiles)
              })
            })
          } else {
            this.configFiles[name] = id
            this.getFiles(this.appFiles, 0, ()=>{
              console.log("files : ", this.configFiles)
            })
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
