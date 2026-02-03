<template>
  <div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-1">
        <label>{{ label }}</label>
        <span class="text-alert">*</span>
      </div>

      <div class="relative w-full">
        <input
          v-model="modelValue"
          class="w-full rounded-xl border border-border-gray bg-light-gray px-5 py-3 focus:outline-main-green "
          :type
          :placeholder
        />

        <div class="absolute right-5 top-3.5 text-xl text-[#3B3B3B]">
          <slot name="trailing" />
        </div>
      </div>

      <p v-if="error" class="px-2 text-sm text-alert">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  type: String,
  placeholder: String,
  error: String,
});

const modelValue = defineModel<string>();
</script>
