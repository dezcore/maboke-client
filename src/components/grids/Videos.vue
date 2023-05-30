<template>
<div>
  <v-slide-group
      show-arrows
    >
        <v-slide-group-item
          v-for="(item, index) in  series"
          class="pa-0 ma-0"
          :key="item.id + index"
        >
        <v-card  class="pa-1">
          <v-img
            :src="'https://img.youtube.com/vi/' + item.id + '/hqdefault.jpg'"
            cover
            width="300px"
            height="100%"
          ></v-img>
          

      <v-overlay
        origin="overlap"
        location="top center"
        openOnHover 
        activator="parent"
        :scrim="false"
        location-strategy="connected"
        class="align-center justify-center"
      >
      <VideoDescription 
        :img="'https://img.youtube.com/vi/' + item.id + '/hqdefault.jpg'"
        :href="'/player?videoId=' + item.id"
      />
    </v-overlay>
        </v-card>
      
      </v-slide-group-item>
      
       
    </v-slide-group>
</div>
</template>
<script>
//:href="'/player?videoId=' + item.id"
  import VideoDescription from "../cards/VideoDescription.vue"
  export default {
    name: 'Videos',
    props : {},
    watch : {},
    components : {
      VideoDescription
    },
    data () {
      return {
        overlay: false,
        series : [
            {
                id : 'b6gd8H1F1Cc',
                views : 28,
                title : 'title',
                description : '',
                duration : '28:28',
                src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
                publishedAt : '28/03/2023',
                channelTitle : 'channelTitle'
            },
             {
                id : 'v7CrTuVxHSQ',
                views : 28,
                title : 'title',
                description : '',
                duration : '28:28',
                src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
                publishedAt : '28/03/2023',
                channelTitle : 'channelTitle'
            },
             {
                id : 'LgMGStELWkM',
                views : 28,
                title : 'title',
                description : '',
                duration : '28:28',
                src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
                publishedAt : '28/03/2023',
                channelTitle : 'channelTitle'
            },
            {
                id : 'FIBE5RS1Kdk',
                views : 28,
                title : 'title',
                description : '',
                duration : '28:28',
                src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
                publishedAt : '28/03/2023',
                channelTitle : 'channelTitle'
            },
            {
                id : 'FIBE5RS1Kdk',
                views : 28,
                title : 'title',
                description : '',
                duration : '28:28',
                src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
                publishedAt : '28/03/2023',
                channelTitle : 'channelTitle'
            },
             {
                id : 'FIBE5RS1Kdk',
                views : 28,
                title : 'title',
                description : '',
                duration : '28:28',
                src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
                publishedAt : '28/03/2023',
                channelTitle : 'channelTitle'
            }
        ]
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
