import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{ path: "/", name: "index", component: () => import("./views/index.vue") },
	{ path: "/cart", name: "cart", component: () => import("./views/cart.vue") },
	{
		path: "/auth",
		name: "auth",
		component: () => import("./views/auth.vue"),
	},
]

export default createRouter({
	routes,
	history: createWebHistory(),
})
