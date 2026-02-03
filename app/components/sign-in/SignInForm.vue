<template>
  <div
    class="container flex h-[492px] w-[600px] flex-col items-center justify-between"
  >
    <div class="title">
      <h2 class="text-4xl">Sign in</h2>
    </div>
    <div class="inputs mb-[60px] mt-[64px] flex w-full flex-col gap-7">
      <BaseInput
        v-model="formStates.email"
        label="Email Address"
        type="email"
        placeholder="Enter Your Email Address"
        :error="formStates.emailError"
      />

      <BaseInput
        v-model="formStates.password"
        label="Password"
        placeholder="Enter Your Password"
        :type="passwordInputType"
        :error="formStates.passwordError"
      >
        <template #trailing>
          <Icon :name="passwordInputIcon" @click="togglePassword" />
        </template>
      </BaseInput>

      <NuxtLink class="mt-2 self-end text-main-green" to="/forget-password">
        Forgot password?
      </NuxtLink>
    </div>
    <div class="buttons flex w-full flex-col items-center">
      <BaseButton text="Sign in" @click="signInManager" />
      <span
        >Don’t have an account?
        <NuxtLink class="text-main-green" to="/register">Register</NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type userAuth, type LoginResponse } from "../../types/types";

const { togglePassword, passwordInputType, passwordInputIcon } =
  usePasswordToggle();

const formStates = ref({
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
});

const { signIn } = useAuth();
const authToken = useCookie("access_token");
const user = useState<userAuth | null>("user", () => null);

const signInManager = async () => {
  formStates.value = {
    ...formStates.value,
    emailError: "",
    passwordError: "",
  };

  if (!formStates.value.email || !formStates.value.password) {
    formStates.value = {
      ...formStates.value,
      emailError: "Required",
      passwordError: "Required",
    };

    return;
  }

  try {
    const authResponse = await $fetch<LoginResponse>(
      "https://fillcart.staging.hbm.studio/api/v1/login",
      {
        method: "POST",
        body: {
          email: formStates.value.email,
          password: formStates.value.password,
        },
      },
    );

    authToken.value = authResponse.data.access_token;
    user.value = authResponse.data.user;
    navigateTo("/");
  } catch (e) {
    formStates.value.emailError = "Error";
  }
};
</script>
