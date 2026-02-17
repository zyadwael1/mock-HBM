<template>
  <div
    :class="[
      'flex flex-row flex-wrap justify-center gap-4 md:justify-center md:gap-7 md:py-9',
      isDrawerOpen ? 'md:px-10' : 'md:px-48',
    ]"
  >
    <template v-if="!products">
      <Skeleton v-for="_ in 10" />
    </template>

    <div v-else-if="products.length === 0">No products found</div>

    <template v-else>
      <Item v-for="product in products" :product />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from "~/types/types";

defineProps<{ products?: ProductType[]; isDrawerOpen?: boolean }>();
</script>
