<template>
  <header
    class="flex flex-wrap items-center justify-between gap-2 p-4 text-black"
  >
    <NuxtLink to="/" class="header-logo order-1 shrink-0">
      <img src="/assets/logo.png" alt="header-logo" />
    </NuxtLink>

    <div
      class="order-3 flex w-full items-center justify-center gap-3 border-b-2 py-3 sm:order-2 sm:mx-2 sm:w-auto sm:flex-1 sm:border-0 sm:py-0"
    >
      <button
        class="flex h-8 w-8 shrink-0 items-center justify-center sm:hidden"
      >
        <Icon size="24px" name="i:ic-menu"></Icon>
      </button>
      <input
        type="search"
        placeholder="Search"
        class="h-[30px] w-full rounded-xl border border-border-gray bg-light-gray px-5 py-[18px] sm:h-[43px] sm:max-w-[823px]"
      />
    </div>

    <div class="order-2 shrink-0">
      <UserActions />
    </div>
  </header>
</template>
