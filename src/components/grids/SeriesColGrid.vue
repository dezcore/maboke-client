<template>
<div>
    <v-card class="overflow-auto">
        <v-container fluid>
            <v-row dense>
                <v-col
                  v-for="(item, index) in  series"
                  :key="item.id + index"
                  :cols="3"
                >
                  <v-card :href="'/player?videoId=' + item.id">
                      <v-img
                        :src="'https://img.youtube.com/vi/' + item.id + '/hqdefault.jpg'"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        @click="()=>{}"
                        height="200px"
                    >
                    </v-img>
                  </v-card>
                </v-col>
            </v-row>
        </v-container>
  </v-card>
</div>
</template>
<script>
  export default {
    name: 'SeriesColGrid',
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
            id : 'v7CrTuVxHSQ',
            views : 28,
            title : 'title',
            description : '',
            duration : '28:28',
            src : 'https://i.ytimg.com/vi/b6gd8H1F1Cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByg8QMP8mFroTA8ylmt3Nv-SVGsA',
            publishedAt : '28/03/2023',
            channelTitle : 'channelTitle'
          },
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
