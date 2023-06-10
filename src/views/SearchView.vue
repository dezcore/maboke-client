<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <div>
        <v-card-text >
          <h2 class="text-h6 mb-2 text-left">
            Search
          </h2>
          <Search/>
        </v-card-text>
      </div>
    </template>
  </TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  import Search from "../components/grids/Search.vue"
  export default {
    name: 'SearchView',
    components : {
      TopBar,
      Search
    },
    data () {
      return {
        categories : []
      }
    },
    methods : {}
  }
</script>
