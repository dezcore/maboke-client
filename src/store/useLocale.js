import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', {
    state: () => ({
      locale : 'en'
    }),
    getters: {
      getLocale: (state) => state.locale,
    },
    actions: {
        setLocale(locale) {
          this.locale = locale
        }
    }
  })