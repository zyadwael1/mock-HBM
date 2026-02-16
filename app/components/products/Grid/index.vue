<template>
  <div
    class="flex flex-row flex-wrap justify-center gap-4 md:justify-center md:gap-7 md:px-48 md:py-9"
  >
    <template v-if="!products">
      <Skeleton v-for="_ in 10" />
    </template>

    <h2 v-else-if="products.length === 0">
      We couldn't find an exact match to what you are looking for.
    </h2>

    <template v-else>
      <GridItem v-for="product in products" :product />
    </template>
  </div>
</template>

<script setup lang="ts">
import GridItem from "~/components/products/Grid/item.vue";
import Skeleton from "~/components/products/Grid/Skeleton.vue";
import type { ProductType } from "~/types/types";

defineProps<{
  products?: ProductType[];
}>();
</script>
