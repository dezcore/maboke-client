<template>
<div class="pa-4">
  <v-row>
    <template v-for="(item, index) in series" :key="item.title + index">
      <v-col :cols="3" class="pa-1">
        <v-img
          :src="'https://img.youtube.com/vi/' + item.videoId + '/hqdefault.jpg'"
          cover
          height="100%"
        ></v-img>
      </v-col>
    </template>
  </v-row>
</div>
</template>
<script>

export default {
  name: 'Search',
  props : {},
  watch : {},
  data () {
    return {
      series : [
        {
          title : "CAMARADE DOUBLE FACE 10 l FILM CONGOLAIS I NOUVEAUTÉ 2023",
          videoId : "0FMSvEtisd8"
        },
        {
          title : "CAMARADE DOUBLE FACE 9 l FILM CONGOLAIS I NOUVEAUTÉ 2023",
          videoId : "F8PgfovQOj0"
        },
        {
          title: "LES DEUX SOEURS ep.1/ nouveau film congolais 2023 / willy mambu officiel / WM",
          videoId: "oHG9rTJ8O58"
        },
      ]
    }
  },
  methods : {}
}
</script>
<style scoped>
</style>