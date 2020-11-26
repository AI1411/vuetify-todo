import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "@/views/Todo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
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
