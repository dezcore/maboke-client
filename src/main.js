import { createApp } from 'vue'
import './style.css'
import router from './router';
import store from './store';
import App from './App.vue'
import vuetify from './plugins/vuetify';

const vue = createApp(App);

vue.use(router);
vue.use(store);
vue.use(vuetify);

// Run!
router
  .isReady()
  .then(() => {
    vue.mount('#app');
  })
  .catch(e => console.error(e));
