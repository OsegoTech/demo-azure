<template>
    <div >
        <PostCard v-for="post in posts" :post="post" :key="post._id"/>
    </div>
</template>

<script setup>
import PostCard from "@/components/PostCard.vue"
import {ref, onMounted} from "vue"
import axios from "axios"

const posts = ref([])
const fetchPosts = async() => {
    try {
        const response = await axios.get("/api/posts")
        posts.value = response.data
    } catch (error) {
        console.log("Error fetchinig posts", error);
    }
}

onMounted(() => {
    fetchPosts()
})

</script>

<style scoped>

</style>