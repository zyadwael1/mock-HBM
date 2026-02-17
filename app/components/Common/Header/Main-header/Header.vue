<template>
  <header
    class="flex flex-wrap items-center justify-between gap-2 p-4 text-black"
  >
    <NuxtLink to="/" class="header-logo order-1 shrink-0">
      <img src="/assets/logo.png" alt="header-logo" />
    </NuxtLink>

    <div
      class="order-3 flex w-full items-center justify-center gap-3 border-b-2 py-3 sm:order-2 sm:mx-2 sm:w-auto sm:flex-1 sm:border-0 sm:py-0"
    >
      <button
        class="flex h-8 w-8 shrink-0 items-center justify-center sm:hidden"
        @click="toggleMenu"
      >
        <Icon size="24px" name="i:ic-menu"></Icon>
      </button>

      <Drawer class="flex flex-col md:hidden" :open="isOpen">
        <button class=" self-end" @click="toggleMenu">
          <Icon
            class="cursor-pointer text-2xl text-black md:text-3xl"
            name="i:ic-x"
          />
        </button>
        <NuxtLink
          v-for="category in categoriesResponse?.data"
          class="flex flex-col  items-start px-3 py-3"
          :to="{
            path: '/products',
            query: { category: category.id },
          }"
          :key="category.id"
          @click="selectCategory(category)"
        >
          {{ category.title }}
        </NuxtLink>
        
      </Drawer>

      <input
        type="search"
        placeholder="Search"
        class="h-[30px] w-full rounded-xl border border-border-gray bg-light-gray px-5 py-[18px] sm:h-[43px] sm:max-w-[823px]"
      />
    </div>

    <div class="order-2 shrink-0">
      <UserActions />
    </div>
  </header>
</template>
<script setup lang="ts">
import { type CategoryType } from "~/types/types";

const { categoriesResponse } = useCategories();
const isOpen = ref(false);

const router = useRouter();

const selectCategory = async (category: CategoryType) => {
  await router.push({
    path: "/products",
    query: {
      category: category.id,
    },
  });
  isOpen.value = false;
};
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
