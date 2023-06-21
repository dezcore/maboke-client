<template>
    <v-row>
        <v-col cols="6">
            <div class="validationPlayer" ref="validationPlayer">
                <div id="player"></div>
            </div>
        </v-col>
        <v-col cols="6">
            <v-card height="500" class="overflow-auto">
                <v-card-text>
                    <ValidationForm 
                        :video="video"
                    />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import $ from "jquery"
import {loadVideo,  oProxy} from "@/plugins/youtube/iframe"
import ValidationForm from "@/components/form/ValidationForm.vue"

export default {
    name: 'ValidationPlayer',
    components : {
        ValidationForm
    },
    props : {
        video : {
            type : Object,
            default : ()=>{return null}
        }
    },
    watch : {
        video : function(video) {
            if(video) {
                this.changeVideo(video.img)
                //console.log("year : ", this.currentVideo.year, this.currentVideo)
            }
        }
    },
    data () {
      return {
       
        showPlayerOverlay : null, 
        playerVideoId : "11-lpoJHu0U",
        playerVars : { 
          //autoplay : 1, 
          //fs : 1,//Full screen 
          //rel: 0, 
          //mute : 0, 
          //showinfo : 0,
          //playsinline : 0,
          //modestbranding : 1,// Youtbe logo
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
            const clientWidth = this.$refs.validationPlayer.clientWidth
            const playerHeight = Math.floor(Number(clientWidth) * 0.53)
            //console.log("client : ", clientWidth, this.$refs.validationPlayer.clientWidth)
            if(clientWidth) {
                playerWidth = Math.floor(Number(this.$refs.validationPlayer.clientWidth) * 0.99)//99% of box
                this.initPlayer(playerWidth, playerHeight, this.videoId, this.playerVars)
                window.addEventListener("resize", this.onResize)
            }

            this.initPlayer(clientWidth, playerHeight, this.videoId, this.playerVars)
        },
        onResize : function () {
            let playerWidth 
            const clientWidth = this.$refs.validationPlayer.clientWidth
            const playerHeight = Math.floor(Number(clientWidth) * 0.53)
            
            if(clientWidth) {
                playerWidth = Math.floor(Number(clientWidth) * 0.99)//99% of box
                $("#player").width(playerWidth)
                $("#player").height(playerHeight)
            }
        },
        changeVideo : function(videoId) {
            const {loadVideoById} = oProxy.$yApi1
            if(videoId && loadVideoById) {
                this.playerVideoId = videoId
                oProxy.$yApi1.loadVideoById({'videoId': videoId})
            }
        }
    }
  }
</script>
<style scoped>
</style>