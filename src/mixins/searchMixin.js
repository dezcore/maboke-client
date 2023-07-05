import {useGlobalStore} from '@/store'

export default {
  data: () => ({
    items: [], 
    search: null,
    select: null,
  }),
  watch : {
    search : function(search) {
      console.log("search : ", search)
      const globalStore  = useGlobalStore()
      globalStore.setSearch(search)
   } 
  },
  methods : {

  }
}