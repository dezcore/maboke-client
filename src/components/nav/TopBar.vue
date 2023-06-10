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
            divider=""
        ></v-breadcrumbs>
      </template>
      <template v-slot:append>
        <v-btn icon="mdi-search-web"></v-btn>
        <v-btn href="/kids">Kids</v-btn>
        <v-btn icon="mdi-bell"></v-btn>
        <AuthButtons/>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot name="main"></slot>
      </v-container> 
    </v-main>
  </v-app>
</template>

<script>
import AuthButtons from "../auth/AuthButtons.vue"
//const style = computed(() => ({ maxWidth: isApi.value ? '1368px' : '960px' }))
export default {
  name: 'TopBar',
  components : {
    AuthButtons
  },
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
      {
        title: 'Shows',
        disabled: false,
        href: '/shows',
      },
      {
        title: 'Search',
        disabled: false,
        href: '/search',
      }
    ], 
  }),
}
</script>

<style>
</style>
