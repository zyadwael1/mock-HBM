<template>
  <main class="relative" ref="dropdownRef">
    <button
      class="flex h-10 min-w-28 items-center justify-around rounded-xl border-[0.5px] border-gray-200 px-2 hover:bg-gray-50 md:w-48"
      @click="handleDropdown"
    >
      <span> {{ isThereAnOption ? currentLabel : "Sort by" }} </span>
      <Icon name="i:ic-arrow-down" class="text-2xl text-black" />
    </button>

    <div
      v-if="isOptionsOpen"
      class="absolute z-10 w-48 rounded-xl border-[0.5px] border-gray-200 bg-white"
    >
      <p
        v-for="(option, key) in sortingOptions"
        class="cursor-pointer p-2 hover:bg-gray-100"
        :key="key"
        @click="handleSorting(option, key)"
      >
        {{ key }}
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
const { sortByOption } = useSort();
const isOptionsOpen = ref(false);
const currentLabel = ref("Default");
const isThereAnOption = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const sortingOptions = {
  Default: "",
  Alphabetical: "title",
  Latest: "created_at",
  "Price High-Low": "-price",
  "Price Low-High": "price",
};
const handleDropdown = () => {
  isOptionsOpen.value = !isOptionsOpen.value;
};

const handleSorting = (option: string, key: string) => {
  isThereAnOption.value = true;
  currentLabel.value = key;
  sortByOption(option);
  isOptionsOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOptionsOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
