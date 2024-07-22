<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
  <div class="container mx-auto py-8 px-4">
    <div>
      <RouterLink to="/" class="text-4xl font-bold text-center text-blue-600 mb-6">App Spaces Azure</RouterLink>
      <div class="flex justify-center space-x-4">
        <RouterLink :to="{ name: 'create' }"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Create
        </RouterLink>
        <RouterLink :to="{ name: 'posts' }"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Posts
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>

</template>

<style scoped></style>