<template>
  <header
    class="flex flex-wrap items-center justify-between gap-2 px-4 py-1 text-black sm:px-10 sm:py-[18px]"
  >
    <NuxtLink to="/" class="order-1 shrink-0 py-1">
      <img src="/assets/logo.png" alt="header-logo" />
    </NuxtLink>

    <div
      class="order-3 flex w-full items-center justify-center gap-3 py-2 sm:order-2 sm:mx-2 sm:w-auto sm:flex-1 sm:py-0"
    >
      <button
        class="flex h-[30px] w-[30px] shrink-0 items-center justify-center sm:hidden"
        @click="toggleMenu"
      >
        <Icon size="24px" name="i:ic-menu"></Icon>
      </button>

      <Drawer class="flex flex-col gap-3 p-5 md:hidden" :open="isOpen">
        <div class="flex justify-between">
          <NuxtLink to="/">
            <img src="/assets/logo.png" alt="header-logo" />
          </NuxtLink>
          <button class="self-end" @click="toggleMenu">
            <Icon
              class="cursor-pointer text-2xl text-black md:text-3xl"
              name="i:ic-x"
            />
          </button>
        </div>
        <div class="flex justify-center gap-3 bg-green-50 py-1">
          <NuxtLink
            to="/sign-in"
            class="hover:font-semibold"
            @click="toggleMenu"
            >Sign in</NuxtLink
          >
          /
          <NuxtLink
            to="/register"
            class="hover:font-semibold"
            @click="toggleMenu"
            >Register</NuxtLink
          >
        </div>
        <NuxtLink
          v-for="category in categoriesResponse?.data"
          class="flex flex-col items-start border-t-2 px-3 py-4"
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
        class="h-10 w-full rounded-xl border border-border-gray bg-light-gray px-5 py-[18px] sm:h-[43px] sm:max-w-[823px]"
      />
    </div>

    <div class="order-2 shrink-0">
      <UserActions />
    </div>
    <hr class="order-4 w-full sm:hidden" />
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
  document.body.style.overflow = "";
};
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (window.innerWidth < 768) {
    document.body.style.overflow = isOpen.value ? "hidden" : "";
  }
};
</script>
