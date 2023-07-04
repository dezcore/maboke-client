<template>
<div class="pa-4">
  <v-row>
    <template v-for="(item, index) in series" :key="item.id + index">
      <v-col
        :cols="12"
        sm="4"
        md="3"
        lg="3"
        xl="3"
        xxl="3"
        class="pa-1"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" 
            max-width="344" 
            v-bind="props"
          >
            <v-img
              :src="'https://i.ytimg.com/vi/' + item.id + '/mqdefault.jpg'"
              cover
              height="100%"
            ></v-img>
            <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
            >
              <v-card-title class="text-white">
                Test Title
              </v-card-title>

              <v-btn variant="outlined" color="white">Watch Now</v-btn>
            </v-overlay>
          </v-card>
        </v-hover>
      </v-col>
    </template>
  </v-row>
</div>
</template>
<script>
  export default {
    name: 'Movies',
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
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods : {
      handleResize : function() {
        console.log("test resize : ", window.innerWidth, ", ", window.innerHeight)
      }
    }
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
