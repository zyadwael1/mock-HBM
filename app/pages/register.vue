<template>
  <div class="flex justify-center px-6 py-[64px]">
    <RegisterForm />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "guest-middleware",
});
</script>

<style></style>
