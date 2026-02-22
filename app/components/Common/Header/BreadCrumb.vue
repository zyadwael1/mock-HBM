<template>
  <nav
    v-if="route.path !== '/'"
    class="flex gap-1 px-6 py-[10px] text-sm sm:px-12"
  >
    <NuxtLink to="/">Home</NuxtLink>

    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <span> / </span>
      <NuxtLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">
        {{ crumb.label }}
      </NuxtLink>
      <span v-else class="text-gray-500">{{ crumb.label }}</span>
    </template>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const pathLabels: Record<string, string> = {
  products: "Products",
  account: "Account",
  register: "Register",
  "sign-in": "Sign In",
};

const breadcrumbs = computed(() => {
  const path = route.path.split("/").filter(Boolean);

  return path.map((segment, index) => ({
    label:
      pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
    path: "/" + path.slice(0, index + 1).join("/"),
  }));
});
</script>
