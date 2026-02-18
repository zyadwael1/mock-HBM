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
        <div
          class="flex flex-wrap items-center justify-between gap-5 px-0 py-5 md:flex-nowrap md:px-20"
        >
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

          <div
            class="order-last flex w-full min-w-0 justify-between gap-5 md:order-none md:w-0 md:grow"
          >
            <Active class="hide-scroll-bar min-w-0 overflow-x-auto" :brands />
            <button
              v-if="selectedBrandsCount"
              class="shrink-0 border-l-2 px-5 py-2"
              @click="clearAllBrands"
            >
              Clear All
            </button>
          </div>

          <Sort />
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
  if (window.innerWidth < 768) {
    document.body.style.overflow = isDrawerOpen.value ? "" : "hidden";
  }

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


/* ... your existing animations ... */

/* Only hide the scrollbar on screens smaller than 768px */
@media (max-width: 767px) {
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
  .hide-scroll-bar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}

/* On Desktop (768px and up), ensure scrollbar is visible if content overflows */
@media (min-width: 768px) {
  .hide-scroll-bar {
    scrollbar-width: auto; /* Firefox */
    -ms-overflow-style: auto;
  }
  /* Optional: Style the desktop scrollbar so it looks consistent */
  .hide-scroll-bar::-webkit-scrollbar {
    display: block;
    height: 4px;
  }
  .hide-scroll-bar::-webkit-scrollbar-thumb {
    background: #c1c1c1; /* slate-300 */
    border-radius: 10px;
  }
}
</style>
