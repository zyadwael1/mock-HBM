<template>
  <main class="my-[64px] flex flex-col items-center">
    <div class="flex min-h-[896px] w-[600px] flex-col items-center justify-between">
      <div>
        <h2 class="text-4xl">Register</h2>
      </div>

      <div class="mb-[60px] mt-[64px] flex w-full flex-col gap-7">
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

        <div class="flex flex-col">
          <div>
            <label for="">Mobile Number</label>
            <span class="asterisk ml-[2px] text-alert">*</span>
          </div>
          <div class="mobile-number-input flex items-center">
            <div
              class="mr-[6px] mt-2 h-[51px] rounded-xl border border-border-gray bg-light-gray px-2 py-3"
            >
              +20
            </div>
            <input
              v-model="formStates.mobileNumber"
              type="string"
              placeholder="xxx xxx xxxx"
              class="mt-2 h-[51px] w-full rounded-xl border border-border-gray bg-light-gray px-5 py-4 focus:outline-main-green"
              @blur="validateInput('mobileNumber')"
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
          @blur="validateInput('email')"
        />

        <BaseInput
          v-model="formStates.password"
          label="Password"
          placeholder="Enter Your Password"
          :type="passwordInputType"
          :error="formStates.passwordError"
          @blur="validateInput('password')"
        >
          <template #trailing>
            <Icon :name="passwordInputIcon" @click="togglePassword" />
          </template>
        </BaseInput>
      </div>
      <div class="flex w-full flex-col items-center">
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
    <FormError :error="formStates.formError" />
  </main>
</template>

<script setup lang="ts">
const { togglePassword, passwordInputType, passwordInputIcon } =
  usePasswordToggle();

const { emailSchema, passwordSchema, mobileNumberSchema } = useZodValidation();

const formStates = ref<any>({
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
  formError: "",
});
const { register } = useAuth();

function validateInput(input: "mobileNumber" | "email" | "password") {
  if (input === "mobileNumber") {
    const result = mobileNumberSchema.safeParse(formStates.value.mobileNumber);
    if (result.success || formStates.value.mobileNumber === "") {
      formStates.value.mobileNumberError = "";
    } else {
      formStates.value.mobileNumberError =
        result.error.issues[0]?.message || "Invalid Number";
    }
  } else if (input === "email") {
    const result = emailSchema.safeParse(formStates.value.email);
    if (result.success || formStates.value.email === "") {
      formStates.value.emailError = "";
    } else {
      formStates.value.emailError =
        result.error.issues[0]?.message || "Invalid Email";
    }
  } else {
    const result = passwordSchema.safeParse(formStates.value.password);
    if (result.success || formStates.value.password === "") {
      formStates.value.passwordError = "";
    } else {
      formStates.value.passwordError =
        result.error.issues[0]?.message || "Invalid Password";
    }
  }
}

const registerManager = async () => {
  formStates.value = {
    ...formStates.value,
    firstNameError: "",
    lastNameError: "",
    mobileNumberError: "",
    emailError: "",
    passwordError: "",
    formError: "",
  };
  const validatedEmail = emailSchema.safeParse(formStates.value.email);
  const validatedPassword = passwordSchema.safeParse(formStates.value.password);
  const validatedMobileNumber = mobileNumberSchema.safeParse(
    formStates.value.mobileNumber,
  );

  if (
    !formStates.value.firstName ||
    !formStates.value.lastName ||
    !validatedMobileNumber.success ||
    !validatedEmail.success ||
    !validatedPassword.success
  ) {
    formStates.value = {
      ...formStates.value,
      firstNameError: "Required",
      lastNameError: "Required",
      mobileNumberError: validatedMobileNumber.error?.issues[0]?.message,
      emailError: validatedEmail.error?.issues[0]?.message,
      passwordError: validatedPassword.error?.issues[0]?.message,
    };

    return;
  }
  try {
    await register(
      formStates.value.firstName,
      formStates.value.lastName,
      formStates.value.mobileNumber,
      formStates.value.email,
      formStates.value.password,
    );
    navigateTo("/");
  } catch (e: any) {
    console.error("Register error:", e);
    console.error("Error data:", e.data);
    console.error("Error message:", e.data?.meta?.errors);

    if (e.data?.meta?.errors?.[0]?.message) {
      formStates.value.formError = e.data.meta.errors[0].message;
    } else {
      formStates.value.formError = "Register failed. Please try again.";
    }
  }
};
</script>
