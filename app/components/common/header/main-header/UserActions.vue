<template>
  <div class="flex items-center gap-4 text-sm">
    <div v-if="isAuthenticated" class="account">
      <NuxtLink to="/account" class="flex items-center gap-2 hover:font-semibold">
        <Icon size="24px" name="i:ic-user"></Icon>
        Account
      </NuxtLink>
    </div>

    <div v-else class="signIn-register">
      <NuxtLink to="/sign-in" class="hover:font-semibold">Sign in</NuxtLink> /
      <NuxtLink to="/register" class="hover:font-semibold">Register</NuxtLink>
    </div>

    <div class="wishlist">
      <NuxtLink to="/wishlist" class="flex items-center gap-2 hover:font-semibold">
        <Icon size="24px" name="i:ic-favorite"></Icon>
        Wishlist
      </NuxtLink>
    </div>
    <div class="cart2">
      <NuxtLink to="/cart" class="flex items-center gap-2 hover:font-semibold">
        <Icon size="24px" name="i:ic-cart"></Icon>
        Cart
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>

