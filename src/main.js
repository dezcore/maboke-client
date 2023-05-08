import { createApp } from 'vue'
import './style.css'
import axios from "axios"
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueForceNextTick from 'vue-force-next-tick'

const vue = createApp(App);

vue.use(VueAxios, axios)
vue.use(router);
vue.use(store);
vue.use(vuetify);
vue.use(VueForceNextTick)

// Run!
router
  .isReady()
  .then(() => {
    vue.mount('#app');
  })
  .catch(e => console.error(e));
