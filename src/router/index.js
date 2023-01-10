import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Profile from '../pages/Profile.vue';
import LineSetup from '../pages/LineSetup.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: '/signin'
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
        },
        {
            path: "/lineSetup",
            name: "lineSetup",
            component: LineSetup,
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