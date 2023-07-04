<template>
<TopBar 
  :showAppBar="true"
>
  <template #main>
    <Parallax 
      title="Series"
    />
    <Series/>
  </template>
  <template #footer>
    <Footer>
    </Footer>
  </template>
</TopBar>
</template>
<script>
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
      Parallax
    },
    data () {
      return {}
    },
    mounted() {
        console.log("test mounted")
    },
    methods : {}
  }
</script>
