<template>
  <div
    class="flex min-h-[260px] w-[154px] flex-col gap-3 rounded-xl md:min-h-[420px] md:w-[250px]"
  >
    <div class="relative">
      <div
        class="h-[150px] w-full rounded-xl border-[0.5px] border-gray-200 md:h-[294px]"
      >
        <NuxtImg
          class="h-full w-full object-contain"
          alt="Product Image"
          :src="image"
        />
      </div>

      <div
        v-if="$slots.best_seller"
        class="absolute left-0 top-0 rounded-br-lg rounded-tl-xl rounded-tr-lg bg-main-green p-2 text-white"
      >
        <slot name="best_seller" />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h2>{{ brand }}</h2>
      <h3 class="w-full truncate">{{ title }}</h3>
      <slot name="product-info" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  brand: String,
  title: String,
});
</script>
