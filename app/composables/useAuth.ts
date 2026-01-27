export const useAuth = () => {
  const isAuthenticated = useState<boolean>("isAuthenticated", () => false);
  const signIn = () => {
    isAuthenticated.value = true;
  };

  return {
    isAuthenticated,
    signIn,
  };
};
