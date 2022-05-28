import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  { path: "/", name: "index", component: () => import("./views/index.vue") },
  { path: "/cart", name: "cart", component: () => import("./views/cart.vue") },
]

export default createRouter({
  routes,
  history: createWebHistory()
})