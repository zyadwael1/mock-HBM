<template>
  <Accordion title="Brands">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="brand in brands"
        class="rounded bg-green-400 p-2 hover:bg-green-200 active:bg-green-700"
        :class="{
          'bg-green-700': $route.query.brand === brand.id,
        }"
        :key="brand.id"
        @click="
          $router.push({
            path: $route.path,
            query: {
              ...$route.query,
              brand: brand.id,
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
import type { Brand } from "~/types/products/brands";

defineProps<{ brands?: Brand[] }>();
</script>

<style scoped></style>
