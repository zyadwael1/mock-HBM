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

    <UserActions />
  </header>
</template>


<style scoped>
.header-container {
  @apply flex h-[81px] items-center justify-around pb-5 pt-4 text-black;
}
.header-search-bar-input {
  @apply mt-[18px] h-[43px] w-[823px] rounded-xl border border-border-gray bg-light-gray px-5 py-3;
}
</style>
