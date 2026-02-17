<template>
  <Transition name="fade">
    <Drawer
      v-if="isOpen"
      class="flex flex-col gap-7 px-5"
      :open="isOpen"
      @close="$emit('close')"
    >
      <h2 class="text-xl font-semibold md:hidden">Filter by</h2>
      <hr class="md:hidden" />
      <FilterPart title="Brands"> Brands </FilterPart>
      <hr />
      <FilterPart title="Price"> Price </FilterPart>
      <hr />
      <FilterPart title="Rating"> Rating </FilterPart>
      <hr />
      <FilterPart title="Special Tags"> Special Tags </FilterPart>
    </Drawer>
  </Transition>
</template>

<script setup lang="ts">
defineEmits<{ close: [] }>();
defineProps<{ isOpen: boolean }>();
</script>
