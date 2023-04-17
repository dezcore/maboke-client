<template>
 <v-app>
    <v-system-bar v-if="showSystemBar">
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
    <v-app-bar v-if=" showAppBar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>
    <v-main>
        <slot name="main"></slot> 
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'TopBar',
    props : {
        title : {
            type : String,
            default : ()=>{return ''}
        },
        showAppBar : {
            type : Boolean,
            default : ()=>{return false}
        },
        showSystemBar : {
            type : Boolean,
            default : ()=>{return false}
        }
    },
    data: () => ({ 
        drawer: null 
    }),
  }
</script>

<style>
</style>
