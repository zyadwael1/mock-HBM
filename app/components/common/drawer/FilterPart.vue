<template>
    <div>
         <div class="flex" @click="handleFilter">
             <h3>{{ title }}</h3>
              <Icon
                :name="isFilterOpen ? 'i:ic-minus' : 'i:ic-plus'"
                class="text-2xl text-black md:text-3xl"
                
              />
         </div>
          <div v-if="isFilterOpen">
            <slot />
          </div>
    </div>
</template>

<script setup lang="ts">
const isFilterOpen = ref<boolean>(false);

defineProps<{title: String}>()
const handleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value;
};


</script>
