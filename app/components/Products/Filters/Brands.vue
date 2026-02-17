<template>
  <Accordion title="Brands">
    <div class="flex flex-wrap gap-2 pt-4">
      <button
        v-for="brand in brands"
        class="rounded bg-gray-100 p-2 hover:bg-gray-200 active:bg-green-500"
        :class="{
          'bg-main-green text-white': isSelected(brand.id),
        }"
        :key="brand.id"
        @click="toggleBrand(brand.id)"
      >
        {{ brand.title }}
      </button>
    </div>
  </Accordion>
</template>

<script setup lang="ts">
import { is } from "zod/locales";
import type { Brand } from "~/types/brands";
const route = useRoute();
const router = useRouter();
defineProps<{ brands?: Brand[] }>();

const selectedBrands = computed(() => {
  const brand = route.query.brands;
  if (!brand) return [];
  return Array.isArray(brand) ? brand : [brand];
});

const isSelected = (id: string) => selectedBrands.value.includes(String(id));


const toggleBrand = (id: string) => {
  const updated = isSelected(id)
    ? selectedBrands.value.filter((brand) => brand !== id)
    : [...selectedBrands.value, id];
    router.push({
            path: route.path,
            query: {
              ...route.query,
              brands: updated.length ? updated : undefined,
            },
          })
};
</script>

<style scoped></style>
