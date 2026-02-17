<template>
  <div
    class="hidden h-[49px] items-center justify-center overflow-hidden border-y-[0.5px] border-[#DFE1E3] bg-light-gray md:flex"
  >
    <ul
      class="hide-scroll-bar flex w-[80%] justify-around gap-12 overflow-x-scroll"
    >
      <NuxtLink
        v-for="category in categoriesResponse?.data"
        class="text-nowrap"
        :to="{
          path: '/products',
          query: { category: category.id },
        }"
        :key="category.id"
        @click="selectCategory(category)"
      >
        {{ category.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { boolean } from "zod";
import { type CategoryType } from "~/types/types";

const { categoriesResponse} = useCategories();

const router = useRouter();


const selectCategory = async (category: CategoryType) => {

  await router.push({
    path: "/products",
    query: {
      category: category.id
    },
  });
};
</script>
<style scoped>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
