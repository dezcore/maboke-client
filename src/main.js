import { createApp } from 'vue'
import './style.css'
import axios from "axios"
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import VueForceNextTick from 'vue-force-next-tick'

/** Register Vue */
const vue = createApp(App);

vue.use(VueAxios, axios)
vue.use(router);
vue.use(store);
vue.use(i18n);
vue.use(vuetify);
vue.use(VueForceNextTick)

// Run!
router
  .isReady()
  .then(() => {
    vue.mount('#app');
  })
  .catch(e => console.error(e));
