<template>
  <Transition name="fade">
    <Drawer
      v-if="isOpen"
      class="flex flex-col gap-7 px-5"
      :open="isOpen"
      @close="$emit('close')"
    >
      <div class="flex justify-between py-5 md:hidden">
        <h2 class="text-xl font-semibold">Filter by</h2>
        <button class="flex items-center" @click="$emit('close')">
          <Icon
            class="cursor-pointer text-2xl text-black md:text-3xl"
            name="i:ic-x"
          />
        </button>
      </div>
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
import type { Brand } from "~/types/brands";

defineEmits<{ close: [] }>();
defineProps<{
  isOpen?: boolean;
  brands?: Brand[];
}>();
</script>
