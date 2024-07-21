<template>
    <div>
       <h1>{{ post.title }}</h1> 
       <p>{{ post.body }}</p>
       <p>{{ post.author }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    post: {
    type: Object,
    required: true,
    // default: () => ({
    //   title: '',
    //   body: '',
    //   author: ''
    // })
  }
})
</script>

<style  scoped>

</style>