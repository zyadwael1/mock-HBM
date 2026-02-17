<template>
  <Accordion title="Brands">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="brand in brands"
        class="rounded bg-gray-100 p-2 hover:bg-gray-200 active:bg-green-500"
        :class="{
          'bg-green-500': $route.query.brand === brand.id,
        }"
        :key="brand.id"
        @click="
          $router.push({
            path: $route.path,
            query: {
              ...$route.query,
              brands: brand.id,
            },
          })
        "
      >
        {{ brand.title }}
      </button>
    </div>
  </Accordion>
</template>

<script setup lang="ts">
import type { Brand } from "~/types/brands";

defineProps<{ brands?: Brand[] }>();
</script>

<style scoped></style>
