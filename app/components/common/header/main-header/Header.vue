<template>
  <header
    class="flex flex-col flex-wrap items-center justify-around pb-5 pt-4 text-black md:flex-row gap-2"
  >
    <NuxtLink to="/" class="header-logo order-1 md:order-none">
      <img src="/assets/logo.png" alt="header-logo" />
    </NuxtLink>

    <div class="order-3 md:order-none">
      <input
        type="search"
        placeholder="Search"
        class="h-[30px] w-[300px] rounded-xl border border-border-gray bg-light-gray px-5 py-[18px] md:h-[43px] md:w-[823px]"
      />
    </div>

    <UserActions class="order-2 md:order-none" />
  </header>
</template>
