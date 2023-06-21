<template>
  <div>
    <form>
      <v-row>
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
            v-model="currentSerie.gender"
            :items="gender"
            label="Genre"
            multiple
          ></v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox
            v-model="currentSerie.country"
            :items="country"
            label="Contry"
          ></v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox
            v-model="currentSerie.state"
            :items="serieStates"
            label="Serie state"
            multiple
          ></v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox
            v-model="currentSerie.category"
            :items="serieCategories"
            label="Category"
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
    name: 'SerieForm',
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
    watch : {
      serie : function(serie) {
        if(serie) {
          //console.log("Watch video : ", serie)
          this.currentSerie = serie
        }
      }
    },
    data () {
      return {
        currentSerie : {
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
        country : [
          "FR",
          "USA",
          "UK",
          "CA",
          "CD",
          "BR",
          "IN"
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
        selectCountry : null,
      }
    },
    mounted() {      
      if(this.serie)
        this.currentSerie = this.serie
    },
    methods : {
     
    }
  }
</script>
<style scoped>
</style>