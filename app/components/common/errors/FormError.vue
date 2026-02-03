<template>
  <div>
    <p v-if="error" class="px-2 text-sm text-alert">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: String,
});

</script>
