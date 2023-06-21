<template>
  <div>
    <form>
      <v-row class="mb-2">
        <v-col cols="6">
          <v-text-field
            v-model="currentSerie.title"
            label="Title"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="currentSerie.year"
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
        <v-col cols="6">
          <v-combobox
            v-model="serieState"
            :items="serieStates"
            label="Serie state"
            multiple
          ></v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox
            v-model="serieCategory"
            :items="serieCategories"
            label="Category"
            multiple
          ></v-combobox>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Description"
            no-resize
            rows="5"
            :model-value="currentSerie.summary"
          >
          </v-textarea>
        </v-col>
        <v-col cols="12">
          <SeasonVideos 
            :seasons="seasons"
          />
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
  import SeasonVideos from "@/components/grids/SeasonVideos.vue"
  export default {
    name: 'SeasonForm',
    props : {
      serie : {
        type : Object,
        default : ()=>{return null}
      },
      save : {
        type : Function,
        default : () => {}
      }
    },
    components : {
      SeasonVideos
    },
    watch : {
      serie : function(serie) {
        if(serie) {
          this.currentSerie = serie
          this.seasons = this.currentSerie.seasons
          //console.log("serie : ", this.currentSerie, ", ", this.seasons)
        }
      }
    },
    data () {
      return {
        seasons : [],
        currentSerie : {
          title : '',
          year : '',
          summary : '',
          videos : []
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
        serieStates : [
          "No match",
          "Match",
          "Complete",
          "To complete"
        ],
        serieCategories : [
          "Histoires et talents",
          "Notre sélection pour vous",
          "Nouveautés",
          "Appreciés sur Maboke",
          "Revoir",
          "Films et séries",
          "Séries internationales",
          "Seulement sur maboke",
          "Top 10 des films",
          "Ajouts des x mois",
          "Tendances acteulles",
          "À regarder ce week-end"
        ],
        serieState : null,
        selectGender : null,
        serieCategory : null,
        selectCountry : null,
      }
    },
    methods : {
     
    }
  }
</script>
<style scoped>
</style>