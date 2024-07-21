<script setup>
import {ref } from "vue"
import axios from "axios"

const post = ref({
  title: "",
  body: ""
})

const submitForm = async() => {
  try {
    const response = await axios.post("/api/v1/posts",post.value)
    console.log('Response:', response);
  } catch (error) {
    console.log('Error:', error);
  }
}


</script>

<template>

  <main>
  <h1>Azure Blog</h1>
  <form @submit.prevent="submitForm">
    <label for="title" >Title</label>
    <input type="text" placeholder="Blog title" v-model="post.title">
    <label for="body">Body</label>
    <textarea name="body" id="body" v-model="post.body"></textarea>
    <button type="submit">Submit</button>
  </form>
  </main>
</template>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

button{
  background-color: blue;
  color: white;
  border: none;
  padding: 20px;
  border-radius: 30px;
}
</style>