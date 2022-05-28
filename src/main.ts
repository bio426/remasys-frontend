import { createApp } from "vue"

import App from './App.vue'
import router from './router'

import "./assets/styles/index.css"
import "css.gg/icons/all.css"

const app = createApp(App)
app.use(router)
app.mount('#app')
