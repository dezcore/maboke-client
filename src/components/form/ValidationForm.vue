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
        <v-col cols="6">
          <v-combobox
            v-model="selectGender"
            :items="gender"
            label="Genre"
            multiple
          ></v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox
            v-model="selectCountry"
            :items="country"
            label="Contry"
            multiple
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
      <v-btn
        class="me-4"
      >
        Validate
      </v-btn>
      <v-btn
        class="me-4"
      >
        Complete
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
        }
    },
    components : {},
    watch : {
        video : function(video) {
            if(video) {
                this.currentVideo = video
                //console.log("year : ", this.currentVideo.year, this.currentVideo)
            }
        }
    },
    data () {
      return {
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
          "Western"
        ],
        country : [
          "France",
          "USA",
          "UK",
          "Canada"
        ],
        selectGender : null,
        selectCountry : null,
      }
    },
    methods : {
     
    }
  }
</script>
<style scoped>
</style>