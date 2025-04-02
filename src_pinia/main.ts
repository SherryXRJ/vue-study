import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'


//  创建app
const app = createApp(App)

//  创建pinia
const pinia = createPinia()
app.use(pinia)

//  挂载整个应用到app容器
app.mount('#app')