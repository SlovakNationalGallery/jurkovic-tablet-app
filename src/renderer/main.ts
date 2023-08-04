import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./views/Home.vue"
import Catalogue from "./views/Catalogue.vue"
import Library from "./views/Library.vue"
import ArtworkDetail from './views/ArtworkDetail.vue'
import PublicationDetail from './views/PublicationDetail.vue'
import LoadScript from 'vue-plugin-load-script';

const app = createApp(App);

const routes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
    { path: '/catalogue', component: Catalogue },
    { path: '/detail/:index', component: ArtworkDetail},
    { path: '/publication/:index', component: PublicationDetail}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

app.use(router)
app.use(LoadScript)
app.mount('#app');
