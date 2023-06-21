<template>
  <div>
    <form>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="currentSeason.title"
            label="Title"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="currentSeason.date"
            label="Year"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="currentSeason.number"
            label="Number"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Description"
            no-resize
            rows="5"
            :model-value="currentSeason.summary"
          >
          </v-textarea>
        </v-col>
        <v-col cols="12">
          <SeasonVideos 
            :seasons="currentSeason.videos"
          />
        </v-col>
      </v-row>
      <v-btn
        class="mt-4"
      >
        Save
      </v-btn>
    </form>
  </div>
</template>
<script>
  import SeasonVideos from "@/components/grids/SeasonVideos.vue"

  export default {
    name: 'SeasonsForm',
    props : {
      season : {
        type : Object,
        default : ()=>{return null}
      }, 
      save : {
        type : Function,
        default : () => {}
      }
    },
    components :{
      SeasonVideos
    },
    watch : {
      season : function(season) {
        if(season) {
          //console.log("Watch video : ", season)
          this.currentSeason = season
        }
      }
    },
    data () {
      return {
        currentSeason : {
          title : '',
          year : '',
          summary : '',
        },
        seasonStates : [
          "No match",
          "Match",
          "Complete",
          "To complete"
        ],
        seasonState : null,
      }
    },
    mounted() {      
      if(this.season)
        this.currentSeason = this.season
    },
    methods : {
     
    }
  }
</script>
<style scoped>
</style>