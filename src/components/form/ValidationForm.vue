<template>
  <div>
    <form>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="currentVideo.title"
            label="Title"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="currentVideo.year"
            label="Year"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-combobox
            v-model="currentVideo.category"
            :items="gender"
            label="Genre"
          ></v-combobox>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Description"
            no-resize
            rows="5"
            :model-value="currentVideo.summary"
          >
          </v-textarea>
        </v-col>
      </v-row>
      <v-btn
        class="me-4"
      >
        Save
      </v-btn>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'ValidationForm',
    props : {
      video : {
        type : Object,
        default : ()=>{return null}
      },
      season : {
        type : Object,
        default : ()=>{return null}
      },
      save : {
        type : Function,
        default : () => {}
      }
    },
    components : {},
    watch : {
      video : function(video) {
        //console.log("Watch video : ", video)
        if(video) {
          this.currentVideo = video
          //console.log("year : ", this.currentVideo.year, this.currentVideo)
        }
      },
      season : function(season) {
        //console.log("Watch season : ", season)
        if(season) {
          this.currentSeason = season
          //console.log("year : ", this.currentVideo.year, this.currentVideo)
        }
      }
    },
    data () {
      return {
        currentSeason : null,
        currentVideo : {
          title : '',
          year : '',
          summary : '',
        },
        gender : [
          "Action",
          "Animation",
          "Aventure",
          "Biopic",
          "Comédie",
          "Documentaire",
          "Drame",
          "Famille",
          "Fantastique",
          "Guerre",
          "Historique",
          "Horreur",
          "Judiciaire",
          "Musical",
          "Policier",
          "Romance",
          "Science fiction",
          "Thriller",
          "Western",
          "Comedy",
          "Theater",
          "Cartoon"
        ],
      }
    },
    methods : {
     
    }
  }
</script>
<style scoped>
</style>