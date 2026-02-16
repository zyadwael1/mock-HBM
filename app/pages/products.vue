<template>
  <div class="flex flex-col px-8 md:px-16 md:py-8">
    <div class="flex items-center justify-between py-5 md:px-40">
      <h2 class="text-2xl font-semibold md:text-4xl">
        {{ selectedCategory?.title ?? "All Products" }}
      </h2>
      <span>
        {{ productsResponse?.pagination.total }} Item
        {{ productsResponse?.pagination.total !== 1 ? "s" : "" }}
      </span>
    </div>

    <Sort class="my-5 self-end md:mx-40" />

    <div class="flex flex-col gap-4 md:flex-row">
      <FiltersSidebar :is-open="isDrawerOpen" @close="toggleDrawer" />

      <div class="flex flex-col">
        <button class="flex items-center" @click="toggleDrawer">
          <Icon
            class="cursor-pointer text-2xl text-black md:text-3xl"
            :name="isDrawerOpen ? 'i:ic-x' : 'i:ic-filter'"
          />
          <span class="px-3">Filters</span>
        </button>

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

const { productsResponse } = useProducts();
const { selectedCategory } = useCategories();

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
