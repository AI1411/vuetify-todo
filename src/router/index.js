import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "@/views/Todo";
import About from "@/views/About";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
    next()
});

export default router
