<template>
<TopBar  
  :showAppBar="true"
>
  <template #main>
    <Parallax 
      title="Movies"
    />
    <Movies/>
  </template>
</TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  import Movies from "../components/grids/Movies.vue"
  import Parallax from "../components/image/Parallax.vue"

  export default {
    name: 'MoviesView',
    components : {
      TopBar,
      Movies,
      Parallax
    },
    data () {
      return {
      }
    },
    methods : {}
  }
</script>
