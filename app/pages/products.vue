<template>
  <div class="flex flex-col px-8 md:px-16 md:py-8">
    <h2
      v-if="selectedCategory?.title"
      class="py-5 text-2xl font-semibold md:text-4xl"
    >
      {{ selectedCategory?.title }}
    </h2>
    <h2 v-else class="py-5 text-2xl font-semibold md:text-4xl">All Products</h2>
    <ProductsGrid />
    <PaginationButtons
      v-if="productsResponse?.pagination"
      :current-page="productsResponse.pagination.current_page"
      :last-page="productsResponse.pagination.last_page"
      :total="productsResponse.pagination.total"
    />
  </div>
</template>

<script setup lang="ts">
import { type CategoryState } from "~/types/types";
const { productsResponse } = useProducts();
const { categoriesResponse } = useCategories();
const selectedCategory = useState<CategoryState | null>("selectedCategory");
const route = useRoute();
watch(
  () => route.query.category,
  (categoryId) => {
    if (!categoryId) {
      selectedCategory.value = null;
    } else {
      const category = categoriesResponse.value?.data.find(
        (cat) => cat.id === categoryId,
      );
      if (category) {
        selectedCategory.value = {
          id: category.id,
          title: category.title,
        };
      }
    }
  },
  { immediate: true },
);
</script>
