//import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useGlobalStore = defineStore('global', {
    state: () => ({
      loading : true,
      access_token: "",
      progress : null
    }),
    getters: {
      getAccessToken: (state) => state.access_token,
    },
    actions: {
        setAccessToken(access_token) {
          this.access_token =access_token
        },
        setLoading(display) {
            this.loading = display;

            if(!display) {
                this.progress = null;
            }
        },
        setProgress(value) {
            this.progress = value;
            this.loading = true;
        }
    }
  })