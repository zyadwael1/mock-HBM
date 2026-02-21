<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <Categories />
    <BreadCrumb />
    <main class="grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>
