import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosConfig from '../axios.config'

const app = createApp(App)

app.use(router)
app.use(axiosConfig)

app.mount('#app')
