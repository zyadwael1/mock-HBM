<template>
  <div class="flex items-center gap-1 md:gap-2">
    <Icon v-for=" in 5" name="i:ic-rate" class="text-yellow-500" />
    <span>({{ rating }})</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{rating: number}>()
</script>
