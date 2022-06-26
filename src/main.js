  import { createApp } from 'vue'
  import { createRouter, createWebHistory} from 'vue-router'
  import App from './App.vue'
  import "./assets/style.css"

  import AppHome from './pages/AppHome.vue'
  import AppAbout from './pages/AppAbout.vue'

  
const routes = [
    { path: '/', component: AppHome },
    { path: '/about', component: AppAbout },
  ]
    const router = createRouter({
      history: createWebHistory(),
      linkActiveClass: 'active',
      routes, 
    })
  
  
  createApp(App).use(router).mount('#app')
  
