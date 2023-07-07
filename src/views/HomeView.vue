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
            {{ $t(name) }}
          </div>
          <Videos/>
        </v-card-text>
      </div>
      <div v-else>
        <SearchView>
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
  import {useGlobalStore} from '@/store'
  import SearchView from "@/views/SearchView.vue"
  import TopBar from "@/components/nav/TopBar.vue"
  import Videos from "@/components/grids/Videos.vue"
  import Footer from "@/components/footer/Footer.vue"
  import VideoCarousel from "@/components/carousels/VideoCarousel.vue"
  import HomeCarouselOverlay from "@/components/overlays/HomeCarouselOverlay.vue"
  
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
            name : "categories.stories-and-talents",
            videos : [

            ]
          },
          {
            name : "categories.selection-for-you",
            videos : [

            ]
          },
          {
            name : "categories.news",
            videos : [

            ]
          },
          {
            name : "categories.popular-on-maboke",
            videos : [

            ]
          },
          {
            name : "categories.see-again",
            videos : [

            ]
          },
          {
            name : "categories.movies-and-series",
            videos : [

            ]
          },
          {
            name : "categories.international-series",
            videos : [
              
            ]
          },
          {
            name : "categories.only-on-maboke",
            videos : [
              
            ]
          },
          {
            name : "categories.top-10-movies",
            videos : [
              
            ]
          },
          {
            name : "categories.additions-of-x-months",
            videos : [
              
            ]
          },
          {
            name : "categories.current-trends",
            videos : [
              
            ]
          },
          {
            name : "categories.watch-this-weekend",
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
    mounted() {
      console.log("Base : ", import.meta.env.BASE_URL)
    },
    methods : {}
  }
</script>
