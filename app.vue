<template>
  <div>
    <NuxtLayout>
      <!-- https://nuxt.com/docs/api/components/nuxt-loading-indicator/#nuxtloadingindicator -->
      <NuxtLoadingIndicator color="#2563eb" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
</script>