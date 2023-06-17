//import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useGlobalStore = defineStore('global', {
    state: () => ({
      search : '',
      loading : true,
      access_token: "",
      progress : null
    }),
    getters: {
      getSearch: (state) => state.search,
      getAccessToken: (state) => state.access_token,
    },
    actions: {
        setSearch(search) {
          this.search = search
        },
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