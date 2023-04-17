<template>
  <TopBar>
    <template #main>
      <Player/>
    </template>
  </TopBar>
</template>
<script>
  import Player from "../components/Player.vue"
  import TopBar from "../components/nav/TopBar.vue"

  export default {
    name: 'PlayerView',
    components : {
      TopBar,
      Player
    },
    data () {
      return {
      }
    },
    methods : {}
  }
</script>
