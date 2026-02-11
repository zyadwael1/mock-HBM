<template>
  <footer class="min-h-[312px] ">
    <div
      class="flex min-h-[220px] flex-col justify-around bg-main-gray px-[50px] py-10 md:flex-row"
    >
      <div class="logo">
        <NuxtLink to="/">
          <img src="/assets/logo.png" alt="header-logo" />
        </NuxtLink>
      </div>
      <div class="flex flex-col text-sm">
        <h2 class="pb-[15px] text-base font-bold">Quick Links</h2>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart">Cart</NuxtLink>
        <NuxtLink to="/account">Account</NuxtLink>
        <NuxtLink to="/wishlist">Wishlist</NuxtLink>
      </div>
      <div class="help-links flex flex-col text-sm">
        <h2 class="pb-[15px] text-base font-bold">Help</h2>
        <NuxtLink to="our-branches">Our Branches</NuxtLink>
        <NuxtLink to="/refund">Refund and Return Policy</NuxtLink>
        <NuxtLink to="/shipping-instructions">Shipping Instructions</NuxtLink>
        <NuxtLink to="/terms">Terms and Conditions</NuxtLink>
      </div>
      <div class="about-links flex flex-col text-sm">
        <h2 class="pb-[15px] text-base font-bold">About</h2>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
        <NuxtLink to="/faqs">FAQs</NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-start text-sm">
        <NuxtLink class="mb-[18px] flex h-12 items-center" to="/facebook.com">
          <img src="/assets/SocialsIcon.png" alt="facebook-icon" />
          <span class="pl-2">Facebook</span>
        </NuxtLink>
        <div class="info-details">
          <p>Tax Registration ID : 123456789</p>
        </div>
      </div>
    </div>
    <div
      class="flex h-[92px] flex-col items-center justify-between bg-[#F4F5F6] px-[30px] md:flex-row"
    >
      <div class="copy-rights-1">&copy; Fillcart. All Rights Reserved .</div>
      <div class="flex gap-3">
        <span>Payment Powered by</span>
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
