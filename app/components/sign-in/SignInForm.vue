<template>
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
          <span v-if="isEmailEmpty" class="asterisk ml-[2px] text-alert"
            >*</span
          >
        </div>
        <input
          v-model="email"
          type="email"
          placeholder="Enter Your Email Address"
          class="bg-light-gray mt-2 py-4 px-5 rounded-xl h-[51px] border border-border-gray"
        />
        <p v-if="emailError" class="text-red-600 text-sm mt-2 ml-2">
          {{ emailError }}
        </p>
      </div>

      <div class="password-part flex flex-col">
        <div class="password-label">
          <label for="">Password</label>
          <span v-if="isPasswordEmpty" class="asterisk ml-[2px] text-alert"
            >*</span
          >
        </div>
        <div class="password-input relative">
          <input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            class="bg-light-gray mt-2 py-4 px-5 rounded-xl h-[51px] w-full border border-border-gray"
          />
          <p v-if="passwordError" class="text-red-600 text-sm mt-2 ml-2">
            {{ passwordError }}
          </p>
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
      <BaseButton text="Sign in" @click="signInManager" />
      <span
        >Don’t have an account?
        <NuxtLink class="text-main-green" to="/register">Register</NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");

const emailError = ref("");
const passwordError = ref("");

//for asterisk
const isEmailEmpty = ref(true);
const isPasswordEmpty = ref(true);

const { signIn } = useAuth();
const signInManager = () => {
  emailError.value = "";
  passwordError.value = "";

  if (!email.value || !password.value) {
    emailError.value = "Field is required";
    passwordError.value = "Required";

    return;
  }

  signIn();
  navigateTo("/");
};
</script>

<style scoped></style>
