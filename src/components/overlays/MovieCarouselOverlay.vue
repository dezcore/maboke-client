<template>
  <div>
    <div :class="titleClass">Movie</div>
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
  import windowMixin from "@/mixins/windowMixin"

  export default {
    name: 'MovieCarouselOverlay',
    components : {},
    data () {
      return {
        mute : true,
        videoId : "",
        titleClass : "text-h1 pa-2"
      }
    },
    mixins: [
      windowMixin
    ],
    methods : {
      setMute : function() {
        this.mute = !this.mute
      }
    }
  }
</script>
<style scoped>
</style>