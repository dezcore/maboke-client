<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <div v-if="search == ''">
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
      <div v-else>
        <SearchView :search="searchInput">
        </SearchView>
      </div>
    </template>
    <template #footer>
      <Footer>
      </Footer>
    </template>
  </TopBar>
</template>
<script>

  import SearchView from "@/views/SearchView.vue"
  import TopBar from "@/components/nav/TopBar.vue"
  import Videos from "@/components/grids/Videos.vue"
  import Footer from "@/components/footer/Footer.vue"
  import VideoCarousel from "@/components/carousels/VideoCarousel.vue"
  import HomeCarouselOverlay from "@/components/overlays/HomeCarouselOverlay.vue"
  import {useGlobalStore} from '@/store'
  
  export default {
    name: 'HomeView',
    components : {
      TopBar,
      Videos,
      Footer,
      SearchView,
      VideoCarousel,
      HomeCarouselOverlay
    },
    watch : {
      search(search) {
        this.searchInput = search
        console.log("Search : ", search)
      }
    },
    data () {
      return {
        searchInput : '',
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
    computed : {
      search() {
        const gStore = useGlobalStore()
        return gStore.search
      },
    },
    methods : {}
  }
</script>
