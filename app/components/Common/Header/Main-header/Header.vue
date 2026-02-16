<template>
  <header
    class="flex flex-row flex-wrap items-center justify-around gap-2 pb-5 pt-4 text-black "
  >
    <NuxtLink to="/" class="header-logo order-1 md:order-none">
      <img src="/assets/logo.png" alt="header-logo" />
    </NuxtLink>

    <div
      class="order-last flex w-full items-center justify-center gap-3 md:order-none md:w-auto py-3 border-b-2 md:border-0"
    >
      <button class="flex h-8 w-8 items-center justify-center md:hidden">
        <Icon size="24px" name="i:ic-menu"></Icon>
      </button>
      <input
        type="search"
        placeholder="Search"
        class="h-[30px] w-[300px] rounded-xl border border-border-gray bg-light-gray px-5 py-[18px] md:h-[43px] md:w-[823px]"
      />
    </div>
    <UserActions class="order-2 md:order-none" />
  </header>
</template>
