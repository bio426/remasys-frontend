import { createApp } from 'vue'
import PrimeVue from "primevue/config"

import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/bootstrap4-dark-blue/theme.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.min.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
