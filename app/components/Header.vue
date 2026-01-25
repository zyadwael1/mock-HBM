<template>
  <header>
    <div class="container text-black h-[81px] flex items-center justify-around pt-4 pb-5">
      <div class="header-logo">
        <NuxtLink to="/">
          <!-- <NuxtImg src="~/assets/logo.png" /> -->
          <img src="/assets/logo.png" alt="header-logo" />
        </NuxtLink>
      </div>

      <div class="header-search-bar">
        <!-- <Icon size="24px" name="i:ic-search"></Icon> -->
        <input
          type="search"
          placeholder="Search"
          class="bg-[#F9F9F9] w-[823px] px-5 py-3 rounded-xl h-[43px] mt-[18px] border border-[#EAECEF]"
        />
      </div>

      <div class="header-user-actions flex gap-4 text-sm">
        <div class="account">
          <NuxtLink to="/account" class="flex items-center gap-2">
            <Icon size="24px" name="i:ic-user"></Icon>
            Account
          </NuxtLink>
        </div>
        <div class="wishlist">
          <NuxtLink to="/wishlist" class="flex items-center gap-2">
            <Icon size="24px" name="i:ic-favorite"></Icon>
            Wishlist
          </NuxtLink>
        </div>
        <div class="cart2">
          <NuxtLink to="/cart" class="flex items-center gap-2">
            <Icon size="24px" name="i:ic-cart"></Icon>
            Cart
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped></style>
