<template>
  <main
    class="absolute bottom-0 left-0 right-0 top-0 z-20 bg-white transition-transform duration-300 ease-out md:static md:z-0 md:flex md:w-[400px] md:flex-col"
    :class="open ? 'translate-x-0' : '-translate-x-full md:hidden'"
  >
   
    <slot />
  </main>
</template>

<script setup lang="ts">

defineProps<{ open: boolean }>();

</script>
