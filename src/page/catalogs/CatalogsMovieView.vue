<template>
  <CatalogsTopBar :showAppBar="true">
    <template #main>
      <div>
        <iframe id="inlineFrameExample"
          title="Inline Frame Example"
          style="width: 0; min-width: 100% !important;" height="500"
          src="http://localhost:8080">
        </iframe>
      </div>
    </template>
  </CatalogsTopBar>
</template>
<script>
import CatalogsTopBar from "@/components/nav/CatalogsTopBar.vue"

export default {
  name: 'CatalogsMovieView',
  components : {
    CatalogsTopBar
  },
  data: () => ({ 
    items: [], 
  })
}
</script>
<style>
</style>