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
      postRequest : {
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
      selectPage: {
        handler: function(selectPage) {
          let targetIndex, newPage, oldPage, categories, category

          if(selectPage) {
            if(this.currentSelectPage) {
              targetIndex = selectPage.findIndex((select, index) => {return select !== this.currentSelectPage[index]})
             
              if(targetIndex !== -1) {
                newPage = selectPage[targetIndex]
                oldPage = this.currentSelectPage[targetIndex]
                categories = this.sortCategories
                category =  Object.keys(categories)[targetIndex]
                if(category) {
                  this.removeCategorieToPage(category, oldPage, categories, ()=>{
                    this.addCategorieToPage(category, newPage, categories)
                  }) 
                }
              }
            }

            this.currentSelectPage = Object.assign({}, selectPage)
          }
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
        appFiles : [
          "Home.json",
          "Serie.json",
          "Kids.json",
          "Shows.json",
        ],
        filesContents : [
          {
            "categories" : []
          },
          {
            "categories" : []
          },
          {
            "categories" : []
          },
          {
            "categories" : []
          },
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
          //console.log("Categories : ", categories)
          if(categories)
            this.categories = categories

          this.getSerie({page : 1, size : 12,  state : this.state}, (pageable) => {
            if(pageable)
              this.pageable = pageable
            this.fileHandler()
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
      addCategorieToPage : function(category, page, categories, callBack) {
        let pageId
        if(category && page && categories) {
          pageId = this.configFiles[page+ ".json"].id

          if(this.configFiles[page+ ".json"].data && this.configFiles[page+ ".json"].data.categories === undefined) {
            this.configFiles[page+ ".json"].data.categories = {}
          }
          this.configFiles[page+ ".json"].data.categories[category] = categories[category]
          console.log("addCategorieToPage : ", this.configFiles)
          /*this.updateFile(page+ ".json", pageId, this.configFiles[page+ ".json"].data, (content)=>{
            this.postCategory(page, category, (res) => {
              if(callBack)
                callBack(content, res)
            }) 
          })*/
        } else if(callBack) {
          callBack()
        }
      },
      removeCategorieToPage : function(category, page, categories, callBack) {
        let pageId
        if(category && page && categories) {
          pageId = this.configFiles[page+ ".json"].id

          if(this.configFiles[page+ ".json"].data.categories && this.configFiles[page+ ".json"].data.categories[category]) {
            delete this.configFiles[page+ ".json"].data.categories[category]
            /*this.updateFile(page+ ".json", pageId, this.configFiles[page+ ".json"].data, (content)=>{
              if(callBack)
                callBack(content)
            })*/
            console.log("remove category : ", this.configFiles)
          } else if(callBack) {
            callBack()
          }
        }
      },
      createFolder : function(folderName, callBack) {
        if(folderName) {
          this.postRequest("/gfile/folder", {
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
          this.postRequest("/gfile/create", {
            "fileName" : fileName,
            "foldersPaths" : folderName,
            "mimeType" : "application/json",
            "fileContent": content,
          }, callBack)
        }
      },
      updateFile : function(fileName, fileId, content, callBack) {
        if(fileName && fileId && content) {
          this.putFile("/gfile", {
            "fileId" : fileId,
            "fileName" : fileName,
            "mimeType" : "application/json",
            "fileContent": content,
          }, callBack)
        }
      },
      getFileContent : function(fileId, callBack) {
        if(fileId) {
          this.getRequest("/gfile/content", {id : fileId}, (content) => {
            if(callBack)
              callBack(content)
          })
        } else {
          callBack(null)
        }
      },
      getFilesContents : function(filesIds, filesNames, index, callBack) {
        if(filesIds && filesNames && index < filesIds.length) {
          this.getRequest("/gfile/content", {id : filesIds[index]}, (content) => {
            console.log("Content : ", content)
            this.configFiles[filesNames[index]].data = content 
            this.getFilesContents(filesIds, filesNames, index+1, () => {
              if(callBack)
                callBack()
            })
          })
        } else if(callBack) {
          callBack()
        }
      },
      createFiles : function(parentFileId, files, filesContents, callBack) {
        if(files) {
          this.postRequest("/gfiles/append", {
            "parentFileId" : parentFileId,
            "filesNames" : files,
            "contents": filesContents,
            "mimeType" : "application/json"
          }, callBack)
        }
      },
      initAppFilesEnv : function(appFolder) {
        if(appFolder) {
          this.createFolder(appFolder, (folder) => {
            this.createFiles(folder.id, this.appFiles, this.filesContents, (files) => {
              //console.log("files : ", files)
              let gFiles = files.map( (file, index) => {return {name : this.appFiles[index], id : file.id}})
              gFiles.push({name : appFolder, id : folder.id})
              this.postRequest("/gdrive/all", gFiles, (gRes) => {    
                this.appFiles.forEach((fileName, index) => {
                  this.configFiles[fileName] = {id : files[index].id, data : this.filesContents[index]}
                })
                console.log("Gres : ", gRes)
              })
            })
            this.configFiles[appFolder] = {id : folder.id, data : {}}
            console.log("config : ", this.configFiles)
          })
        }
      },
      setAppFilesEnv : function(appFolder) {
        const names = [appFolder, ...this.appFiles].join(",") 
        if(names) {
          console.log("names : ", names)
          this.getRequest("/gdrive/names", {names : names}, (files) => {
            if(files) {
              console.log("files : ", files)
              /*files.forEach(({name, fileId}) => {
                this.configFiles[name] = {id : fileId, data : {}}
              })*/
            }
            console.log("setAppFilesEnv : ", files)
          })
        }
      },
      fileHandler : function() {
        let appFolder = "maboke"
        this.getRequest("/gdrive/exist", {name : appFolder}, (exist) => {
          console.log("exist : ", exist);
          if(exist) {
            this.setAppFilesEnv(appFolder) 
          } else {
            this.initAppFilesEnv(appFolder)
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
