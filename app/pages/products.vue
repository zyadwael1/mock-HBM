<template>
  <div class="flex flex-col px-8 md:px-16 md:py-8">
    <div class="flex items-center justify-between py-5 md:px-40">
      <div class="text-2xl font-semibold md:text-4xl">
        <h2 v-if="selectedCategory?.title">
          {{ selectedCategory?.title }}
        </h2>
        <h2 v-else>All Products</h2>
      </div>
      <span
        >{{ productsResponse?.pagination.total }} Item{{
          productsResponse?.pagination.total !== 1 ? "s" : ""
        }}</span
      >
    </div>

    <Sort class="my-5 self-end md:mx-40" />

    <div class="flex flex-col gap-4 md:flex-row">
      <div class="flex">
        <Transition name="fade">
          <Drawer
            v-if="isDrawerOpen"
            v-model:open="isDrawerOpen"
            class="flex flex-col gap-7 px-5"
          >
            <h2 class="text-xl font-semibold md:hidden">Filter by</h2>
            <hr class="md:hidden" />
            <FilterPart :title="'Brands'"> Brands </FilterPart>
            <hr />
            <FilterPart :title="'Price'"> Price </FilterPart>
            <hr />
            <FilterPart :title="'Rating'"> Rating </FilterPart>
            <hr />
            <FilterPart :title="'Special Tags'"> Special Tags </FilterPart>
          </Drawer>
        </Transition>

        <Icon
          v-if="!isDrawerOpen"
          name="i:ic-filter"
          class="text-2xl text-black md:text-3xl"
          @click="handleDrawer"
        />
        <span class="px-3">Filters</span>
      </div>

      <div>
        <ProductsGrid :products="productsResponse?.data" />
        <PaginationButtons
          v-if="productsResponse?.pagination"
          :current-page="productsResponse.pagination.current_page"
          :last-page="productsResponse.pagination.last_page"
          :total="productsResponse.pagination.total"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CategoryState } from "~/types/types";
const { productsResponse } = useProducts();
const { categoriesResponse } = useCategories();

const selectedCategory = useState<CategoryState | null>("selectedCategory");
const router = useRouter();
const route = useRoute();
const isDrawerOpen = ref<boolean>(false);

const handleDrawer = async () => {
  const newState = !isDrawerOpen.value;
  await router.push({
    path: route.path,
    query: {
      ...route.query,
      filter_bar: newState ? "true" : undefined,
    },
  });
};

// Sync isDrawerOpen changes to URL
watch(isDrawerOpen, async (newValue) => {
  const currentFilterBar = route.query.filter_bar === "true";
  if (newValue !== currentFilterBar) {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        filter_bar: newValue ? "true" : undefined,
      },
    });
  }
});

// Sync URL changes to isDrawerOpen
watch(
  () => route.query.filter_bar,
  (filterBarQuery) => {
    isDrawerOpen.value = filterBarQuery === "true";
  },
  { immediate: true },
);

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
<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
