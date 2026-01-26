<template>
  <footer class="h-[312px]">
    <div class="primary-footer">
      <div class="logo">
        <NuxtLink to="/">
          <!-- <NuxtImg src="~/assets/logo.png" /> -->
          <img src="/assets/logo.png" alt="header-logo" />
        </NuxtLink>
      </div>
      <div class="quick-links links-style">
        <h2 class="links-title">Quick Links</h2>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart">Cart</NuxtLink>
        <NuxtLink to="/account">Account</NuxtLink>
        <NuxtLink to="/wishlist">Wishlist</NuxtLink>
      </div>
      <div class="help-links links-style">
        <h2 class="links-title">Help</h2>
        <NuxtLink to="our-branches">Our Branches</NuxtLink>
        <NuxtLink to="/refund">Refund and Return Policy</NuxtLink>
        <NuxtLink to="/shipping-instructions">Shipping Instructions</NuxtLink>
        <NuxtLink to="/terms">Terms and Conditions</NuxtLink>
      </div>
      <div class="about-links links-style">
        <h2 class="links-title">About</h2>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
        <NuxtLink to="/faqs">FAQs</NuxtLink>
      </div>
      <div class="info">
        <NuxtLink class="facebook-logo" to="/facebook.com">
          <img src="/assets/SocialsIcon.png" alt="facebook-icon" />
          <span class="pl-2">Facebook</span>
        </NuxtLink>
        <div class="info-details">
          <p>Tax Registration ID : 123456789</p>
        </div>
      </div>
    </div>
    <div class="secondary-footer">
      <div class="copy-rights-1">&copy; Fillcart. All Rights Reserved .</div>
      <div class="payment-logos">
        <span>Payment Powered by</span>
        <img src="/assets/Paymob Logo (1) 1.png" alt="paymob" />
        <img src="/assets/Mastercard-logo 1.png" alt="mastercard" />
        <img src="/assets/58482363cef1014c0b5e49c1 1.png" alt="visa" />
        <img src="/assets/ميزة 1.png" alt="misa" />
      </div>
      <div class="copy-rights-2">
        <span>&copy; Powered by</span>
        <img src="/assets/logo (1).png" alt="hbm" />
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style>
.primary-footer {
  @apply h-[220px] flex justify-around py-10 px-[50px] bg-main-gray;
}
.links-style {
  @apply flex flex-col text-sm;
}
.links-title {
  @apply font-bold text-base pb-[15px];
}
.info {
  @apply text-sm flex flex-col justify-start items-center;
}
.facebook-logo {
  @apply flex h-12 mb-[18px] items-center;
}
.secondary-footer {
  @apply bg-[#F4F5F6] h-[92px] flex justify-between items-center px-[30px];
}
.payment-logos {
  @apply flex gap-3;
}
.copy-rights-2 {
  @apply flex gap-[6px];
}
</style>
