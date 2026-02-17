<template>
  <div class="flex items-center gap-1 md:gap-2">
    <Icon
      v-for="i in 5"
      name="i:ic-rate"
      :class="i <= product_ratings ? 'text-yellow-500' : 'text-gray-200'"
    />
    <span>({{ total_reviews_count }})</span>
  </div>
</template>

<script setup lang="ts">
import type { Rating } from "~/types/types";

defineProps<Rating>();
</script>
