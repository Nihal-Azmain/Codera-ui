<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const OverviewCard = defineAsyncComponent(()=> import("../components/OverviewCards.vue"))

</script>

<template>
<OverviewCard />

</template>
