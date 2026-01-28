export const useAuth = () => {
  const isAuthenticated = useState<boolean>("isAuthenticated", () => false);
  const signIn = () => {
    isAuthenticated.value = true;
  };

  const register = () => {
    isAuthenticated.value = true;
  };

  return {
    isAuthenticated,
    signIn,
    register
  };
};






