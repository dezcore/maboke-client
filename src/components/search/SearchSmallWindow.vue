<template>
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
    :auto-select-first="true"
    rounded
    clearable
    class="pa-0 ma-0 mt-0"
  ></v-autocomplete>

</template>

<script>
import searchMixin from '@/mixins/searchMixin';

export default {
  name: 'SearchSmalllWindow',
  data: () => ({}),
  mixins : [
    searchMixin
  ],
  methods : {
  }
}
</script>
<style>
</style>
