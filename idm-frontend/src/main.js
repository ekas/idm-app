import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

import { createApp } from 'vue'
import App from './App.vue'

import 'primeicons/primeicons.css'
import '@/assets/main.css'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(ToastService)
app.mount('#app')
