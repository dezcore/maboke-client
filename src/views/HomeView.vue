<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <div>
        <HomeCarousel/>
        <v-card-text>
          <h2 class="text-h6 mb-2 text-left">
            Films et séries
          </h2>
          <Videos/>
        </v-card-text>
        <v-card-text>
          <h2 class="text-h6 mb-2 text-left">
            Séries internationales
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
  import HomeCarousel from "../components/selection/HomeCarousel.vue"
  export default {
    name: 'HomeView',
    components : {
      TopBar,
      Videos,
      HomeCarousel
    },
    mounted() {
      console.log("test home")
    },
    data () {
      return {}
    },
    methods : {}
  }
</script>
