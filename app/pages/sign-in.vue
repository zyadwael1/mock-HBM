<template>
  <main class="main">
    <SignInForm />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "guest-middleware",
});
</script>

<style scoped>
.main {
  @apply my-[64px] flex justify-center;
}
</style>
