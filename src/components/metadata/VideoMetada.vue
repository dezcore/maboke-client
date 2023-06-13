<template>
  <v-card class="overflow-auto">
    <v-container fluid>
      <v-row dense>
        <v-col cols="3">
          <v-card>
            <v-img
              :src="'https://img.youtube.com/vi/' + currentVideo.videoId.trim() + '/hqdefault.jpg'"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              @click="()=>{}"
              height="200px"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-row dense>
            <v-col cols="4">
              <v-combobox
                v-model="select"
                :items="gender"
                label="Genre"
                multiple
              ></v-combobox>
            </v-col>
            <v-col cols="4">
              <v-combobox
                v-model="select"
                :items="gender"
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
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    name: 'VideoMetadata',
    props : {
      metaData : {
        type : Object,
        default : ()=>{return null}
      }
    },
    watch : {
      metaData : function(metaData) {
        if(metaData) {
          this.currentVideo = metaData
        }
      }
    },
    data () {
      return {
        select: [],
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
        currentVideo : {
          videoId: "nG4jdulgVuc",
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      }
    },
    methods : {}
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
