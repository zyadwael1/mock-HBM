<template>
  <div
    class="flex flex-row flex-wrap justify-center gap-4 md:justify-center md:gap-7 md:px-48 md:py-9"
  >
    <Card
      v-for="product in productsResponse?.data"
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
  </div>
</template>

<script setup lang="ts">
const { productsResponse } = useProducts();
</script>
