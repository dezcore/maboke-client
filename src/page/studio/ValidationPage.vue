<template>
  <div>
    <v-card-text>
      <h2 class="text-h6 mb-2 text-left">
        Video Validation Page
      </h2>
    </v-card-text>
    <v-card-text>
      <h2 class="text-h6 mb-2 text-left">
        Video Metadata
      </h2>
      <VideoMetadata/>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="2">
          <h2 class="text-h6 mb-2 text-left">
            Video Preview
          </h2>
          <VideoPreview/>
        </v-col>
        <v-col cols="10">
          <h2 class="text-h6 mb-2 text-left">
            Séries Grid
          </h2>
          <SeriesColGrid/>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
  import SeriesColGrid from "../../components/grids/SeriesColGrid.vue"
  import VideoMetadata from "../../components/metadata/VideoMetada.vue"
  import VideoPreview from "../../components/metadata/VideoPreview.vue"

  export default {
    name: 'ValidationPage',
    components : {
      SeriesColGrid,
      VideoMetadata,
      VideoPreview
    },
    data () {
      return {}
    },
    methods : {}
  }
</script>
