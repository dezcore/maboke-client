<template>
<div>
  <v-card>
    <v-img
      :src="img"
      height="100%"
      cover
      class="bg-grey-lighten-2"
    ></v-img>
     <v-card-title class="text-h6">
      height with cover
    </v-card-title>
    <v-card-actions>
      <a>
        <v-btn :href="href" icon="mdi-play" size="x-large"></v-btn>
      </a>
      <v-btn icon="mdi-plus" size="x-large"></v-btn>
      <v-list-item-title>Evan You</v-list-item-title>
      <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
    </v-card-actions>
  </v-card>
</div>
</template>
<script>
  export default {
    name: 'VideoDescription',
    props : {
      img : {
        type : String,
        default : ()=>{return "https://picsum.photos/350/165?random" }
      },
      href : {
        type : String,
        default : ()=>{return "/" }
      }
    },
    data: () => ({})
  }
</script>

<style scoped>
</style>
