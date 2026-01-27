export const useAuth = () => {
  const isAuthenticated = useState<boolean>("isAuthenticated", () => false);
  const signIn = () => {
    isAuthenticated.value = true;
  };
  const signOut = () => {
    isAuthenticated.value = false;
    navigateTo("/login");
  };
  return {
    isAuthenticated,
    signIn,
    signOut,
  };
};
