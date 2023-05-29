<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <div>
        <VideoCarousel/>
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
  //import HomeCarousel from "../components/selection/HomeCarousel.vue"
  import VideoCarousel from "../components/selection/VideoCarousel.vue"
  export default {
    name: 'HomeView',
    components : {
      TopBar,
      Videos,
      VideoCarousel
      //HomeCarousel
    },
    mounted() {
      console.log("test home")
    },
    data () {
      return {
        categories : [
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
