<template>
  <div>
    <div class="email-part flex flex-col">
      <div class="email-label">
        <label>{{ label }}</label>
        <span class="asterisk ml-[2px] text-alert">*</span>
      </div>
      <input
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :type="type"
        :placeholder="placeholder"
        class="bg-light-gray mt-2 py-4 px-5 rounded-xl h-[51px] border border-border-gray"
      />
      <p class="text-alert text-sm mt-2 ml-2">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: String,
  label: String,
  type: String,
  placeholder: String,
  error: String,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
