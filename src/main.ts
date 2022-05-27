import { createApp } from 'vue'
import PrimeVue from "primevue/config"
import ToastService from "primevue/toastservice"

import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/md-dark-indigo/theme.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.min.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.use(router)
app.mount('#app')
