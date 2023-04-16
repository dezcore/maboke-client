<template>
<v-row>
    <v-col cols="12">
        <div class="mabokePlayer" ref="mabokePlayer">
            <div id="player"></div>
        </div>
    </v-col>
    <v-btn @click="changeVideo('WeIx7cZtOf0')">changeVideo</v-btn>
</v-row>
</template>

<script>
import $ from "jquery"
import {loadVideo,  oProxy} from "../plugins/youtube/iframe"

export default {
    name: 'Player',
    components : {},
    data () {
      return {
        playerVideoId : "11-lpoJHu0U"
      }
    },
    mounted() {
        console.log("Before bind")
        this.bindPlayer()
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize)
    },
    methods : {
        initPlayer : function(width) {
            $(document).ready(function() {
                $.getScript("https://www.youtube.com/iframe_api", function() {
                    loadVideo(null, null, width, this.playerVideoId)
                })
            })
        },
        bindPlayer : function() {
            let playerWidth
            const clientWidth = 700//this.$refs.mabokePlayer.clientWidth
            console.log("clientWidth : ", this.$refs.mabokePlayer.clientWidth)
            if(clientWidth) {
                playerWidth = Math.floor(Number(this.$refs.mabokePlayer.clientWidth) * 0.99)//99% of box
                this.initPlayer(playerWidth)
                window.addEventListener("resize", this.onResize)
            }
        },
        onResize : function () {
            const playerWidth = Math.floor(Number(this.$refs.mabokePlaye.clientWidth) * 0.99)//99% of box
            $("#player").width(playerWidth)
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