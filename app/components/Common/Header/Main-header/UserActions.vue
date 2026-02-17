<template>
  <div class="flex items-center gap-4 text-sm">
    <div v-if="isAuthenticated" class="flex items-center gap-2">
      <Icon size="24px" name="i:ic-user"></Icon>
      <NuxtLink to="/account" class="hidden hover:font-semibold sm:block">
        Account
      </NuxtLink>
    </div>

    <div v-else>
      <div class="hidden sm:block">
        <NuxtLink to="/sign-in" class="hover:font-semibold">Sign in</NuxtLink> /
        <NuxtLink to="/register" class="hover:font-semibold">Register</NuxtLink>
      </div>
      <div class="flex items-center gap-2 sm:hidden">
        <Icon size="24px" name="i:ic-user"></Icon>
        <NuxtLink to="/account" class="hidden hover:font-semibold sm:block">
          Account
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <Icon size="24px" name="i:ic-favorite"></Icon>
      <NuxtLink to="/wishlist" class="hidden hover:font-semibold sm:block">
        Wishlist
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2">
      <Icon size="24px" name="i:ic-cart"></Icon>
      <NuxtLink to="/cart" class="hidden hover:font-semibold sm:block">
        Cart
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>
