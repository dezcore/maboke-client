<template>
  <CatalogsTopBar :showAppBar="true">
    <template #main>
      <ValidationPage/>
    </template>
  </CatalogsTopBar>
</template>
<script>
  import CatalogsTopBar from "@/components/nav/CatalogsTopBar.vue"
  import SeriesColGrid from "@/components/grids/SeriesColGrid.vue"
  import VideoMetadata from "@/components/metadata/VideoMetada.vue"
  import VideoPreview from "@/components/metadata/VideoPreview.vue"
  import ValidationPage from "@/page/studio/ValidationPage.vue"
  
  export default {
    name: 'StudioView',
    components : {
      CatalogsTopBar,
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
