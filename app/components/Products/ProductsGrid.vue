<template>
  <div
    class="flex flex-row flex-wrap justify-center gap-4 md:justify-center md:gap-7 md:px-48 md:py-9"
  >
    <template v-if="!products">
      <div
        v-for="_ in 10"
        class="flex min-h-[260px] w-[154px] animate-pulse flex-col gap-3 rounded-xl bg-gray-200 md:min-h-[420px] md:w-[250px]"
      ></div>
    </template>
    <div v-else-if="products.length === 0">
      <div>No products found</div>
    </div>
    <template v-else>
      <Card
        v-for="product in products"
        :key="product.id"
        :brand="product.brand.title"
        :title="product.title"
        :image="product.featured_image"
      >
        <template v-if="product.best_seller" #best_seller>
          <span>Best Seller</span>
        </template>
        <template #product-info>
          <div class="flex flex-row items-center justify-between">
            <div>
              <Rating :rating="product.rating.total_reviews_count" />
              <Price :price="product.price" />
            </div>
            <Cart />
          </div>
        </template>
      </Card>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '~/types/types';

defineProps<{products?: ProductType[]}>()




// const { productsResponse } = useProducts();
// const products = computed(() => productsResponse?.value?.data);
</script>
