import { createI18n } from 'vue-i18n';
import fr from "./fr.js"
import nl from "./nl.js"
import en from "./en.js"

const messages = {fr,nl,en}

const i18n = createI18n({
  legacy: false,
    locale: 'fr',
    messages
  })


export default i18n;