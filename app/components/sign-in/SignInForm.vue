<template>
  <div
    class="container flex h-[492px] w-[600px] flex-col items-center justify-between"
  >
    <div class="title">
      <h2 class="text-4xl">Sign in</h2>
    </div>
    <div class="inputs mb-[60px] mt-[64px] flex w-full flex-col gap-7">
      <!-- 
      <div class="email-part flex flex-col">
        <div class="email-label">
          <label for="">Email Address</label>
          <span  class="asterisk ml-[2px] text-alert"
            >*</span
          >
        </div>
        <input
          v-model="email"
          type="email"
          placeholder="Enter Your Email Address"
          class="bg-light-gray mt-2 py-4 px-5 rounded-xl h-[51px] border border-border-gray"
        />
        <p v-if="emailError" class="text-alert text-sm mt-2 ml-2">
          {{ emailError }}
        </p>
      </div> -->

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
        type="password"
        placeholder="Enter Your Password"
        :error="formStates.passwordError"
      >
        <template #trailing>
          <Icon name="i:ic-password" @click="console.log('dd')" />
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
interface LoginResponse {
  data: {
    access_token: string;
    user: userAuth;
  };
}
interface userAuth {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  is_verified: boolean;
}

const formStates = ref({
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
});

const { signIn } = useAuth();
const token = useCookie("access_token");
const user = useState<userAuth | null>("user", () => null);

const signInManager = async () => {
  formStates.value = {
    ...formStates.value,
    emailError: "",
    passwordError: "",
  };

  if (!formStates.value.email || !formStates.value.password) {
    formStates.value.emailError = "Field is required";
    formStates.value.passwordError = "Required";

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

      token.value = authResponse.data.access_token;
      user.value = authResponse.data.user;

      navigateTo("/");
    } catch (e) {
      formStates.value.emailError = "Error";
    }

    return;
  }

  signIn();
  navigateTo("/");
};
</script>

<style scoped></style>
