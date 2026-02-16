<template>
  <main
    class="absolute bottom-0 left-0 right-0 top-0 z-20 bg-white transition-transform duration-300 ease-out md:static md:z-0 md:flex md:w-[400px] md:flex-col"
    :class="open ? 'translate-x-0' : '-translate-x-full md:hidden'"
  >
    <Icon
      name="i:ic-x"
      class="self-end py-8 text-2xl text-black md:py-0 md:text-3xl"
      @click="handleClose"
    />

    <slot />
  </main>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();
const emit = defineEmits<{ (e: "update:open", value: boolean): void }>();
const handleClose = () => emit("update:open", false);
</script>
