import { createRouter, createWebHistory } from "vue-router";
import Index from '../pages/Index.vue';
import Profile from '../contents/Profile.vue';
import LineSetup from '../contents/LineSetup.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Index,
            children: [
                {
                    path: '/profile',
                    name: 'profile',
                    component: Profile
                },
                {
                    path: '/lineSetup',
                    name: 'lineSetup',
                    component: LineSetup,
                },
            ]
        },
        {
            path: "/signin",
            name: "signin",
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