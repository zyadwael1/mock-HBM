<template>
  <div
    class="flex justify-center items-center h-[49px] bg-light-gray border-y-[0.5px] border-[#DFE1E3]categories-back-container overflow-hidden"
  >
    <ul
      class="hide-scroll-bar w-[80%] flex justify-around gap-12 overflow-x-scroll"
    >
      <NuxtLink
        v-for="category in categoriesResponse?.data"
        class="text-nowrap"
        :key="category.id"
        to="category-path"
      >
        {{ category.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface CategoriesResponse {
  meta: string;
  data: CategoryType[];
  pagination: number;
}

interface CategoryType {
  id: string;
  title: string;
  order: number;
  children: any;
  category_image: string;
  category_image_ar: string;
  breadcrumbs_image: string;
  parent_category?: any;
}

const { data: categoriesResponse } = useFetch<CategoriesResponse>(
  "https://fillcart.staging.hbm.studio/api/v2/categories?include=media",
);
</script>
<style scoped>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
