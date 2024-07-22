<template>
  <div class="max-w-lg mx-auto">
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <a href="#">
        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{{ post.title }}</h5>
        </a>
        <p class="font-normal text-gray-700 mb-3">{{ post.body.substring(0,20) }}</p>
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href="#">
          Read more
        </RouterLink >
        <Trash2 class="text-red-500 w-6 h-6 ml-2 cursor-pointer" @click="deletePost"/>
        </div>
      </div>
    </div>
    <p>This card component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to
      the official <a class="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
import { RouterLink } from "vue-router";
import {Trash2} from "lucide-vue-next"
defineProps({
  post: {
    type: Object,
    required: true,
  }
})

const emits = defineEmits(["deletePost"])

const deletePost = () => {
  emits("deletePost", post._id)
}

</script>

<style scoped></style>