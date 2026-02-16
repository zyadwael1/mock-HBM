<template>
  <div class="flex flex-col gap-6 px-8 py-5 md:px-40">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold md:text-4xl">
        {{ selectedCategory?.title ?? "All Products" }}
      </h2>
      <span>
        {{ productsResponse?.pagination.total }} Item
        {{ productsResponse?.pagination.total !== 1 ? "s" : "" }}
      </span>
    </div>

    <div class="flex flex-col gap-4 md:flex-row">
      <FiltersSidebar :brands :is-open="isDrawerOpen" @close="toggleDrawer" />

      <div class="flex grow flex-col">
        <div class="flex items-center justify-between">
          <button class="flex items-center" @click="toggleDrawer">
            <Icon
              class="cursor-pointer text-2xl text-black md:text-3xl"
              :name="isDrawerOpen ? 'i:ic-x' : 'i:ic-filter'"
            />
            <span class="px-3">Filters</span>
          </button>

          <Sort />
        </div>

        <Grid :products="productsResponse?.data" />
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
import FiltersSidebar from "~/components/products/Filters/Sidebar.vue";

const { productsResponse, fetchProducts } = useProducts();
const { selectedCategory } = useCategories();
const { brands } = useBrands();

const router = useRouter();
const route = useRoute();

const isDrawerOpen = computed(() => !!route.query.filter_bar);

const toggleDrawer = async () => {
  isDrawerOpen.value != isDrawerOpen.value;
  router.push({
    path: route.path,
    query: {
      ...route.query,
      filter_bar: isDrawerOpen.value ? undefined : "true",
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
