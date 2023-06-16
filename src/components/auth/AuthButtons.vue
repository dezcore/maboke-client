<template>
  <div>
    <v-toolbar dense floating color="primary" v-if="getUser">   
      <span class="white--text" @v-on:click="signOut">Logout</span>
        <v-divider class="mx-2" vertical></v-divider>
        <v-menu
          min-width="200px"
          rounded
          offset-y
         >
          <template v-slot:activator="{ on }">
            <v-btn icon  v-on="on" class="white--text">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
            <v-card>
              <v-list density="compact">
                <v-list-subheader>REPORTS</v-list-subheader>
                  <v-list-item
                    :value="item"
                    color="primary"
                  >
                    <template v-slot:prepend>
                      <v-icon icon="'mdi-account-details"></v-icon>
                    </template>
                    <v-list-item-title v-text="getUser.name"></v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    :value="item"
                    color="primary"
                    @click="signOut"
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-logout"></v-icon>
                    </template>
                    <v-list-item-title v-text="Logout"></v-list-item-title>
                  </v-list-item>
              </v-list>
            </v-card>
         </v-menu>
      </v-toolbar>
      <div v-else>   
        <span class="white--text" @v-on:click="signOut">Login</span>
        <v-btn icon class="white--text" @v-on:click="signOut">
          <v-icon> mdi-login-variant</v-icon>
        </v-btn>
      </div>
    </div>
</template>
<script>
  import {
    signOut, 
  } from "../../plugins/youtube/index"
  import apiMixin from "../../mixins/apiMixin"

  export default {
    name: 'AuthButtons',
    data: () => ({}),
    mixins : [
      apiMixin
    ],
    computed : {
      getUser() {
        let user = JSON.parse(window.localStorage.getItem('user'))
        return user && user.name ? user : null
      }
    },
    methods : {
      signOut
    }
  }
</script>
