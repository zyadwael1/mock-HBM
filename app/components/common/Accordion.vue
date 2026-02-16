<template>
  <div class="flex flex-col">
    <div class="flex cursor-pointer justify-between" @click="handleFilter">
      <h3>{{ title }}</h3>
      <Icon
        class="text-2xl text-black transition-transform duration-200 md:text-3xl"
        :name="isFilterOpen ? 'i:ic-minus' : 'i:ic-plus'"
      />
    </div>
    <div
      class="flex transition-all duration-300 ease-out"
      :class="isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const isFilterOpen = ref<boolean>(false);

defineProps<{ title: string }>();
const handleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value;
};
</script>
