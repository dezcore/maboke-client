<template>
 <v-app>
  <v-app-bar 
      v-if="showAppBar"
      color="black"
      density="compact"
    >
      <template v-slot:prepend>
        <router-link
          to="/"
          class="d-inline-block ms-4 me-2"
        >
          <v-img
            :key="logo"
            alt="maboke243 logo"
            src="maboke-white-logo.svg"
            :width="lgAndUp ? 120 : 34"
            class="shrink"
            :transition="false"
          />
        </router-link>
        <v-app-bar-nav-icon
          v-if="smallWindow" 
          variant="text" 
          @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-breadcrumbs
          v-else
          v-model="currentPage"
          :items="items"
          divider=""
        >
        <template v-slot:title="{ item }">
          <v-breadcrumbs-item
            :active="page === $t(item.title)" 
            active-color="#F40B0C"
          >
            {{$t(item.title)}}
          </v-breadcrumbs-item>
        </template>

      </v-breadcrumbs>
      </template>
      <SearchSmalllWindow v-if="smallWindow"/>
      <template v-slot:append>
        <SearchMenu v-if="!smallWindow">
        </SearchMenu>
        <LanguageMenu/>
        <v-hover
          v-slot="{ isHovering : hovering, props : hprops}"
        >
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props: tooltip, isActive : tIsActive}">
              <v-icon
                :color="hovering || tIsActive ? '#F40B0C' : 'white'"
                class="ma-1"
                icon="mdi-bell"
                v-bind="mergeProps(hprops, tooltip)"
                @click="()=>{}"
              ></v-icon>
            </template>
            <span>Notifications</span>
          </v-tooltip>
        </v-hover>
      </template>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list>
          <v-list-item @click.stop="drawer = !drawer">
            <template v-slot:append>
              <v-icon icon="mdi-close"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            :href="item.href"
            to=""
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
              <v-list-item-title>
                {{$t(item.title)}}
              </v-list-item-title>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <slot name="main"></slot>
      </v-container> 
    </v-main>
    <slot name="footer"></slot>
  </v-app>
</template>
<script>
import { mergeProps } from 'vue'
import {useGlobalStore} from '@/store'
import windowMixin from "@/mixins/windowMixin"
import SearchMenu from "@/components/search/SearchMenu.vue"
import LanguageMenu from "@/components/menu/LanguageMenu.vue"
import SearchSmalllWindow from "@/components/search/SearchSmallWindow.vue"

export default {
  name: 'TopBar',
  components : {
    SearchMenu,
    LanguageMenu,
    SearchSmalllWindow
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
  data () {
    return {
      drawer: null,
      drawer: false,
      lgAndUp: true,
      currentPage:"Home",
      logo : 'maboke243-logo',
      items: [
        {
          title: "api-header.home",
          disabled: false,
          href: '#/',
          icon: 'mdi-home'
        },
        {
          title: "api-header.series",
          disabled: false,
          href: '#/serie',
          icon: 'mdi-multimedia'
        },
        {
          title: "api-header.movies",
          disabled: false,
          href: '#/movie',
          icon: 'mdi-filmstrip'
        },
        {
          title: "api-header.shows",
          disabled: false,
          href: '#/shows',
          icon: 'mdi-drama-masks'
        },
        {
          title: "api-header.kids",
          disabled: false,
          href:  '#/kids',
          icon: 'mdi-teddy-bear'
        }
      ],
      windowCode : "md" 
    }
  },
  mixins: [
    windowMixin
  ],
  computed : {
    smallWindow : function() {
      return this.windowCode === 'xs' || this.windowCode === 'sm'
    },
    page() {
      const gStore = useGlobalStore()
      return gStore.page
    },
    base : function() {
      return import.meta.env.BASE_URL
    }
  },
  methods : {
    mergeProps,
  }
}
</script>

<style>
</style>
