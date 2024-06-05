
import { createApp } from 'vue'
import App from './App.vue'
import Status from './components/Status.vue'
import Evaluation from './components/Evaluation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/status',
        component: Status
    },
    {
        path: "/",
        redirect: { path: "/evaluation"}
    },
    {
        path: '/evaluation',
        component: Evaluation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


const app = createApp(App);
app.use(router);
app.mount('#app');
