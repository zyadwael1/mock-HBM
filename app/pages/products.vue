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
        <Sidebar :is-open="isDrawerOpen" @close="handleDrawer" />

        <Icon
          name="i:ic-filter"
          class="text-2xl text-black md:text-3xl"
          @click="handleDrawer"
        />
        <span class="px-3">Filters</span>
      </div>
      <div>
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
const { productsResponse, fetchProducts } = useProducts();
const { selectedCategory } = useCategories();

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
