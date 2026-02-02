<template>
  <header class="header-container">
    <NuxtLink to="/" class="header-logo">
      <img src="/assets/logo.png" alt="header-logo" />
    </NuxtLink>

    <div class="header-search-bar">
      <!-- <Icon size="24px" name="i:ic-search"></Icon> -->
      <input
        type="search"
        placeholder="Search"
        class="header-search-bar-input"
      />
    </div>

    <div class="header-user-actions">
      <div v-if="isAuthenticated" class="account">
        <NuxtLink to="/account" class="user-links">
          <Icon size="24px" name="i:ic-user"></Icon>
          Account
        </NuxtLink>
      </div>

      <div v-else class="signIn-register">
        <NuxtLink to="/sign-in">Sign in</NuxtLink> /
        <NuxtLink to="/register">Register</NuxtLink>
      </div>

      <div class="wishlist">
        <NuxtLink to="/wishlist" class="user-links">
          <Icon size="24px" name="i:ic-favorite"></Icon>
          Wishlist
        </NuxtLink>
      </div>
      <div class="cart2">
        <NuxtLink to="/cart" class="user-links">
          <Icon size="24px" name="i:ic-cart"></Icon>
          Cart
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>

<style scoped>
.header-container {
  @apply flex h-[81px] items-center justify-around pb-5 pt-4 text-black;
}
.header-search-bar-input {
  @apply mt-[18px] h-[43px] w-[823px] rounded-xl border border-border-gray bg-light-gray px-5 py-3;
}
.header-user-actions {
  @apply flex items-center gap-4 text-sm;
}
.user-links {
  @apply flex items-center gap-2;
}
</style>
