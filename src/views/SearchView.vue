<template>
  <div>
    <v-card-text >
      <h2 class="text-h6 mb-2 text-left">
        Search
      </h2>
      <Search/>
    </v-card-text>
  </div>
</template>
<script>
  import Search from "../components/grids/Search.vue"
  export default {
    name: 'SearchView',
    components : {
      Search
    },
    props : {
      search : {
        type : String,
        default : ()=>{return ""}
      }
    },
    data () {
      return {
        categories : []
      }
    },
    methods : {}
  }
</script>
