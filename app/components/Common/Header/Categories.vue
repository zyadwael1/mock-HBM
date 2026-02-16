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
import { type CategoryState } from "~/types/types";

const { categoriesResponse } = useCategories();
const selectedCategory = useState<CategoryState | null>("selectedCategory");

const per_page = categoriesResponse.value?.pagination.per_page;
const current_page = categoriesResponse.value?.pagination.current_page;
const router = useRouter();
const route = useRoute();

// Try spreading
// const routeQueries = {
//   per_page: per_page,
//   page: current_page,
//   category: selectedCategory.value?.id,
// };

const selectCategory = async (category: CategoryState) => {
  selectedCategory.value = {
    id: category.id,
    title: category.title,
  };
  await router.push({
    path: "/products",
    query: {
      per_page: per_page,
      page: current_page,
      category: selectedCategory.value.id,
    },
  });
};
</script>
<style scoped>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
