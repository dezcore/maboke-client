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
        >
        <template v-slot:title="{ item }">
          {{$t(item.title)}}
        </template>

      </v-breadcrumbs>
      </template>
      <template v-slot:append>        
        <SearchMenu></SearchMenu>
        <a href="/"><v-icon
          color="white"
          class="ma-1"
          icon="mdi-bell"
        ></v-icon></a>
        <LanguageMenu/>
        <v-btn href="/kids" variant="text">Kids</v-btn>
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
import SearchMenu from "@/components/menu/SearchMenu.vue"
import LanguageMenu from "@/components/menu/LanguageMenu.vue"

export default {
  name: 'TopBar',
  components : {
    SearchMenu,
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
        title: "api-header.home",
        disabled: false,
        href: '/',
      },
      {
        title: "api-header.series",
        disabled: false,
        href: '/serie',
      },
      {
        title: "api-header.movies",
        disabled: false,
        href: '/film',
      },
      {
        title: "api-header.shows",
        disabled: false,
        href: '/shows',
      }
    ], 
  }),
}
</script>

<style>
</style>
