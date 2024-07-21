<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <h1>App Spaces Azure</h1>
  <RouterLink :to="{name: 'create'}">Create</RouterLink>
  <RouterLink :to="{name: 'posts'}">Posts</RouterLink>
  <RouterView/>
</template>

<style scoped>

</style>