<template>
  <main class="flex justify-center py-[64px]">
    <SignInForm />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "guest-middleware",
});
</script>
