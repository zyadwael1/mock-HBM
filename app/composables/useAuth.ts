import { type userAuth, type LoginResponse, type RegisterResponse  } from "../types/types";

export function useAuth() {
  const authToken = useCookie("access_token");
  const user = useState<userAuth | null>("user", () => null);
  const isAuthenticated = computed(() => !!authToken.value);

  const signIn = async (email: string, password: string) => {

    
    const authResponse = await $fetch<LoginResponse>(
      "https://fillcart.staging.hbm.studio/api/v1/login",
      {
        method: "POST",
        body: {
          email,
          password,
        },
      },
    );

    console.log("Login successful!", authResponse);
    console.log("Token:", authResponse.data.access_token);

    authToken.value = authResponse.data.access_token;
    user.value = authResponse.data.user;

    console.log("Cookie set:", authToken.value);
    return authResponse;
  };

  const register = async (firstName: string, lastName: string, mobileNumber: string, email: string, password: string) => {
    const authResponse = await $fetch<RegisterResponse>(
      "https://fillcart.staging.hbm.studio/api/v1/register",
      {
        method: "POST",
        body: {
          first_name: firstName,
          last_name: lastName,
          mobile: mobileNumber,
          email,
          password,
          device_name: "web-browser",
          country_code: "+20",
        },
      },
    );

    console.log("Register successful!", authResponse);
    console.log("Token:", authResponse.data.token);

    authToken.value = authResponse.data.token;
    user.value = authResponse.data.user;

    console.log("Cookie set:", authToken.value);
    return authResponse;
  };
  const logout = () => {
    authToken.value = null;
    user.value = null;
  }


  return {
    user,
    authToken,
    isAuthenticated,
    signIn,
    register,
    logout
  };
}
