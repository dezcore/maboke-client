<template>
  <div>
    <v-toolbar color="black" v-if="user">   
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              variant="text"
              icon="mdi-account"
              v-bind="props"
            ></v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>{{user.name}}</v-list-item-title>
            </v-list-item>
            <v-list-item  @click="signOut">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
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
  } from "@/plugins/youtube/index"
  import apiMixin from "@/mixins/apiMixin"
  import {useGlobalStore} from "@/store"
  
  export default {
    name: 'AuthButtons',
    data: () => ({
      user : {
        name : 'default'
      }
    }),
    mixins : [
      apiMixin
    ],
    mounted() {
      const globalStore = useGlobalStore();
      const user = globalStore.getUser
      if(user) {
        this.user = user
      }
    },
    methods : {
      signOut
    }
  }
</script>