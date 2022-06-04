import App from '@/App.vue'
import '@/assets/index.css'
import { router } from '@/router'
import { createPinia } from 'pinia'
import piniaPersisted from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)

const store = createPinia()
store.use(piniaPersisted)
app.use(store)

app.mount('#app')
