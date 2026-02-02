<template>
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
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>

<style scoped>
.header-user-actions {
  @apply flex items-center gap-4 text-sm;
}
.user-links {
  @apply flex items-center gap-2;
}
</style>
