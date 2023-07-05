<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <slot name="smenu" :mprops="props"></slot>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
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
export default {
  name: 'SeasonMenu',
  props : {},
  data: () => ({ 
    items: [
      {
        title : "test1"
      },
      {
        title : "test2"
      },
      {
        title : "test3"
      }
    ], 
  }),
  methods : {}
}
</script>

<style>
</style>
