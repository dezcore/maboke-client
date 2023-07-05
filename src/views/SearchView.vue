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
  import {useGlobalStore} from '@/store'
  import Search from "@/components/grids/Search.vue"
  export default {
    name: 'SearchView',
    components : {
      Search
    },
    watch : {
      /*search(search) {
        this.searchInput = search
        console.log("Search : ", search)
      }*/
    },
    data () {
      return {
        categories : []
      }
    },
    methods : {},
    computed : {
      search() {
        const gStore = useGlobalStore()
        return gStore.search
      },
    },
  }
</script>
