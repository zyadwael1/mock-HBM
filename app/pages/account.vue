<template>
  <div class="flex flex-col items-center">
    <h2 class="p-20 text-4xl">My Account</h2>
    <BaseButton text="Logout" class="!w-28" @click="logoutManager" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth-middleware",
});
const { logout } = useAuth();
const logoutManager = () => {
  try {
    logout();
    navigateTo("/sign-in");
  } catch (e) {
    console.error("Logout error:", e);
  }
};
</script>


