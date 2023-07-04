<template>
  <div>
    <v-menu 
      width="300" 
      transition="slide-x-transition"
      :close-on-content-click="false"
      location="start"
      class="pa-0 ma-0 searchdiv"
    >  
          <div>
            <v-autocomplete
              v-model="select"
              v-model:search="search"
              hide-details
              single-line
              hide-no-data
              :items="items"
              menu-icon=""
              density="compact"
              variant="underlined"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              rounded
              clearable
              class="pa-0 ma-0 mt-0"
            ></v-autocomplete>
          </div>
       

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
    </v-menu>
  </div>
</template>

<script>
import { mergeProps } from 'vue'
import {useGlobalStore} from '@/store'
//v-menu > .v-overlay__content
export default {
  name: 'SearchMenu',
  props : {},
  watch : {
    search : function(search) {
    const globalStore  = useGlobalStore()
    globalStore.setSearch(search)
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
.searchdiv .v-overlay__content {
    top: auto !important;
  }

</style>
