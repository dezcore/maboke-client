import AuthView from '@/views/AuthView.vue'
import HomeView from  "@/views/HomeView.vue"
import KidsView from '@/views/KidsView.vue'
import ShowsView from '@/views/ShowsView.vue'
import MoviesView from '@/views/MoviesView.vue'
import SeriesView from '@/views/SeriesView.vue'
import PlayerView from '@/views/PlayerView.vue'
import StudioView from '@/views/StudioView.vue'

import Page404 from "@/views/404.vue"
import FaqView from "@/page/footer/FaqView.vue"
import AboutUsView from "@/page/footer/AboutUsView.vue"
import PrivacyPolicyView from "@/page/footer/PrivacyPolicyView.vue"
import CatalogsHomeView from "@/page/catalogs/CatalogsHomeView.vue"
import ContentRemovalView from "@/page/footer/ContentRemovalView.vue"
import CatalogsMovieView from "@/page/catalogs/CatalogsMovieView.vue"
import CatalogsSerieView from "@/page/catalogs/CatalogsSerieView.vue"
import CatalogsShowsView from "@/page/catalogs/CatalogsShowsView.vue"

import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { nextTick } from 'vue';
import {useGlobalStore} from '@/store'

const routes = [
    { 
      path: '/', 
      name: 'Home',
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
      path: '/faq',
      name: 'FAQ',
      component : FaqView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/about',
      name: 'About',
      component : AboutUsView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/privacy',
      name: 'Privacy',
      component : PrivacyPolicyView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/removal',
      name: 'Removal',
      component : ContentRemovalView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/config',
      name: 'Configuration',
      component : CatalogsHomeView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/config/validation',
      name: 'ConfigValidation',
      component : StudioView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/config/serie',
      name: 'ConfigSerie',
      component : CatalogsSerieView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/config/movie',
      name: 'ConfigMovie',
      component : CatalogsMovieView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
      path: '/config/show',
      name: 'ConfigShow',
      component : CatalogsShowsView,
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
      path: '/movie',
      name: 'Movies',
      component : MoviesView,
      meta: {
        isAuthenticated: false
      }
    },
    { 
        path: '/serie',
        name: 'Series',
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
      path: "/:pathMatch(.*)*",
      name: '404',
      component : Page404,
      meta: {
        isAuthenticated: false
      }
    }
]

const router = createRouter({
  base: import.meta.env.BASE_URL,
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

router.beforeEach(async (to, from, next) => {
  const globalStore = useGlobalStore();
  const tokens = JSON.parse(window.localStorage.getItem("tokens"))
  const user = JSON.parse(window.localStorage.getItem('user'))

  if(to)
    globalStore.setPage(to.name)

  if(window && to.name.includes("Config") && (tokens === null || tokens === 'null')) {
    next({ name: 'Auth' })
  } else {
    if(user)
      globalStore.setUser(user)

    if(globalStore.getAccessToken === null && tokens)
      globalStore.setAccessToken(tokens)

    await nextTick()
    next();
  }
})

router.afterEach(() => {
  const globalStore = useGlobalStore();
  globalStore.setLoading(false);
  //console.log("router after")
})

export default router