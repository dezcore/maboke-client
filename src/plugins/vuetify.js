import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';

import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify'


export default createVuetify({
    components: {
        // ...labs,
    },
    // Icon Fonts
    // https://next.vuetifyjs.com/en/features/icon-fonts/
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    }
})