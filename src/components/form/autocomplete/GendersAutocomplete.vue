<template>
  <div :class="getParentDivClass">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <div :class="getTitleClass">Movie</div>
        </v-col>
        <v-col cols="8">
          <v-select  
          v-model="selected"
          :items="genders"
          item-title="name"
          item-value="name"
          label="Genders"
          variant="outlined"
          return-object
          single-line
        >
        </v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import windowMixin from "@/mixins/windowMixin"

  export default {
    name: 'GendersAutocomplete',
    components : {},
    data () {
      return {
        selected : null,
        genders : [
          {
            name : "Action"
          },
          {
            name : "Anime"
          },
          {
            name : "Comédies"
          },
          {
            name : "Courts-mètrages"
          },
          {
            name : "Documentaires"
          },
          {
            name : "Drames"
          },
          {
            name : "Européen"
          },
          {
            name : "Fantastique"
          },
          {
            name : "Français"
          },
          {
            name : "Horreur"
          },
          {
            name : "Indépendants"
          },
          {
            name : "International"
          },
          {
            name : "Jeunesse et famille"
          },
          {
            name : "Primés"
          },
          {
            name : "Romance"
          },
          {
            name : "Thriller"
          }
        ]
      }
    },
    mixins: [
      windowMixin
    ],
    computed : {
      getParentDivClass : function() {
        let res = "mb-12 mt-2"
        if(this.windowCode === "xs")
          res = "mt-1"
        else if(this.windowCode === "sm")
          res =  "mt-1"

        return res
      },
      getTitleClass : function() {
        let res = "text-h5 pa-3"
        if(this.windowCode === "xs")
          res = "text-h6 pa-1"
        else if(this.windowCode === "sm")
          res =  "text-h6 pa-1"

        return res
      }
    },
    methods : {
   
    }
  }
</script>
<style scoped>
</style>