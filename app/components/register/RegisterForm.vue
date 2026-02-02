<template>
  <main class="my-[64px] flex flex-col items-center">
    <div
      class="container flex h-[896px] w-[600px] flex-col items-center justify-between"
    >
      <div class="title">
        <h2 class="text-4xl">Register</h2>
      </div>

      <div class="inputs mb-[60px] mt-[64px] flex w-full flex-col gap-7">
        <BaseInput
          v-model="formStates.firstName"
          label="First Name"
          type="text"
          placeholder="Enter Your First Name"
          :error="formStates.firstNameError"
        />

        <BaseInput
          v-model="formStates.lastName"
          label="Last Name"
          type="text"
          placeholder="Enter Your Last Name"
          :error="formStates.lastNameError"
        />

        <div class="mobile-number-part flex flex-col">
          <div class="mobile-number-label">
            <label for="">Mobile Number</label>
            <span class="asterisk ml-[2px] text-alert">*</span>
          </div>
          <div class="mobile-number-input flex items-center">
            <div
              class="country-code mr-[6px] mt-2 h-[51px] rounded-xl border border-border-gray bg-light-gray px-2 py-3"
            >
              +20
            </div>
            <input
              v-model="formStates.mobileNumber"
              type="string"
              placeholder="xxx xxx xxxx"
              class="mt-2 h-[51px] w-full rounded-xl border border-border-gray bg-light-gray px-5 py-4"
            />
          </div>

          <p
            v-if="formStates.mobileNumberError"
            class="ml-2 mt-2 text-sm text-alert"
          >
            {{ formStates.mobileNumberError }}
          </p>
        </div>

        <BaseInput
          v-model="formStates.email"
          label="Email Address"
          type="email"
          placeholder="Enter Your Email Address"
          :error="formStates.emailError"
        />

        <div class="password-part flex flex-col">
          <div class="password-label">
            <label for="">Password</label>
            <span class="asterisk ml-[2px] text-alert">*</span>
          </div>
          <div class="password-input relative">
            <input
              v-model="formStates.password"
              type="password"
              placeholder="Enter Password"
              class="mt-2 h-[51px] w-full rounded-xl border border-border-gray bg-light-gray px-5 py-4"
            />

            <Icon
              name="i:ic-password"
              class="absolute right-5 top-6 text-xl text-[#3B3B3B]"
            ></Icon>
          </div>

          <p
            v-if="formStates.passwordError"
            class="ml-2 mt-2 text-sm text-alert"
          >
            {{ formStates.passwordError }}
          </p>
        </div>
      </div>
      <div class="buttons flex w-full flex-col items-center">
        <BaseButton text="Create Profile" @click="registerManager" />

        <span
          >By continuing you agree to our
          <NuxtLink class="text-main-green" to="/terms">Terms</NuxtLink>
          and
          <NuxtLink class="text-main-green" to="/privacy-policy"
            >Privacy Policy</NuxtLink
          >
        </span>
        <hr class="my-5 h-[0.5px] w-full" />
        <span
          >Already have an account?
          <NuxtLink class="text-main-green" to="/sign-in">Sign in</NuxtLink>
        </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { type userAuth, type RegisterResponse } from "../../types/types";


const formStates = ref({
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  password: "",
  firstNameError: "",
  lastNameError: "",
  mobileNumberError: "",
  emailError: "",
  passwordError: "",
});

const { register } = useAuth();
const token = useCookie("access_token");
const user = useState<userAuth | null>("user", () => null);

const registerManager = async () => {
  ((formStates.value.firstNameError = ""),
    (formStates.value.lastNameError = ""),
    (formStates.value.mobileNumberError = ""),
    (formStates.value.emailError = ""),
    (formStates.value.passwordError = ""));

  if (
    !formStates.value.firstName ||
    !formStates.value.lastName ||
    !formStates.value.mobileNumber ||
    !formStates.value.email ||
    !formStates.value.password
  ) {
    formStates.value.firstNameError = "Required";
    formStates.value.lastNameError = "Required";
    formStates.value.mobileNumberError = "Required";
    formStates.value.emailError = "Required";
    formStates.value.passwordError = "Required";
    return;
  }
  try {
    const authResponse = await $fetch<RegisterResponse>(
      "https://fillcart.staging.hbm.studio/api/v1/register",
      {
        method: "POST",
        body: {
          first_name: formStates.value.firstName,
          last_name: formStates.value.lastName,
          mobile: formStates.value.mobileNumber,
          email: formStates.value.email,
          password: formStates.value.password,
          device_name: "web-browser",
          country_code: "+20",
        },
      },
    );

    token.value = authResponse.data.access_token;
    user.value = authResponse.data.user;
    navigateTo("/");
  } catch (e) {
    formStates.value.emailError = "Error";
  }
};
</script>

<style scoped></style>
