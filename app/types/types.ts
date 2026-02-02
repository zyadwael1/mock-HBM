export interface RegisterResponse {
  data: {
    access_token: string;
    user: userAuth;
  };
}

export type LoginResponse = {
  data: {
    access_token: string;
    user: userAuth;
  };
};
export type userAuth = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  is_verified: boolean;
};
