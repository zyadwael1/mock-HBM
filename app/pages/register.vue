<template>
  <main class="flex flex-col items-center my-[64px]">
    <div
      class="container w-[600px] h-[896px] flex flex-col items-center justify-between"
    >
      <div class="title">
        <h2 class="text-4xl">Register</h2>
      </div>

      <div class="inputs w-full flex flex-col gap-7 mt-[64px] mb-[60px]">
        <div class="first-name-part flex flex-col">
          <div class="first-name-label">
            <label for="">First Name</label>
            <span class="asterisk ml-[2px] text-[#ED2100]">*</span>
          </div>
          <input
            type="text"
            placeholder="Enter Your First Name"
            class="bg-[#F9F9F9] mt-2 py-4 px-5 rounded-xl h-[51px] border border-[#EAECEF]"
          />
          <p v-if="firstNameError" class="text-red-600 text-sm mt-2 ml-2">
            {{ firstNameError }}
          </p>
        </div>

        <div class="last-name-part flex flex-col">
          <div class="last-name-label">
            <label for="">Last Name</label>
            <span class="asterisk ml-[2px] text-[#ED2100]">*</span>
          </div>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            class="bg-[#F9F9F9] mt-2 py-4 px-5 rounded-xl h-[51px] border border-[#EAECEF]"
          />
          <p v-if="lastNameError" class="text-red-600 text-sm mt-2 ml-2">
            {{ lastNameError }}
          </p>
        </div>

        <div class="mobile-number-part flex flex-col">
          <div class="mobile-number-label">
            <label for="">Mobile Number</label>
            <span class="asterisk ml-[2px] text-[#ED2100]">*</span>
          </div>
          <div class="mobile-number-input flex items-center">
            <div
              class="country-code bg-[#F9F9F9] mt-2 mr-[6px] py-3 px-2 rounded-xl h-[51px] border border-[#EAECEF]"
            >
              +20
            </div>
            <input
              type="number"
              placeholder="xxx xxx xxxx"
              class="bg-[#F9F9F9] mt-2 py-4 px-5 rounded-xl h-[51px]  w-full border border-[#EAECEF]"
            />
          </div>
          <p v-if="mobileNumberError" class="text-red-600 text-sm mt-2 ml-2">
            {{ mobileNumberError }}
          </p>
        </div>

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
          <p v-if="emailError" class="text-red-600 text-sm mt-2 ml-2">
            {{ emailError }}
          </p>
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
            <p v-if="passwordError" class="text-red-600 text-sm mt-2 ml-2">
              {{ passwordError }}
            </p>
        </div>
      </div>
      <div class="buttons flex flex-col items-center w-full">
        
        <BaseButton text="Create Profile" @click="registerManager" />

        <span
          >By continuing you agree to our
          <NuxtLink class="text-main-green" to="/terms">Terms</NuxtLink>
          and
          <NuxtLink class="text-main-green" to="/privacy-policy"
            >Privacy Policy</NuxtLink
          >
        </span>
        <hr class="w-full h-[0.5px] my-5" />
        <span
          >Already have an account?
          <NuxtLink class="text-main-green" to="/sign-in">Sign in</NuxtLink>
        </span>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const firstName = ref("");
const lastName = ref("");
const mobileNumber = ref("");
const email = ref("");
const password = ref("");

const firstNameError = ref("");
const lastNameError = ref("");
const mobileNumberError = ref("");
const emailError = ref("");
const passwordError = ref("");

const { register } = useAuth();

const registerManager = () => {
  firstNameError.value = "";
  lastNameError.value = "";
  mobileNumberError.value = "";
  emailError.value = "";
  passwordError.value = "";

  if (
    !firstName.value ||
    !lastNameError.value ||
    !mobileNumberError.value ||
    !emailError.value ||
    !passwordError.value
  ) {
    firstNameError.value = "Required";
    lastNameError.value = "Required";
    mobileNumberError.value = "Please enter a valid phone number";
    emailError.value = "Field is required";
    passwordError.value = "Required";
    return;
  }

  register();
  navigateTo("/");
};
</script>

<style></style>
