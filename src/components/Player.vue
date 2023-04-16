<template>
<div>
    <div class="mabokePlayer" ref="mabokePlayer">
        <div id="player"></div>
    </div>
</div>
</template>

<script>
import $ from "jquery"
import {loadVideo} from "../plugins/youtube/iframe"

export default {
    name: 'Player',
    components : {},
    data () {
      return {
        playerVideoId : "11-lpoJHu0U"
      }
    },
    mounted() {
      this.binddPlayer()
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize)
    },
    methods : {
        initPlayer : function(width) {
            $(document).ready(function() {
                $.getScript("https://www.youtube.com/iframe_api", function() {
                    loadVideo(null, null, width, this. playerVideoId)
                })
            })
        },
        binddPlayer : function() {
            let playerWidth
            const clientWidth = this.$refs.mabokePlayer.clientWidth

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
            const {loadVideoById} = this.$yApi1

            if(playerVideoId && loadVideoById) {
                this.playerVideoId = playerVideoId
                this.$yApi1.loadVideoById({'videoId': playerVideoId})
            }
        }
    }
  }
</script>
<style scoped>
</style>