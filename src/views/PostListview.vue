<template>
    <div class="container mx-auto grid grid-cols-3">
        <PostCard v-for="post in posts" :post="post" :key="post._id" @delete="handleDelete"/>
    </div>
</template>

<script setup>
import PostCard from "@/components/PostCard.vue"
import {ref, onMounted} from "vue"
import axios from "axios"

const posts = ref([])
const fetchPosts = async() => {
    try {
        const response = await axios.get("/api/v1/posts")
        console.log(response.data);
        posts.value = response.data.data
    } catch (error) {
        console.log("Error fetchinig posts", error);
    }
}

const handleDelete = async () => {
    try {
        await axios.delete(`http://localhost:8080/api/v1/posts/${postId}`)
        fetchPosts()
    } catch (error) {
        console.log("Error deleting post", error);
    }
}

onMounted(() => {
    fetchPosts()
})

console.log(posts);

</script>

<style scoped>

</style>