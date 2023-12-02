<template>
  <div class="min-h-screen font-Lora bg-main-bg">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<style lang="scss" scoped></style> 