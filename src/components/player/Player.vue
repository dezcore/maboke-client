<template>
<v-row>
    <v-col cols="12">
        <div class="mabokePlayer" ref="mabokePlayer">
            <PlayerOverlay 
                :showPlayerOverlay="showPlayerOverlay"
            >
                <template #player>                        
                    <div id="player"></div>
                </template>
            </PlayerOverlay>
        </div>
    </v-col>
    <v-col cols="12">
        <PlayerToolbar/>
    </v-col>
</v-row>
</template>

<script>
import $ from "jquery"
import PlayerToolbar from "../toolbars/PlayerToolbar.vue"
import PlayerOverlay from "../overlays/PlayerOverlay.vue"
import {loadVideo,  oProxy, yProxy} from "../../plugins/youtube/iframe"

export default {
    name: 'Player',
    components : {
        PlayerOverlay,
        PlayerToolbar
    },
    data () {
      return {
        showPlayerOverlay : null, 
        playerVideoId : "11-lpoJHu0U",
        playerVars : { 
          autoplay : 1, 
          fs : 1,//Full screen 
          rel: 0, 
          mute : 0, 
          //color : 'white', 
          showinfo : 0,
          //loop : 1,
          //color : "white",
          //controls: 0,
          playsinline : 0,
          modestbranding : 1,// Youtbe logo
        }
      }
    },
    mounted() {
        this.bindPlayer()
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize)
    },
    methods : {
        setPlayerOverlay : function(current) {
            if(current)
                this.showPlayerOverlay = current
            console.log("Test setOverlay")
        },
        initPlayer : function(width, playerHeight, videoId, playerVars) {
            $(document).ready(function() {
                $.getScript("https://www.youtube.com/iframe_api", function() {
                    this.playerVideoId = videoId ? videoId : this.playerVideoId
                    loadVideo(null, playerHeight, width, this.playerVideoId, playerVars)
                })
            })
        },
        bindPlayer : function() {
            let playerWidth 
            const clientWidth = this.$refs.mabokePlayer.clientWidth
            const playerHeight = Math.floor(Number(clientWidth) * 0.53)
            
            if(clientWidth) {
                playerWidth = Math.floor(Number(this.$refs.mabokePlayer.clientWidth) * 0.99)//99% of box
                this.initPlayer(playerWidth, playerHeight, this.$route.query.videoId, this.playerVars)
                window.addEventListener("resize", this.onResize)
                yProxy['setPlayerOverlay'] = this.setPlayerOverlay
            }
        },
        onResize : function () {
            let playerWidth 
            const clientWidth = this.$refs.mabokePlayer.clientWidth
            const playerHeight = Math.floor(Number(clientWidth) * 0.53)
            
            if(clientWidth) {
                playerWidth = Math.floor(Number(clientWidth) * 0.99)//99% of box
                $("#player").width(playerWidth)
                $("#player").height(playerHeight)
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
</style>