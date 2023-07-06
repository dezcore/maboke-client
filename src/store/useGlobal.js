import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
      search : '',
      user : null,
      page : 'Home',
      loading : true,
      progress : null,
      credential : null,
      access_token: null,
    }),
    getters: {
      getPage: (state) => state.page,
      getUser: (state) => state.user,
      getSearch: (state) => state.search,
      getCredential: (state) => state.credential,
      getAccessToken: (state) => state.access_token,
    },
    actions: {
        setPage(page) {
          this.page = page
        },
        setUser(user) {
          this.user = user
        },
        setCredential(credential) {
          this.credential = credential
        },
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