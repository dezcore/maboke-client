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
          :key=" 'categorie'+index"
        >
          <div class="text-h6 mb-2 text-left">
            {{name}} {{ $t("breakpoints") }}
          </div>
          <Videos/>
        </v-card-text>
      </div>
    </template>
    <template #footer>
      <Footer>
      </Footer>
    </template>
  </TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  import Videos from "../components/grids/Videos.vue"
  import Footer from "@/components/footer/Footer.vue"
  import VideoCarousel from "../components/carousels/VideoCarousel.vue"
  import HomeCarouselOverlay from "../components/overlays/HomeCarouselOverlay.vue"

  export default {
    name: 'HomeView',
    components : {
      TopBar,
      Videos,
      Footer,
      VideoCarousel,
      HomeCarouselOverlay
    },
    data () {
      return {
        categories : [
          {
            name : "Histoires et talents",
            videos : [

            ]
          },
          {
            name : "Notre sélection pour vous",
            videos : [

            ]
          },
          {
            name : "Nouveautés",
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
