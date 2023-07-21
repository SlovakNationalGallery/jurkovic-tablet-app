import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue"
import Catalogue from "./views/Catalogue.vue"
import Library from "./views/Library.vue"

const app = createApp(App);

const routes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
    { path: '/catalogue', component: Catalogue }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.mount('#app');
