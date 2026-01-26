<template>
  <div class="products-list-back-container">
    <ul class="products-list">
      <li 
      v-for="product in products"
      :key="product.id"
      >
        <NuxtLink to="product-path">{{ product.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Product {
  id: number;
  name: string;
}
const products: Product[] = [
  { id: 1, name: "Air conditioners" },
  { id: 2, name: "Washing Machines" },
  { id: 3, name: "Television" },
  { id: 4, name: "Fans" },
  { id: 5, name: "Water Heater" },
  { id: 6, name: "Water Filters" },
  { id: 7, name: "Refrigerator" },
  { id: 8, name: "Vacuum Cleaner" },
  { id: 9, name: "Brands" },
];
</script>
<style scoped>
.products-list-back-container {
  @apply flex justify-center items-center h-[49px] bg-[#F9F9F9] border-y-[0.5px] border-[#DFE1E3];
}
.products-list {
  @apply w-[80%] flex justify-around;
}
</style>
