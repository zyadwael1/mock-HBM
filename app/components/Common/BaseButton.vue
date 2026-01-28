<template>
  
    <button
      class="w-full bg-main-green h-[47px] text-white rounded-xl py-[14px] px-4 mb-5"
    > {{ text }}</button>
  
</template>

<script setup lang="ts">
defineProps({
    text: String
})
</script>

<style scoped></style>
