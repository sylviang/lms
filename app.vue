<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'

const { $directus } = useNuxtApp();
console.log($directus);

</script>