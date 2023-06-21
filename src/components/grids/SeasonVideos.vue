<template>
<div>
  <v-slide-group
      show-arrows
    >
      <v-slide-group-item
        v-for="(item, index) in currentSeasons"
          :key="item.id + index"
        >
        <v-card  class="pa-1">
          <v-img
            :src="'https://i.ytimg.com/vi/' + item.img + '/mqdefault.jpg'"
            cover
            width="300px"
            height="100%"
          ></v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
</div>
</template>
<script>
  export default {
    name: 'SeasonVideos',
    props : {
      seasons : {
        type : Array,
        default : ()=>{return []}
      }
    },
    watch : {
      seasons : function(seasons) {
        if(seasons) {
          this.currentSeasons = seasons
          //console.log("Watch seasons : ", seasons)
        }
      }
    },
    data () {
      return {
        overlay: false,
        currentSeasons : [],
        currentVideos : []
      }
    },
    methods : {}
  }
</script>

<style scoped>
.headerClass{
  white-space: nowrap ;
  word-break: normal;
  overflow: hidden ;
  text-overflow: ellipsis;
}
</style>
