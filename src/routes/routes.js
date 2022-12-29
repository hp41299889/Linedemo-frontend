import { createRouter, createWebHistory } from "vue-router";
import Index from '../pages/Index.vue';
import Register from '../pages/Register.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/register', component: Register }
    ],
});