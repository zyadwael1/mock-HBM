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
        @click="categorySelection(category.id)"
      >
        {{ category.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { categoriesResponse } = useCategories();
const selectedCategory = useState<string>("selectedCategory");
const per_page = 20;
const current_page = 1;
const router = useRouter();

// Try spreading
// const routeQueries = {
//   category: selectedCategory.value,
//   per_page: per_page,
// };

const categorySelection = async (id: string) => {
  selectedCategory.value = id;
  await router.push({
    path: "/products",
    query: {
      per_page: per_page,
      page: current_page,
      category: selectedCategory.value,
    },
  });

  console.log("Category State : ", selectedCategory.value);
};
</script>
<style scoped>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
