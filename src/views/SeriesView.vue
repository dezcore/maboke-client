<template>
<TopBar>
  <template #main>
    <v-container>
      <v-btn>
        Start
        <v-tooltip
          activator="parent"
          location="start"
        >SeriesView</v-tooltip>
      </v-btn>
    </v-container>
  </template>
</TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"

  export default {
    name: 'SeriesView',
    components : {
      TopBar
    },
    data () {
      return {}
    },
    methods : {}
  }
</script>
