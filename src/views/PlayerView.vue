<template>
  <div>
    <Player/>
  </div>
</template>
<script>
  import Player from "../components/Player.vue"

  export default {
    name: 'PlayerView',
    components : {
      Player
    },
    data () {
      return {
      }
    },
    mounted() {
      console.log("test playerView")
    },
    methods : {}
  }
</script>
