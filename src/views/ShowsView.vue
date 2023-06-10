<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <div>
        <VideoCarousel>
          <template #content>
            <HomeCarouselOverlay/>
          </template>
        </VideoCarousel>
        <v-card-text 
          v-for="({name}, index) in categories" 
          :key="name + index"
        >
          <h2 class="text-h6 mb-2 text-left">
            {{name}}
          </h2>
          <Videos/>
        </v-card-text>
      </div>
    </template>
  </TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  import Videos from "../components/grids/Videos.vue"
  import VideoCarousel from "../components/carousels/VideoCarousel.vue"
  import HomeCarouselOverlay from "../components/overlays/HomeCarouselOverlay.vue"

  export default {
    name: 'ShowsView',
    components : {
      TopBar,
      Videos,
      VideoCarousel,
      HomeCarouselOverlay
    },
    mounted() {
      console.log("test home")
    },
    data () {
      return {
        categories : [
          {
            name : "Tv shows",
            videos : [

            ]
          },
          {
            name : "Talk shows",
            videos : [

            ]
          },
          {
            name : "Comedy club",
            videos : [

            ]
          },
          {
            name : "Appreciés sur Maboke",
            videos : [

            ]
          },
          {
            name : "Revoir",
            videos : [

            ]
          },
          {
            name : "Films et séries",
            videos : [

            ]
          },
          {
            name : "Séries internationales",
            videos : [
              
            ]
          },
          {
            name : "Seulement sur maboke",
            videos : [
              
            ]
          },
          {
            name : "Top 10 des films",
            videos : [
              
            ]
          },
          {
            name : "Ajouts des x mois",
            videos : [
              
            ]
          },
          {
            name : "Tendances acteulles",
            videos : [
              
            ]
          },
          {
            name : "À regarder ce week-end",
            videos : [
              
            ]
          }
        ]
      }
    },
    methods : {}
  }
</script>
