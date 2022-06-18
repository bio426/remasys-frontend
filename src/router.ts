import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{ path: "/", name: "index", component: () => import("./views/index.vue") },
	{ path: "/cart", name: "cart", component: () => import("./views/cart.vue") },
	{
		path: "/register",
		name: "register",
		component: () => import("./views/register.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("./views/login.vue"),
	},
	{
		path: "/user",
		name: "user",
		component: () => import("./views/user.vue"),
	},
	{
		path: "/client",
		name: "client",
		component: () => import("./views/client.vue"),
	},
	{
		path: "/confirm",
		name: "confirm",
		component: () => import("./views/confirm.vue"),
	},
]

export default createRouter({
	routes,
	history: createWebHistory(),
})
