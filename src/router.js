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
  createWebHashHistory
} from 'vue-router';
import { nextTick } from 'vue';
import {useGlobalStore} from '@/store'

const routes = [
    { 
      path: '/', 
      name: 'Home',
      component: HomeView
    },
    { 
      path: '/login',
      name: 'Auth',
      component : AuthView,
    },
    { 
      path: '/faq',
      name: 'FAQ',
      component : FaqView
    },
    { 
      path: '/about',
      name: 'About',
      component : AboutUsView
    },
    { 
      path: '/privacy',
      name: 'Privacy',
      component : PrivacyPolicyView
    },
    { 
      path: '/removal',
      name: 'Removal',
      component : ContentRemovalView
    },
    { 
      path: '/config',
      name: 'Configuration',
      component : CatalogsHomeView
    },
    { 
      path: '/config/validation',
      name: 'ConfigValidation',
      component : StudioView
    },
    { 
      path: '/config/serie',
      name: 'ConfigSerie',
      component : CatalogsSerieView
    },
    { 
      path: '/config/movie',
      name: 'ConfigMovie',
      component : CatalogsMovieView
    },
    { 
      path: '/config/show',
      name: 'ConfigShow',
      component : CatalogsShowsView
    },
    { 
      path: '/player',
      name: 'Player',
      component : PlayerView
    },
    { 
      path: '/movie',
      name: 'Movies',
      component : MoviesView
    },
    { 
        path: '/serie',
        name: 'Series',
        component : SeriesView
    },
    { 
      path: '/kids',
      name: 'Kids',
      component : KidsView
    },
    { 
      path: '/shows',
      name: 'Shows',
      component : ShowsView
    },
    { 
      path: "/:pathMatch(.*)*",
      name: '404',
      component : Page404
    }
]

const router = createRouter({
  history: createWebHashHistory(), 
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