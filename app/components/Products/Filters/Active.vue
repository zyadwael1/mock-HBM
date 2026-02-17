<template>
  <div
    v-if="selectedBrands.length"
    class="flex flex-wrap gap-2 px-2 "
  >
    <span
      v-for="brand in selectedBrands"
      :key="brand.id"
      class="flex flex-row items-center gap-2 rounded bg-gray-100 p-2 hover:bg-gray-200"
    >
      {{ brand.title }}
      <button class="flex items-center" @click="clearBrand(brand.id)">
        <Icon name="i:ic-x" class="text-xl" />
      </button>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Brand } from "~/types/brands";

const props = defineProps<{ brands?: Brand[] }>();

const router = useRouter();
const route = useRoute();

const selectedBrands = computed(() => {
  const brand = route.query.brands;
  if (!brand || !props.brands) return [];
  const ids = Array.isArray(brand) ? brand : [brand];
  return props.brands.filter((brand) => ids.includes(brand.id));
});

const clearBrand = (id: string) => {
  const brand = route.query.brands;
  const ids = Array.isArray(brand) ? brand : [brand];
  const updated = ids.filter((brand) => brand !== id);

  router.push({
    path: route.path,
    query: {
      ...route.query,
      brands: updated.length ? updated : undefined,
    },
  });
};

</script>
