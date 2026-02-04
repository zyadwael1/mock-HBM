<template>
  <main class="my-[64px] flex justify-center">
    <SignInForm />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "guest-middleware",
});
</script>

