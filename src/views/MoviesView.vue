<template>
<TopBar>
  <template #main>
    <v-container>
      <v-btn>
        Start
        <v-tooltip
          activator="parent"
          location="start"
        >MoviesView</v-tooltip>
      </v-btn>
    </v-container>
  </template>
</TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  export default {
    name: 'MoviesView',
    components : {
      TopBar
    },
    data () {
      return {
      }
    },
    methods : {}
  }
</script>
