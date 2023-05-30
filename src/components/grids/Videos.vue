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
      <v-card
        color="grey-lighten-1"
        :class="['ma-1', selectedClass]"
        :href="'/player?videoId=' + item.id"
      >

       <v-img
          class="bg-white"
          width="250px"
          max-height="150"
          :aspect-ratio="1"
          :src="'https://img.youtube.com/vi/' + item.id + '/hqdefault.jpg'"
          cover
        ></v-img>
      </v-card>
      </v-slide-group-item>
    </v-slide-group>
</div>
</template>
<script>
  export default {
    name: 'Videos',
    props : {},
    watch : {},
    data () {
      return {
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

<style>
.headerClass{
  white-space: nowrap ;
  word-break: normal;
  overflow: hidden ;
  text-overflow: ellipsis;
}

</style>
