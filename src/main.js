import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/style.css'
import VueAxios from 'vue-axios'
import axiosInstance from './http'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axiosInstance)
app.mount('#app')
