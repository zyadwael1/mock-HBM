<template>
  <div class="flex flex-col px-8 md:px-16 md:py-8">
    <div class="flex items-center justify-between py-5 md:px-20">
      <h2 class="text-2xl font-semibold md:text-4xl">
        {{ selectedCategory?.title ?? "All Products" }}
      </h2>
      <span
        >{{ productsResponse?.pagination.total }} Item{{
          productsResponse?.pagination.total !== 1 ? "s" : ""
        }}</span
      >
    </div>

    <div class="flex flex-col gap-4 md:flex-row">
      <Sidebar
        class="min-w-[350px] py-0 md:py-36"
        :brands
        :is-open="isDrawerOpen"
        @close="handleDrawer"
      />
      <div class="flex grow flex-col">
        <div class="flex items-center justify-between px-0 py-5 md:px-20">
          <div class="flex items-center">
            <button class="flex items-center" @click="handleDrawer">
              <Icon
                class="cursor-pointer text-2xl text-black md:text-3xl"
                :name="isDrawerOpen ? 'i:ic-x' : 'i:ic-filter'"
              />
              <span class="px-3"
                >Filters{{
                  selectedBrandsCount ? ` (${selectedBrandsCount})` : ""
                }}</span
              >
            </button>
            <Active :brands />
          </div>
          <div class="flex gap-5">
            <button class="border-l-2 px-5 py-2" @click="clearAllBrands">
              Clear All
            </button>

            <Sort />
          </div>
        </div>

        <Grid
          :products="productsResponse?.data"
          :is-drawer-open="isDrawerOpen"
        />
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
const { productsResponse, fetchProducts } = useProducts();
const { selectedCategory } = useCategories();

const { brands } = useBrands();

const router = useRouter();
const route = useRoute();

const isDrawerOpen = computed(() => !!route.query.filter_bar);

const handleDrawer = () => {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      filter_bar: isDrawerOpen.value ? undefined : "true",
    },
  });
};

const selectedBrandsCount = computed(() => {
  const brands = route.query.brands;
  if (!brands) return 0;
  return Array.isArray(brands) ? brands.length : 1;
});

const clearAllBrands = () => {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      brands: undefined,
    },
  });
};

fetchProducts();
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
