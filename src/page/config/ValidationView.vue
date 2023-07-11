<template>
  <ConfigTopBar :showAppBar="true">
    <template #main>
      <ValidationPage/>
    </template>
  </ConfigTopBar>
</template>
<script>
  import ConfigTopBar from "@/components/nav/ConfigTopBar.vue"
  import SeriesColGrid from "@/components/grids/SeriesColGrid.vue"
  import VideoMetadata from "@/components/metadata/VideoMetadata.vue"
  import VideoPreview from "@/components/metadata/VideoPreview.vue"
  import ValidationPage from "@/page/studio/ValidationPage.vue"
  
  export default {
    name: 'ValidationView',
    components : {
      ConfigTopBar,
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
