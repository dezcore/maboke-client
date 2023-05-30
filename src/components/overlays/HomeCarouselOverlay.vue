<template>
  <div>
    <div :class="['text-h1', 'pa-2']">TOXIC</div>
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
  export default {
    name: 'HomeCarouselOverlay',
    components : {},
    data () {
      return {
        mute : true,
        videoId : "",
      }
    },
    methods : {
      setMute : function() {
        this.mute = !this.mute
      }
    }
  }
</script>
<style scoped>
</style>