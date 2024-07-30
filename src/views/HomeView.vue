<template>
    <div class="container mx-auto py-8 px-4">
        <header class="text-center mb-8">
            <h1 class="text-5xl font-bold text-blue-600 mb-4">Welcome to AppSpaces Azure Learning Platform</h1>
            <p class="text-lg text-gray-700">Learn how to deploy your web app to Azure with ease using the new Learn
                Code extension and AppSpaces Azure service.</p>
        </header>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <p class="text-gray-600 mb-4">We offer step-by-step guides, hands-on tutorials, and expert support to
                    help you deploy your web apps efficiently.</p>
                <ul class="list-disc list-inside text-gray-600">
                    <li>Comprehensive tutorials</li>
                    <li>Expert guidance</li>
                    <li>Community support</li>
                </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Get Started</h2>
                <p class="text-gray-600 mb-4">Follow our simple guides to get your web app up and running on Azure in no
                    time.</p>
                <!-- <RouterLink :to="{ name: 'get-started' }"
                    class="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                    Start Learning
                </RouterLink> -->
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped></style>