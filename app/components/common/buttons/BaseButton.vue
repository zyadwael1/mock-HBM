<template>
  <button class="baseButton">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<style scoped>
.baseButton {
  @apply mb-5 h-[47px] w-full rounded-xl bg-main-green px-4 py-[14px] text-white;
}
</style>
