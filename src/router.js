import AuthView from './views/AuthView.vue'
import HomeView from './views/HomeView.vue'
import KidsView from './views/KidsView.vue'
import ShowsView from './views/ShowsView.vue'
import MoviesView from './views/MoviesView.vue'
import SeriesView from './views/SeriesView.vue'
import PlayerView from './views/PlayerView.vue'
import StudioView from './views/StudioView.vue'
import SearchView from './views/SearchView.vue'


import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { nextTick } from 'vue';
import {useGlobalStore} from './store'

const routes = [
    { 
      path: '/', 
      name: 'Maboke',
      component: HomeView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/login',
      name: 'Auth',
      component : AuthView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/studio',
      name: 'Studio',
      component : StudioView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/player',
      name: 'Player',
      component : PlayerView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/film',
      name: 'Film',
      component : MoviesView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
        path: '/serie',
        name: 'Serie',
        component : SeriesView,
        meta: {
          isAuthenticated: false
        }
    },
    { 
      path: '/kids',
      name: 'Kids',
      component : KidsView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/shows',
      name: 'Shows',
      component : ShowsView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/search',
      name: 'Search',
      component : SearchView,
      meta: {
        isAuthenticated: false
      }
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

router.beforeEach(async (to, from, next) => {
  const globalStore = useGlobalStore();
  //const tokens = window.localStorage.getItem("tokens")

  /*if(window && to.name === 'Studio' && (tokens === null || tokens === 'null')) {
    next({ name: 'Auth' })
  } else {
    if(globalStore.getAccessToken === undefined && tokens)
      globalStore.setAccessToken(tokens)*/

    globalStore.setLoading(true);
    await nextTick();
    next();
  //}
})

router.afterEach(() => {
  const globalStore = useGlobalStore();
  globalStore.setLoading(false);
  //console.log("router after")
})

export default router