<template>
  <div>
    <v-card flat>
      <v-container fluid>
        <v-row class="child-flex">
          <div>
            <v-toolbar>
              <v-btn
                icon
                class="hidden-xs-only"
              >
                <v-icon @click="goBack">mdi-arrow-left</v-icon>
              </v-btn>
            </v-toolbar>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </div>
  </template>
  <script>
    export default {
      name: 'PlayerToolbar',
      props : {},
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
  