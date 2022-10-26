<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNavigation from '@/components/TopNavigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <TopNavigation />
  <RouterView />
  <Footer />
</template>