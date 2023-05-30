<template>
<v-row>
    <v-col cols="12">
        <div class="cplayer-container">
            <div id="cplayer">
            </div>
        </div>
    </v-col>
</v-row>
</template>

<script>
import $ from "jquery"
import {loadVideo,  oProxy} from "../../plugins/youtube/iframe"
export default {
    name: 'CarouselPlayer',
    props : {

    },
    data () {
      return {
        overlay: true,
        playerVideoId : ""
      }
    },
    mounted() {
        this.bindCarousel()
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize)
    },
    computed : {},
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
            const width = $("#dynamic_carousel").width()
            const height = $("#dynamic_carousel").height();
            
            if(width !== undefined && height !== undefined) {
                this.initPlayer(width, height, null)
                window.addEventListener("resize", this.onResize)
            }
        },
        onResize : function () {
            const width = $("#dynamic_carousel").width()
            const height = $("#dynamic_carousel").height();
            
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
.cplayer-container {
	overflow: hidden;
    /*aspect-ratio: 16/9;*/
	pointer-events: none;
};
</style>