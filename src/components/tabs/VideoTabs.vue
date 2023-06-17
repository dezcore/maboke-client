<template>
   <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab 
        v-for="(item, index) in tabs" 
        :key="'tab' + index"
        :value="item.id"
      >
        {{item.title}}
      </v-tab>    
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item 
        v-for="(item, index) in tabs" 
          :key="index" 
          :value="item.id"
        >
        <v-container fluid>
          <slot :name="item.title"></slot>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
  export default {
    name: 'VideoTabs',
    props : {
      tabs : {
        type : Array,
        default : ()=>{
          return [
            {
              id : "1",
              title : "Landscape"
            },
            {
              id : "2",
              title : "City"
            },
            {
              id : "3",
              title : "City"
            }
          ]
        }
      }
    },
    data () {
      return {
        tab: null,
      }
    },
    methods : {}
  }
</script>

<style scoped>
</style>
