<template>
    <div class="products-list-back-container flex justify-center items-center h-[49px] bg-[#F9F9F9] border-b-[0.5px] border-[#DFE1E3] ">
    <ul class="w-[80%] flex justify-around">
        <li 
        v-for="product in products"
        class=""
        >
            <NuxtLink to='product-path'>{{ product }}</NuxtLink>
        </li>
    </ul>
    </div>
</template>
<script setup lang="ts">
const products = {
    1 :"Air conditioners",
    2 :"Washing Machines",
    3 :"Television",
    4 :"Fans",
    5 :"Water Heater",
    6 :"Water Filters",
    7 :"Refrigerator",
    8 :"Vacuum Cleaner",
    9 :"Brands",
}
</script>
<style scoped></style>
