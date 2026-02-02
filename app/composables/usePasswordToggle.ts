export function usePasswordToggle() {
  const showPassword = ref(false);
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  const passwordInputType = computed(() => {
    return showPassword.value ? "text" : "password";
  });
  const passwordInputIcon = computed(() => {
    return showPassword.value ? "i:ic-hidden" : "i:ic-password";
  });
  return {
    showPassword,
    togglePassword,
    passwordInputType,
    passwordInputIcon,
  };
}
