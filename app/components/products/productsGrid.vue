<template>
  <div
    v-for="product in productsResponse?.data"
    class="text-nowrap"
    :key="product.id"
  >
    {{ product.title }}
  </div>
</template>

<script setup lang="ts">
const { productsResponse } = useProducts();
</script>
