import { createRouter, createWebHistory } from "vue-router";

import AboutUs from './pages/AboutUs.vue';
import HomePage from './pages/HomePage.vue';
import Projects from './pages/Projects.vue';
import ProjectShow from './pages/ProjectShow.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : 'homepage',
            component : HomePage,
        },
        {
            path: '/about-us',
            name : 'about',
            component : AboutUs,
        },
        {
            path: '/projects',
            name : 'projects.index',
            component : Projects,
        },
        {
            path: '/projects/:slug',
            name : 'projects.show',
            component : ProjectShow,
        },
    ]
})

export { router };