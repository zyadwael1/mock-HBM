<template>
  <div class="flex justify-center px-6 py-[64px]">
    <SignInForm />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "guest-middleware",
});
</script>
