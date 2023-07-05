<template>
<TopBar  
  :showAppBar="true"
>
  <template #main>
    <div v-if="search == ''">
      <VideoCarousel 
        overlayClass="d-flex align-start flex-column"
      > 
        <template #content>
          <GendersAutocomplete/>
          <MovieCarouselOverlay/>
        </template>
      </VideoCarousel>
      <KidsAvatars/>
      <v-card-text 
        v-for="({name}, index) in categories" 
        :key="name + index"
      >
        <h2 class="text-h6 mb-2 text-left">
          {{name}}
        </h2>
        <Kids/>
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
  import Kids from "@/components/grids/Kids.vue"
  import SearchView from "@/views/SearchView.vue"
  import TopBar from "@/components/nav/TopBar.vue"
  import Footer from "@/components/footer/Footer.vue"
  import KidsAvatars from "@/components/avatars/KidsAvatars.vue"
  import VideoCarousel from "@/components/carousels/VideoCarousel.vue"
  import MovieCarouselOverlay from "@/components/overlays/MovieCarouselOverlay.vue"
  import GendersAutocomplete from "@/components/form/autocomplete/GendersAutocomplete.vue"

  export default {
    name: 'KidsView',
    components : {
      Kids,
      TopBar,
      Footer,
      SearchView,
      KidsAvatars,
      VideoCarousel,
      GendersAutocomplete,
      MovieCarouselOverlay
    },
    data () {
      return {
        categories : [
          {
            name : "Charaters",
            videos : [

            ]
          },
          {
            name : "Top 10 kids movies",
            videos : [

            ]
          },
          {
            name : "Girls power",
            videos : [

            ]
          },
          {
            name : "Action",
            videos : [

            ]
          },
          {
            name : "Popular",
            videos : [

            ]
          },
          {
            name : "Spooky Stories",
            videos : [

            ]
          },
          {
            name : "Sports",
            videos : [

            ]
          },
          {
            name : "Top Picks for Kids",
            videos : [

            ]
          },
          {
            name : "Friends",
            videos : [

            ]
          },
           {
            name : "From Books",
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
