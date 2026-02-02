<template>
  <div
    class="border-[#DFE1E3]categories-back-container flex h-[49px] items-center justify-center overflow-hidden border-y-[0.5px] bg-light-gray"
  >
    <ul
      class="hide-scroll-bar flex w-[80%] justify-around gap-12 overflow-x-scroll"
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
import { type CategoriesResponse } from "~/types/types";

const { data: categoriesResponse } = useFetch<CategoriesResponse>(
  "https://fillcart.staging.hbm.studio/api/v2/categories?include=media",
);
</script>
<style scoped>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
