<template>
    <v-row>
        <v-col cols="6">
            <div class="validationPlayer" ref="validationPlayer">
                <div id="player"></div>
            </div>
        </v-col>
        <v-col cols="6">
            <form>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            v-model="currentVideo.title"
                            label="Title"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="currentVideo.year"
                            label="Year"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox
                            v-model="selectGender"
                            :items="gender"
                            label="Genre"
                            multiple
                        ></v-combobox>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox
                            v-model="selectCountry"
                            :items="country"
                            label="Contry"
                            multiple
                        ></v-combobox>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                            label="Description"
                            no-resize
                            rows="5"
                            :model-value="currentVideo.summary"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
                <v-btn
                    class="me-4"
                    type="submit"
                >
                    Valide
                </v-btn>
                <v-btn>
                    clear
                </v-btn>
            </form>
        </v-col>
    </v-row>
</template>
<script>
import $ from "jquery"
import {loadVideo,  oProxy} from "@/plugins/youtube/iframe"

export default {
    name: 'ValidationPlayer',
    props : {
        video : {
            type : Object,
            default : ()=>{return null}
        }
    },
    watch : {
        video : function(video) {
            if(video) {
                this.currentVideo = video
                //console.log("year : ", this.currentVideo.year, this.currentVideo)
                this.changeVideo(video.img) 
            }
        }
    },
    data () {
      return {
        selectGender : null,
        selectCountry : null,
        showPlayerOverlay : null, 
        playerVideoId : "11-lpoJHu0U",
        currentVideo : {
            title : '',
            year : '',
            summary : '',
        },
        playerVars : { 
          //autoplay : 1, 
          //fs : 1,//Full screen 
          //rel: 0, 
          //mute : 0, 
          //showinfo : 0,
          //playsinline : 0,
          //modestbranding : 1,// Youtbe logo
        },
        gender : [
          "Action",
          "Animation",
          "Aventure",
          "Biopic",
          "Comédie",
          "Documentaire",
          "Drame",
          "Famille",
          "Fantastique",
          "Guerre",
          "Historique",
          "Horreur",
          "Judiciaire",
          "Musical",
          "Policier",
          "Romance",
          "Science fiction",
          "Thriller",
          "Western"
        ],
        country : [
          "France",
          "USA",
          "UK",
          "Canada"
        ],
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