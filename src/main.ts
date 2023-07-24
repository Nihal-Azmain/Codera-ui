import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initFlowbite } from 'flowbite'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(initFlowbite)

app.mount('#app')
