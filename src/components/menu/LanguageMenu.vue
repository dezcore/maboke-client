<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-icon
          v-bind="props"
          color="white"
          class="ma-1"
          icon="mdi-translate"
        ></v-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in getItems"
          :key="index"
          :value="index"
          @click="setLanguage(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import {useLocaleStore, useGlobalStore} from '@/store'
import locales from '@/i18n/locales.json'

export default {
  name: 'LanguageMenu',
  props : {},
  watch : {
    locale(lang) {
      console.log("Lang : ", lang)
    },
    search(search) {
      console.log("Search : ", search)
    }
  },
  data: () => ({ 
    items: [], 
  }),
  computed : {
    locale() {
      const localeStore = useLocaleStore()
      return localeStore.locale
    },
    search() {
      const gStore = useGlobalStore()
      return gStore.search
    },
    getItems : function() {
      return locales.filter(locale => locale.enabled).map(lang => {
        return {
          title: lang.title,
          locale : lang.alternate || lang.locale
        }
      })
    },
  },
  methods : {
    setLanguage : function(lang) {
      const localeStore = useLocaleStore()
      if(lang) {
        //this.$i18n.global.locale.value = locale
        this.$i18n.locale = lang.locale
        localeStore.setLocale(lang.locale)
      }
    }
  }
}
</script>

<style>
</style>
