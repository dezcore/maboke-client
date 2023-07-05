<template>
  <div>
    <v-toolbar>
      <v-btn
        icon
        class="hidden-xs-only"
      >
        <v-icon @click="goBack">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <SeasonMenu>
        <template #smenu="{mprops}">
          <v-btn icon v-bind="mprops">
            <v-icon>mdi-movie-roll</v-icon>
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
        goBack : function() {
          this.$router.back()//.go(-1) 
        }
      }
    }
  </script>
  
  <style scoped>
  </style>
  