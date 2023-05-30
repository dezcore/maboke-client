<template>
<TopBar  
  :showAppBar="true"
>
  <template #main>
    <div>
      <VideoCarousel 
        overlayClass="d-flex align-start flex-column"
      > 
        <template #content>
          <GendersAutocomplete/>
          <MovieCarouselOverlay/>
        </template>
      </VideoCarousel>
      <Movies/>
    </div>
  </template>
</TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  import Movies from "../components/grids/Movies.vue"
  import Parallax from "../components/image/Parallax.vue"
  import VideoCarousel from "../components/carousels/VideoCarousel.vue"
  import MovieCarouselOverlay from "../components/overlays/MovieCarouselOverlay.vue"
  import GendersAutocomplete from "../components/form/autocomplete/GendersAutocomplete.vue"
  export default {
    name: 'MoviesView',
    components : {
      TopBar,
      Movies,
      Parallax,
      VideoCarousel,
      GendersAutocomplete,
      MovieCarouselOverlay
    },
    data () {
      return {
      }
    },
    methods : {}
  }
</script>
