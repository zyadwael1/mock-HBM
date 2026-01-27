<template>
  <header>
    <div class="header-container">
      <div class="header-logo">
        <NuxtLink to="/">
          <img src="/assets/logo.png" alt="header-logo" />
        </NuxtLink>
      </div>

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
    </div>
  </header>
</template>
<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>
<style scoped>
.header-container {
  @apply text-black h-[81px] flex items-center justify-around pt-4 pb-5;
}
.header-search-bar-input {
  @apply bg-[#F9F9F9] w-[823px] px-5 py-3 rounded-xl h-[43px] mt-[18px] border border-[#EAECEF];
}
.header-user-actions {
  @apply flex gap-4 text-sm items-center;
}
.user-links {
  @apply flex items-center gap-2;
}
</style>
