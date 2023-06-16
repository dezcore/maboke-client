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
          @click="setLanguage(item)"
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
    
  },
  data: () => ({ 
    items: [], 
  }),
  computed : {
    getItems : function() {
      return locales.filter(locale => locale.enabled).map(lang => {
        return {
          title: lang.title,
          locale : lang.alternate || lang.locale
        }
      })
    }
  },
  methods : {
    setLanguage : function(lang) {
      if(lang) {
        //this.$i18n.global.locale.value = locale
        this.$i18n.locale = lang.locale
      }
    }
  }
}
</script>

<style>
</style>
