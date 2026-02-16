<template>
  <footer class="min-h-[312px]">
    <div
      class="flex min-h-[220px] flex-col justify-between  bg-main-gray px-8 py-10 md:flex-row md:px-[50px] "
    >
      <div>
        <NuxtLink to="/">
          <img src="/assets/logo.png" alt="header-logo" />
        </NuxtLink>
      </div>

      <div class="flex flex-row flex-wrap gap-12 py-5 md:py-0 md:gap-72">
        <div class="flex flex-col text-sm">
          <h2 class="pb-[15px] text-base font-bold">Quick Links</h2>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/cart">Cart</NuxtLink>
          <NuxtLink to="/account">Account</NuxtLink>
          <NuxtLink to="/wishlist">Wishlist</NuxtLink>
        </div>
        <div class="flex flex-col text-sm">
          <h2 class="pb-[15px] text-base font-bold">Help</h2>
          <NuxtLink to="our-branches">Our Branches</NuxtLink>
          <NuxtLink to="/refund">Refund and Return Policy</NuxtLink>
          <NuxtLink to="/shipping-instructions">Shipping Instructions</NuxtLink>
          <NuxtLink to="/terms">Terms and Conditions</NuxtLink>
        </div>
        <div class="flex flex-col text-sm">
          <h2 class="pb-[15px] text-base font-bold">About</h2>
          <NuxtLink to="/contact-us">Contact Us</NuxtLink>
          <NuxtLink to="/faqs">FAQs</NuxtLink>
        </div>
      </div>

      <div class="flex flex-col items-center justify-start text-sm">
        <NuxtLink class="flex h-12 items-center" to="/facebook.com">
          <img src="/assets/SocialsIcon.png" alt="facebook-icon" />
          <span class="px-2">Facebook</span>
        </NuxtLink>
        <div>
          <p>Tax Registration ID : 123456789</p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-between gap-5 bg-[#F4F5F6] px-[30px] py-3 md:h-[92px] md:flex-row"
    >
      <div class="">&copy; Fillcart. All Rights Reserved .</div>
      <div class="flex items-center gap-3">
        <span class="hidden md:block">Payment Powered by</span>
        <img
          src="/assets/Paymob Logo (1) 1.png"
          alt="paymob"
          class="w-[50px]"
        />
        <img
          src="/assets/Mastercard-logo 1.png"
          alt="mastercard"
          class="w-[50px]"
        />
        <img
          src="/assets/58482363cef1014c0b5e49c1 1.png"
          alt="visa"
          class="w-[50px]"
        />
        <img src="/assets/ميزة 1.png" alt="misa" class="w-[50px]" />
      </div>
      <div class="flex gap-[6px]">
        <span>&copy; Powered by</span>
        <img src="/assets/logo (1).png" alt="hbm" />
      </div>
    </div>
  </footer>
</template>
