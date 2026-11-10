import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { i18n } from './i18n'
import { vReveal } from './lib/reveal'
import './style.css'

document.documentElement.lang = i18n.global.locale.value
createApp(App).directive('reveal', vReveal).use(i18n).use(router).mount('#app')
