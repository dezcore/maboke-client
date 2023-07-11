<template>
  <div>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-slide-group
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 10"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-btn
            class="ma-2"
            rounded
            :color="isSelected ? 'primary' : undefined"
            @click="toggle"
          >
            Episode{{ n }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
      <v-spacer></v-spacer>
      <SeasonMenu>
        <template #smenu="{mprops}">
          <v-btn icon v-bind="mprops">
            <v-icon>mdi-filmstrip-box-multiple</v-icon>
          </v-btn>
        </template>
      </SeasonMenu>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
  <script>
    import SeasonMenu from "@/components/menu/SeasonMenu.vue"

    export default {
      name: 'PlayerToolbar',
      props : {},
      components : {
        SeasonMenu
      },
      data: () => ({

      }),
      methods : {
      }
    }
  </script>
  
  <style scoped>
  </style>
  