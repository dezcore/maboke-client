import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';

import {useGlobalStore} from "./useGlobal";

/** Pinia Store */
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export {useGlobalStore};