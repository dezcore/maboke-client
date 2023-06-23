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
        <SearchMenu></SearchMenu>
        <LanguageMenu/>
        <AuthButtons/>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot name="main"></slot>
      </v-container> 
    </v-main>
    <slot name="footer"></slot>
  </v-app>
</template>
<script>
import AuthButtons from "@/components/auth/AuthButtons.vue"
import SearchMenu from "@/components/menu/SearchMenu.vue"
import LanguageMenu from "@/components/menu/LanguageMenu.vue"

export default {
  name: 'CatalogsTopBar',
  components : {
    SearchMenu,
    AuthButtons,
    LanguageMenu
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
        title: 'HomeConfig',
        disabled: false,
        href: '/catalogs',
      },
      {
        title: 'SeriesConfig',
        disabled: false,
        href: '/catalogs/serie',
      },
      {
        title: 'MoviesConfig',
        disabled: false,
        href: '/catalogs/movie',
      },
      {
        title: 'ShowsConfig',
        disabled: false,
        href: '/catalogs/shows'
      },
      {
        title: 'Validation',
        disabled: false,
        href: '/catalogs/validation'
      }
    ], 
  }),
}
</script>

<style>
</style>
