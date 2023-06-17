<template>
  <div>
    <v-menu 
      width="300" 
      transition="slide-x-transition"
      :close-on-content-click="false"
      location="start"
      class="pa-0 ma-0 mt-0"
    >  
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props: tooltip }">
          <v-icon
            color="white"
            class="ma-1"
            icon="mdi-search-web"
            v-bind="mergeProps(menu, tooltip)"

          ></v-icon>
          </template>
          <span>Search</span>
        </v-tooltip>
        </template>
        
      <div>
        <v-autocomplete
          v-model="select"
          v-model:search="search"
          :items="items"
          density="comfortable"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          rounded
          variant="underlined"
          clearable
        ></v-autocomplete>

      </div>
    </v-menu>
  </div>
</template>

<script>
import { mergeProps } from 'vue'

export default {
  name: 'SearchMenu',
  props : {},
  watch : {
    search : function(search) {
    if(search !== '') {
      console.log("Values : ", search)
    }
   } 
  },
  data: () => ({ 
    items: [], 
    search: null,
    select: null,
  }),
  computed : {
  },
  methods : {
    mergeProps,
  }
}
</script>

<style>
</style>
