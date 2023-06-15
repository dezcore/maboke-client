<template>
  <TopBar 
    :showAppBar="true"
  >
    <template #main>
      <ValidationPage/>
    </template>
  </TopBar>
</template>
<script>
  import TopBar from "../components/nav/TopBar.vue"
  import SeriesColGrid from "../components/grids/SeriesColGrid.vue"
  import VideoMetadata from "../components/metadata/VideoMetada.vue"
  import VideoPreview from "../components/metadata/VideoPreview.vue"
  import ValidationPage from "../page/studio/ValidationPage.vue"

  export default {
    name: 'StudioView',
    components : {
      TopBar,
      SeriesColGrid,
      VideoMetadata,
      VideoPreview,
      ValidationPage
    },
    data () {
      return {}
    },
    methods : {}
  }
</script>
