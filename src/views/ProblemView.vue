<script setup lang="ts">

import { defineAsyncComponent } from 'vue';
const OverviewCards = defineAsyncComponent(()=> import('../components/OverviewCards.vue'))

</script>

<template>
<overview-cards/>
</template>
