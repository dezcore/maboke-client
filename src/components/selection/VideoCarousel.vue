<template>
  <v-card height="500">
    <div class="cplayer" ref="cplayer" :attach="true">
    <div id="cplayer"></div>
    <v-overlay
      :model-value="true"
      scrim="#036358"
      contained
      class="align-center justify-start"
    >
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
    </v-overlay>
  </div>
  </v-card>
 
</template>
<script>
  import $ from "jquery"
  import {loadVideo,  oProxy} from "../../plugins/youtube/iframe"

  export default {
    name: 'VideoCarousel',
    components : {
    },
    data () {
      return {
        mute : true,
        videoId : "",
        colors: [
          'indigo',
          'warning',
          'pink darken-2'
        ],
        slides: [
          'First',
          'Second',
          'Third'
        ]
      }
    },
    mounted() {
      this.bindCarousel()
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize)
    },
    methods : {
      setMute : function() {
        this.mute = !this.mute
      },
      initPlayer : function(width, playerHeight, videoId) {
        $(document).ready(function() {
          $.getScript("https://www.youtube.com/iframe_api", function() {
            this.playerVideoId = videoId ? videoId : this.playerVideoId
            loadVideo("cplayer", playerHeight, width, this.playerVideoId)
          })
        })
      },
      bindCarousel : function() {
        const width = this.$refs.cplayer.clientWidth
        const height =  Math.floor(Number(width) * 0.53)

        if(width !== undefined && height !== undefined) {
          this.initPlayer(width, height, null)
          window.addEventListener("resize", this.onResize)
        }
      },
      onResize : function () {
        const width =  this.$refs.cplayer.clientWidth
        const height = Math.floor(Number(width) * 0.53)
            
        if(width !== undefined && height !== undefined) {
          $("#cplayer").width(width)
          $("#cplayer").height(height)
        }
      },
      changeVideo : function(playerVideoId) {
        const {loadVideoById} = oProxy.$yApi1
        if(playerVideoId && loadVideoById) {
          this.playerVideoId = playerVideoId
          oProxy.$yApi1.loadVideoById({'videoId': playerVideoId})
        }
      }
    }
  }
</script>
<style scoped>
.cplayer {
	overflow: hidden;
    /*aspect-ratio: 16/9;*/
	pointer-events: none;
};
.cplayer iframe{
  position: absolute;
  top: -60px;
  left: 0;
}

</style>