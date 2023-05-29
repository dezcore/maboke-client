<template>
<div>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    :show-arrows="false"
    id="dynamic_carousel"
    ref="dynamic_carousel"
  >
    <v-carousel-item>
      <v-sheet
        color="indigo"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <CarouselPlayer/>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</div>
</template>
<script>
  import CarouselPlayer from "./CarouselPlayer.vue"

  export default {
    name: 'VideoCarousel',
    components : {
      CarouselPlayer
    },
    data () {
      return {
        videoId : "",
        colors: [
          'indigo',
          'warning',
          'pink darken-2'
        ],
        slides: [
          'First',
          'Second',
          'Third'
        ]
      }
    },
    methods : {}
  }
</script>

<style scoped>
</style>
