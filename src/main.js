import { createApp } from 'vue'
import App from './App.vue'

import Index from './pages/Index.vue'
import Register from './pages/Register.vue'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import './assets/main.css'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: App },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

createApp()
    .use(router)
    .mount('#app')
