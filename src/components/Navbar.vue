<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" class="flex items-center">
            <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CoderaOJ</span>
        </a>
        <div class="flex items-center">
            <!-- <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a> -->
            <a href="/register" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Register</a>
            <a class="text-sm  text-black-600 dark:text-blue-500 hover:underline">&nbsp&nbsp|&nbsp&nbsp</a>
            <a href="/login" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/contest" class="text-gray-900 dark:text-white hover:underline">Contests</a>
                </li>
                <li>
                    <a href="/problem" class="text-gray-900 dark:text-white hover:underline">Problems</a>
                </li>
                <li>
                    <a href="draft" class="text-gray-900 dark:text-white hover:underline">Draft</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>