<template>
  <div
    class="flex min-h-[260px] w-[154px] flex-col gap-3 rounded-xl md:min-h-[420px] md:w-[250px]"
  >
    <div class="relative">
      <div
        class="h-[150px] w-full rounded-xl border-[0.5px] border-gray-200 md:h-[294px]"
      >
        <NuxtImg
          class="h-full w-full object-contain"
          alt="Product Image"
          :src="product.featured_image"
        />
      </div>

      <div
        v-if="product.best_seller"
        class="absolute left-0 top-0 rounded-br-lg rounded-tl-xl rounded-tr-lg bg-main-green p-2 text-white"
      >
        Best Seller
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <h2>{{ product.brand.title }}</h2>
      <h3 class="w-full truncate">{{ product.title }}</h3>

      <div class="flex flex-row items-center justify-between">
        <div>
          <Rating v-bind="product.rating" />
          <Price :price="product.price" />
        </div>
        <Cart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from "~/types/types";

defineProps<{ product: ProductType }>();
</script>
