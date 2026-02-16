<template>
  <p>EGP {{ price }}</p>
</template>

<script setup lang="ts">
defineProps<{ price: string }>();
</script>
