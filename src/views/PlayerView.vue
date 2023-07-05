<template>
  <TopBar :showAppBar="true">
    <template #main>
      <Player/>
    </template>
    <template #footer>
      <Footer>
      </Footer>
    </template>
  </TopBar>
</template>
<script>
  import Player from "../components/player/Player.vue"
  import Footer from "@/components/footer/Footer.vue"
  import TopBar from "../components/nav/TopBar.vue"

  export default {
    name: 'PlayerView',
    components : {
      TopBar,
      Footer,
      Player
    },
    data () {
      return {
      }
    },
    methods : {}
  }
</script>
