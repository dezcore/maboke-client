<template>
  <TopBar>
    <template #main>
      <div>
        <v-btn>
          Start
          <v-tooltip
            activator="parent"
            location="start"
          >HomeView</v-tooltip>
        </v-btn>
      </div>
    </template>
  </TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  export default {
    name: 'HomeView',
    components : {
      TopBar
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
