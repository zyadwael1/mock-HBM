<template>
  <main class="flex flex-col items-center my-[64px]">
    <div
      class="container w-[600px] h-[492px] flex flex-col items-center justify-between"
    >
      <div class="title">
        <h2 class="text-4xl">Sign in</h2>
      </div>
      <div class="inputs w-full flex flex-col gap-7 mt-[64px] mb-[60px]">
        <div class="email-part flex flex-col">
          <div class="email-label">
            <label for="">Email Address</label>
            <span class="asterisk ml-[2px] text-[#ED2100]">*</span>
          </div>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            class="bg-[#F9F9F9] mt-2 py-4 px-5 rounded-xl h-[51px] border border-[#EAECEF]"
          />
        </div>

        <div class="password-part flex flex-col">
          <div class="password-label">
            <label for="">Password</label>
            <span class="asterisk ml-[2px] text-[#ED2100]">*</span>
          </div>
          <div class="password-input relative">
            <input
              type="password"
              placeholder="Enter Password"
              class="bg-[#F9F9F9] mt-2 py-4 px-5 rounded-xl h-[51px] w-full border border-[#EAECEF]"
            />
            <Icon
              name="i:ic-password"
              class="absolute top-6 right-5 text-xl text-[#3B3B3B]"
            ></Icon>
          </div>
          <NuxtLink class="self-end text-main-green mt-2" to="/forget-password"
            >Forgot password?</NuxtLink
          >
        </div>
      </div>
      <div class="buttons flex flex-col items-center w-full">
        <button
          class="w-full bg-main-green h-[47px] text-white rounded-xl py-[14px] px-4 mb-5"
          @click="signInManager"
        >
          Sign In
        </button>
        <span
          >Don’t have an account?
          <NuxtLink class="text-main-green" to="/register">Register</NuxtLink>
        </span>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const email = ref("");
const password = ref("");
const { signIn } = useAuth();
const signInManager = () => {
  signIn()
  navigateTo('/')
}


</script>

<style></style>
