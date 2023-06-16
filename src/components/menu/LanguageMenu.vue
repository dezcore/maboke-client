<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-translate" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in getItems"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import locales from '@/i18n/locales.json'

export default {
  name: 'LanguageMenu',
  props : {},
  watch : {
    /*watch(() => localeStore.locale, locale => {
      i18n.global.locale.value = locale
    })*/
  },
  data: () => ({ 
    items: [], 
  }),
  computed : {
    getItems : function() {
      return locales.filter(locale => locale.enabled).map(locale => {
        return {
          title: locale.title,
          //to: route.fullPath.replace(/^\/[a-zA-Z-]+/, `/${locale.alternate || locale.locale}`),
        }
      })
    }
  }
}
</script>

<style>
</style>
