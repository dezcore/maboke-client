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
          <GendersAutocomplete 
            v-if="!hideGenders"
          />
          <MovieCarouselOverlay/>
        </template>
      </VideoCarousel>
      <v-card-text 
        v-for="({name}, index) in categories" 
        :key="name + index"
      >
        <h2 class="text-h6 mb-2 text-left">
          {{name}}
        </h2>
        <Movies/>
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
  import windowMixin from "@/mixins/windowMixin"
  import SearchView from "@/views/SearchView.vue"
  import TopBar from "@/components/nav/TopBar.vue"
  import Movies from "@/components/grids/Movies.vue"
  import Footer from "@/components/footer/Footer.vue"
  import Parallax from "@/components/image/Parallax.vue"
  import VideoCarousel from "@/components/carousels/VideoCarousel.vue"
  import MovieCarouselOverlay from "@/components/overlays/MovieCarouselOverlay.vue"
  import GendersAutocomplete from "@/components/form/autocomplete/GendersAutocomplete.vue"
  export default {
    name: 'MoviesView',
    components : {
      TopBar,
      Movies,
      Footer,
      Parallax,
      SearchView,
      VideoCarousel,
      GendersAutocomplete,
      MovieCarouselOverlay
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
          }
        ]
      }
    },
    mixins: [
      windowMixin
    ],
    computed : {
      hideGenders : function() {
        let res = false

        if(this.windowCode === "xs" || this.windowCode === "sm")
          res = true

        return res
      },
      search() {
        const gStore = useGlobalStore()
        return gStore.search
      }
    },
    methods : {}
  }
</script>
