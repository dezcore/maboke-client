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
            src="/maboke-white-logo.svg"
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
          :items="items"
          divider=""
        >
        <template v-slot:title="{ item }">
          {{$t(item.title)}}
        </template>

      </v-breadcrumbs>
      </template>
      <SearchSmalllWindow v-if="smallWindow"/>
      <template v-slot:append>
        <SearchMenu v-if="!smallWindow">
        </SearchMenu>
        <a href="/"><v-icon
          color="white"
          class="ma-1"
          icon="mdi-bell"
        ></v-icon></a>
        <LanguageMenu/>
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
      logo : 'maboke243-logo',
      items: [
        {
          title: "api-header.home",
          disabled: false,
          href: '/',
          icon: 'mdi-home'
        },
        {
          title: "api-header.series",
          disabled: false,
          href: '/serie',
          icon: 'mdi-multimedia'
        },
        {
          title: "api-header.movies",
          disabled: false,
          href: '/film',
          icon: 'mdi-filmstrip'
        },
        {
          title: "api-header.shows",
          disabled: false,
          href: '/shows',
          icon: 'mdi-drama-masks'
        },
        {
          title: "api-header.kids",
          disabled: false,
          href: '/kids',
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
    }
  },
  methods : {}
}
</script>

<style>
.v-breadcrumbs:deep(a) {
    color: red;
}
</style>
