<template>
  <main class="py-[64px] flex justify-center">
    <SignInForm />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "guest-middleware",
});
</script>

