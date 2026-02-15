<template>
  <div class="text-lg">
    <div class="flex cursor-pointer justify-between" @click="handleFilter">
      <h3>{{ title }}</h3>
      <Icon
        :name="isFilterOpen ? 'i:ic-minus' : 'i:ic-plus'"
        class="text-2xl text-black transition-transform duration-200 md:text-3xl"
      />
    </div>
    <div
      class="transition-all duration-300 ease-out"
      :class="
        isFilterOpen ? 'mt-2 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      "
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
