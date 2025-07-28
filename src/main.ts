import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// Global CSS
import '@/assets/main.css'

// Bootstrap (CSS y JS)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { router } from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
