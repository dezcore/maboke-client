<template>
 <v-app>
  <v-app-bar 
      v-if="showAppBar"
      color="black"
      density="compact"
    >
      <template v-slot:prepend>
        <router-link
          to="/config"
          class="d-inline-block ml-0"
        >
          <v-img
            :key="logo"
            alt="maboke243 logo"
            src="img/maboke-white-logo.svg"
            :width="lgAndUp ? 120 : 34"
            class="shrink"
            :transition="false"
          />
        </router-link>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          variant="text" 
          :to="item.href"
          :color="$t(page) === $t(item.title) ? '#F40B0C' : '#ffffff'"
        >
          {{$t(item.title)}}
        </v-btn>
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

import {useGlobalStore} from '@/store'
import AuthButtons from "@/components/auth/AuthButtons.vue"
import SearchMenu from "@/components/search/SearchMenu.vue"
import LanguageMenu from "@/components/menu/LanguageMenu.vue"

export default {
  name: 'ConfigTopBar',
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
    lgAndUp: true,
    logo : 'maboke243-logo',
    items: [
      {
        title: "api-header.confighome",
        disabled: false,
        href: '/config',
      },
      {
        title: "api-header.configvalidation",
        disabled: false,
        href: '/config/validation',
      },
      {
        title: "api-header.configseries",
        disabled: false,
        href: '/config/serie',
      },
      {
        title: "api-header.configmovies",
        disabled: false,
        href: '/config/movie'
      },
      {
        title:  "api-header.configshows",
        disabled: false,
        href: '/config/show'
      }
    ], 
  }),
  computed : {
    page() {
      const gStore = useGlobalStore()
      let page = gStore.page.toLowerCase()
      let res = 'api-header.'+page
      return res
    }
  }
}
</script>

<style>
</style>
