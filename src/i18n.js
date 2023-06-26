import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'
import global_fr from './translations/fr/global.json'

// the translations
const resources = {
  en: {
    translation: global_en
  },
  es: {
    translation: global_es
  },
  fr: {
    translation: global_fr
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // debug: true,
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
