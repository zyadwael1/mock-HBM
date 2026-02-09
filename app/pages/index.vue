<template>
  
  <div class="flex flex-col items-center">
    <h2 class="p-20 text-center text-4xl">Home Page</h2>
    <BaseButton text="All Products" class="!w-36 text-center" @click="navigateAllProducts"/>
  </div>
</template>
<script setup lang="ts">
const navigateAllProducts = () => {

    navigateTo("/products");

};</script>
<style scoped></style>
