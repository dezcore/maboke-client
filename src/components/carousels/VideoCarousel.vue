<template>
  <v-card height="500">
    <div class="cplayer" ref="cplayer" :attach="true">
    <div id="cplayer"></div>
    <v-overlay
      :model-value="true"
      scrim="#036358"
      contained
      :class="overlayClass"
      :closeOnContentClick="false"
      persistent
    >
      <slot name="content"></slot>
    </v-overlay>
  </div>
  </v-card>
 
</template>
<script>
  import $ from "jquery"
  import {loadVideo,  oProxy} from "../../plugins/youtube/iframe"
  export default {
    name: 'VideoCarousel',
    props : {
      overlayClass : {
        type : String,
        default : () => {return "align-center justify-start"}
      }
    },
    data () {
      return {
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