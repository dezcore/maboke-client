<template>
<v-row>
    <v-col cols="12">
        <div class="mabokePlayer" ref="mabokePlayer">
            <div id="player"></div>
        </div>
    </v-col>
</v-row>
</template>

<script>
import $ from "jquery"
import {loadVideo,  oProxy} from "../../plugins/youtube/iframe"

export default {
    name: 'Player',
    components : {},
    data () {
      return {
        playerVideoId : "11-lpoJHu0U"
      }
    },
    mounted() {
        this.bindPlayer()
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize)
    },
    methods : {
        initPlayer : function(width, playerHeight, videoId) {
            $(document).ready(function() {
                $.getScript("https://www.youtube.com/iframe_api", function() {
                    this.playerVideoId = videoId ? videoId : this.playerVideoId
                    console.log("test init : ",  this.playerVideoId, ", ", videoId)
                    loadVideo(null, playerHeight, width, this.playerVideoId)
                })
            })
        },
        bindPlayer : function() {
            let playerWidth 
            const clientWidth = this.$refs.mabokePlayer.clientWidth
            const playerHeight = Math.floor(Number(clientWidth) * 0.53)
            
            if(clientWidth) {
                playerWidth = Math.floor(Number(this.$refs.mabokePlayer.clientWidth) * 0.99)//99% of box
                this.initPlayer(playerWidth, playerHeight, this.$route.query.videoId)
                window.addEventListener("resize", this.onResize)
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