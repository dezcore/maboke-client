<template>
  <div>
    <div class="text-h1 font-weight-regular text-white">TOXIC</div>
      <div class="text-center pa-4">
        <v-btn  density="comfortable" class= "ma-1" prepend-icon="mdi-play">
          Lecture
        </v-btn>
        <v-btn  density="comfortable" class= "ma-1" prepend-icon="mdi-information">
          Plus d'infos
        </v-btn>
        <v-btn density="compact" icon="mdi-volume-high" v-if="!mute" @click="setMute"></v-btn>
        <v-btn density="compact" icon="mdi-volume-off" v-else @click="setMute"></v-btn>
      </div>
  </div>
</template>
<script>
  import {oProxy} from "../../plugins/youtube/iframe"
  export default {
    name: 'HomeCarouselOverlay',
    components : {},
    data () {
      return {
        mute : true,
        videoId : "",
        fonts : [
          "font-weight-black",
          "font-weight-bold",
          "font-weight-medium",
          "font-weight-regular",
          "font-weight-light",
          "font-weight-thin",
          "font-italic"
        ],
        textTransform : [
          "text-lowercase",
          "text-uppercase",
          "text-capitalize"
        ],
        textAlign : [
          "text-left",
          "text-right",
          "text-center",
          "text-justify",
          "text-start",
          "text-end"
        ],
        classes: [
          'text-h1',
          'text-h2',
          'text-h3',
          'text-h4',
          'text-h5',
          'text-h6',
          'text-subtitle-1',
          'text-subtitle-2',
          'text-body-1',
          'text-body-2',
          'text-button',
          'text-caption',
          'text-overline',
        ],
      }
    },
    methods : {
      setMute : function() {
        const {mute, unMute} = oProxy.$yApi1
        this.mute = !this.mute
        
        if(this.mute && mute)
          oProxy.$yApi1.mute()
        else if(!this.mute && unMute) 
          oProxy.$yApi1.unMute()
      }
    }
  }
</script>
<style scoped>
</style>