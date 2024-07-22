<template>
    <div class="container mx-auto py-10">
        <main class="max-w-[600px] mx-auto bg-white shadow-lg rounded-lg">
            <h1 class="text-2xl font-bold text-center py-5">Azure Blog</h1>
            <form @submit.prevent="submitForm" class="bg-gradient-to-t from-blue-500 to-blue-300 border border-green-400 rounded-lg p-10 flex flex-col space-y-5">
                <label for="title" class="text-white font-semibold">Title</label>
                <input 
                    type="text" 
                    id="title"
                    placeholder="Blog title" 
                    v-model="post.title" 
                    class="p-2 rounded-lg border border-gray-300"
                    :disabled="isLoading"
                >
                <label for="body" class="text-white font-semibold">Body</label>
                <textarea 
                    name="body" 
                    id="body" 
                    placeholder="Write your post here..."
                    v-model="post.body" 
                    class="p-2 rounded-lg border border-gray-300 h-32"
                    :disabled="isLoading"
                ></textarea>
                <button 
                    type="submit" 
                    class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-blue-700 transition duration-300"
                    :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
                    :disabled="isLoading"
                >
                    <span v-if="!isLoading">Submit</span>
                    <span v-else>Loading...</span>
                </button>
            </form>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const post = ref({
    title: "",
    body: ""
});
const isLoading = ref(false);

const submitForm = async () => {
    isLoading.value = true;
    try {
        const response = await axios.post("/api/v1/posts", post.value);
        console.log('Response:', response);
    } catch (error) {
        console.log('Error:', error);
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
</style>
