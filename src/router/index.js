import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Index from '../pages/Index.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: { name: "signin" }
        },
        {
            path: "/index",
            name: "index",
            component: Index,
        },
        {
            path: "/signin",
            name: "signin",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Signin
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        },
    ],
});

export default router;