<template>
  <div class="flex flex-wrap justify-center gap-7 md:px-48 md:py-9">
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
            <div class="flex items-center gap-2">
              <Icon v-for=" in 5" name="i:ic-rate" class="text-yellow-500" />
              <span>({{ product.rating.total_reviews_count }})</span>
            </div>
            <p>EGP {{ product.price }}</p>
          </div>
          <div
            class="flex h-11 w-11 items-center justify-center rounded-full bg-black"
          >
            <Icon name="i:ic-add-to-cart" class="text-3xl text-white" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
const { productsResponse } = useProducts();
</script>
