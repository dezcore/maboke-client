<template>
<TopBar 
  :showAppBar="true"
>
  <template #main>
    <div v-if="search == ''">
      <Parallax 
        title="Series"
      />
      <Series/>
    </div>
    <div v-else>
      <SearchView>
      </SearchView>
    </div>
  </template>
  <template #footer>
    <Footer>
    </Footer>
  </template>
</TopBar>
</template>
<script>
  import {useGlobalStore} from '@/store'
  import SearchView from "@/views/SearchView.vue"
  import TopBar from "../components/nav/TopBar.vue"
  import Footer from "@/components/footer/Footer.vue"
  import Series from "../components/grids/Series.vue"
  import Parallax from "../components/image/Parallax.vue"
  
  export default {
    name: 'SeriesView',
    components : {
      TopBar,
      Series,
      Footer,
      Parallax,
      SearchView
    },
    data () {
      return {}
    },
    computed : {
      search() {
        const gStore = useGlobalStore()
        return gStore.search
      },
    },
    mounted() {
      console.log("test mounted")
    },
    methods : {}
  }
</script>
