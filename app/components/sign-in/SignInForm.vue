<template>
  <div class="flex h-[492px] w-[600px] flex-col items-center justify-between">
    <div>
      <h2 class="text-4xl">Sign in</h2>
    </div>
    <div class="mb-[60px] mt-[64px] flex w-full flex-col gap-7">
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
    <div class="flex w-full flex-col items-center">
      <BaseButton text="Sign in" @click="signInManager" />
      <span
        >Don’t have an account?
        <NuxtLink class="text-main-green" to="/register">Register</NuxtLink>
      </span>
    </div>
    <FormError :error="formStates.formError" />
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";

const { togglePassword, passwordInputType, passwordInputIcon } =
  usePasswordToggle();
  const emailSchema = z.email();
  const passwordSchema = z.string().length(8);
  
const formStates = ref<any>({
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  formError: "",
});

const { signIn } = useAuth();

const signInManager = async () => {
  formStates.value = {
    ...formStates.value,
    emailError: "",
    passwordError: "",
    formError: "",
  };

  const validatedEmail = emailSchema.safeParse(formStates.value.email);
  const validatedPassword = passwordSchema.safeParse(formStates.value.password);

  if (!!validatedEmail || !!validatedPassword) {
    formStates.value = {
      ...formStates.value,
      emailError: validatedEmail.error?.issues[0]?.message,
      passwordError: validatedPassword.error?.issues[0]?.message,
    };

    return;
  }

  try {
    await signIn(formStates.value.email, formStates.value.password);
    navigateTo("/");
  } catch (e: any) {
    console.error("Login error:", e);
    console.error("Error data:", e.data);
    console.error("Error message:", e.data?.meta?.errors);

    if (e.data?.meta?.errors?.[0]?.message) {
      formStates.value.formError = e.data.meta.errors[0].message;
    } else {
      formStates.value.formError = "Login failed. Please try again.";
    }
  }
};
</script>
