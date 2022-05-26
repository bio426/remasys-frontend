import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
  {path: "/", name: "index", component: ()=>import("./views/index.vue")},
  {path: "/test", name: "test", component: ()=>import("./views/test.vue")}
]

export default createRouter({
  routes,
  history: createWebHistory()
})