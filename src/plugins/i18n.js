// Imports
import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
    Object.entries(
        import.meta.glob('../i18n/messages/*.json', { eager: true }))
      .map(([key, value]) => {
        return [key.slice(key.lastIndexOf('/') + 1, -5), (value).default]
    }),
)

export default createI18n({
    legacy: false,
    locale:  'en',
    messages,
})