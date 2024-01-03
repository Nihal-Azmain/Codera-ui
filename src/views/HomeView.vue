<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Navbar= defineAsyncComponent(()=>import('../components/Navbar.vue'))

</script>

<template>
  <Navbar />
  <div class="justify-between items-center mx-auto max-w-screen-xl p-4 ">
    <router-view />
  </div>
</template>
