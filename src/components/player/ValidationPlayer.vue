<template>
    <v-row>
        <v-col cols="6">
            <div class="validationPlayer" ref="validationPlayer">
                <div id="player"></div>
            </div>
        </v-col>
        <v-col cols="6">
            <ValidationForm 
                :video="video"
            />
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
        initPlayer : function(videoId, playerVars) {
            $(document).ready(function() {
                $.getScript("https://www.youtube.com/iframe_api", function() {
                    this.playerVideoId = videoId ? videoId : this.playerVideoId
                    loadVideo(null, null, null, this.playerVideoId, playerVars)
                })
            })
        },
        bindPlayer : function() {
            this.initPlayer(this.videoId, this.playerVars)
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