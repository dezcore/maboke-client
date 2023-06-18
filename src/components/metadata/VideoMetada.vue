<template>
  <v-card>
    <v-row dense>
        <v-col cols="6">
          <v-card class="overflow-auto">
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="(item, index) in currentSeason.videos"
                  :key="item.img + index"
                  :cols="3"
                >
                <v-img
                  :src="'https://i.ytimg.com/vi/' + item.img + '/mqdefault.jpg'"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  @click="setVideo(item)"
                  height="200px"
                  >
                  </v-img>
                </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <ValidationForm 
          :video="video"
        />
      </v-col>
      </v-row>
  </v-card>
</template>

<script>
  import ValidationForm from "@/components/form/ValidationForm.vue"
  export default {
    name: 'VideoMetadata',
    components : {
      ValidationForm
    },
    props : {
      season : {
        type : Object,
      }
    },
    watch : {
      season : function(season) {
        if(season) {
          this.currentSeason = season
          //console.log("Watch season : ",  season)
        }
      }
    },
    data () {
      return {
        select: [],
        video : null,
        currentSeason : {
          videos : []
        },
      }
    },
    methods : {
      setVideo : function(video) {
        //console.log("video : ", video)
        if(video) {
          this.video = video
        }
      },
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
