<!-- components/PaginationButtons.vue -->
<template>
  <div v-if="lastPage > 1" class="flex items-center justify-center gap-2 py-8">
    <button
      class="rounded-md border px-4 py-2 transition-colors"
      :disabled="currentPage === 1"
      :class="
        currentPage === 1
          ? 'cursor-not-allowed bg-gray-100 text-gray-400'
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
      "
      @click="handlePrevPage"
    >
      <
    </button>

    <button
      v-for="(page, index) in pageNumbers"
      class="min-w-[44px] rounded-md border px-4 py-2 transition-colors"
      :key="index"
      :disabled="page === '...'"
      :class="
        page === currentPage
          ? 'border-main-green bg-main-green text-white'
          : page === '...'
            ? 'cursor-default border-none bg-white text-gray-400'
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
      "
      @click="page !== '...' && handleGoToPage(page as number)"
    >
      {{ page }}
    </button>

    <button
      class="rounded-md border px-4 py-2 transition-colors"
      :disabled="currentPage === lastPage"
      :class="
        currentPage === lastPage
          ? 'cursor-not-allowed bg-gray-100 text-gray-400'
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
      "
      @click="handleNextPage"
    >
      >
    </button>
  </div>
</template>

<script setup lang="ts">
const pages = defineProps<{
  currentPage: number;
  lastPage: number;
  total: number;
}>();

const { getPageNumbers, goToPage, nextPage, prevPage } = usePagination();

const pageNumbers = computed(() =>
  getPageNumbers(pages.currentPage, pages.lastPage),
);

const handleGoToPage = (page: number) => {
  goToPage(page);
};

const handleNextPage = () => {
  nextPage(pages.currentPage, pages.lastPage);
};

const handlePrevPage = () => {
  prevPage(pages.currentPage);
};
</script>
