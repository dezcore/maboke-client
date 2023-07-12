<template>
  <div>
    <form>
      <v-alert
        v-if="showAlert"
        type="success"
        :title="alertMessage"
      ></v-alert>

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
            return-object
          >
        </v-combobox>
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
        v-if="showButtons"
        class="me-4"
        @click="saveSerie(currentSerie)"
      >
        Save
      </v-btn>
    </form>
  </div>
</template>
<script>
  import inputsMixin from "@/mixins/inputsMixin"

  export default {
    name: 'SerieForm',
    props : {
      serie : {
        type : Object,
        default : ()=>{return null}
      },
      showButtons : {
        type : Boolean,
        default : ()=>{ return true}
      },
      updateSerie : {
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
        showAlert : false,
        alertMessage : "",
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
          "no match",
          "match",
          "complete",
          "to complete"
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
    mixins : [
      inputsMixin
    ],
    mounted() {      
      if(this.serie)
        this.currentSerie = this.serie
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
      saveSerie : function(serie) {
        if(serie) {
          this.updateSerie(serie, () => {
            this.showAlertMessage("Updated serie")
          })
        }
      }
    }
  }
</script>
<style scoped>
</style>