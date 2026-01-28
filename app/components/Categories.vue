<template>
  <div class="categories-back-container">
    <ul class="categories">
      <li 
      v-for="category in categories" 
      :key="category.id">
        <NuxtLink to="category-path">{{ category.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Category {
  id: number;
  name: string;
}
const categories: Category[] = [
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
.categories-back-container {
  @apply flex justify-center items-center h-[49px] bg-[#F9F9F9] border-y-[0.5px] border-[#DFE1E3];
}
.categories {
  @apply w-[80%] flex justify-around;
}
</style>
