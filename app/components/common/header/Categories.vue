<template>
  <div
    class="border-[#DFE1E3] hidden md:flex h-[49px] items-center justify-center overflow-hidden border-y-[0.5px] bg-light-gray"
  >
    <ul
      class="hide-scroll-bar flex w-[80%] justify-around gap-12 overflow-x-scroll"
    >
      <NuxtLink
        v-for="category in categoriesResponse?.data"
        class="text-nowrap"
        to="category-path"
        :key="category.id"
      >
        {{ category.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { categoriesResponse } = useCategories();
</script>
<style scoped>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
