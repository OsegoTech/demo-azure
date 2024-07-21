import {createRouter, createWebHistory} from "vue-router"
import CreatePostForm from "@/views/CreatePostForm.vue"
import PostListview from "@/views/PostListview.vue";
import App from "@/App.vue";

const routes = [
    {
        path:"/",
        name: "home",
        component: App
    },
    {
        path:"/create-post",
        name: "create",
        component: CreatePostForm
    },
    {
        path: "/posts",
        name: "posts",
        component: PostListview
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router