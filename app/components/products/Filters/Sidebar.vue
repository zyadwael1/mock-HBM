<template>
  <Transition name="fade">
    <Drawer
      v-if="isOpen"
      class="flex min-w-80 flex-col gap-7 py-40"
      :open="isOpen"
      @close="$emit('close')"
    >
      <h2 class="text-xl font-semibold md:hidden">Filter by</h2>
      <hr class="md:hidden" />
      <Brands :brands />
      <hr />
      <Accordion title="Price"> Price </Accordion>
      <hr />
      <Accordion title="Rating"> Rating </Accordion>
      <hr />
      <Accordion title="Special Tags"> Special Tags </Accordion>
    </Drawer>
  </Transition>
</template>

<script setup lang="ts">
import Accordion from "~/components/common/Accordion.vue";
import type { Brand } from "~/types/products/brands";

defineEmits<{
  close: [];
}>();

defineProps<{
  isOpen?: boolean;
  brands?: Brand[];
}>();
</script>
