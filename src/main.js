import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';

import es from './locales/es.json';
import en from './locales/en.json';
import ja from './locales/ja.json';

const messages = {es,en,ja}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages,
})

const app = createApp(App);

app.use(i18n);

app.mount('#app')
