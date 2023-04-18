<template>
 <v-app>
    <v-app-bar 
      v-if="showAppBar"
      color="black"
      density="compact"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
         <v-breadcrumbs
            :items="items"
            divider=" "
        ></v-breadcrumbs>
      </template>
   
      <template v-slot:append>
        <v-btn icon="mdi-search-web"></v-btn>
        <v-btn icon="mdi-bell"></v-btn>
      </template>
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
    drawer: null,
    items: [
      {
        title: 'Accueil',
        disabled: false,
        href: '/',
      },
      {
        title: 'Series',
        disabled: false,
        href: '/serie',
      },
      {
        title: 'Films',
        disabled: false,
        href: '/film',
      },
    ], 
  }),
}
</script>

<style>
</style>
