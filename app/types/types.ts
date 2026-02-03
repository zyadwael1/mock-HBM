export interface RegisterResponse {
  data: {
    token: string;
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
export type CategoriesResponse = {
  meta: string;
  data: CategoryType[];
  pagination: number;
};

export type CategoryType = {
  id: string;
  title: string;
  order: number;
  children: any;
  category_image: string;
  category_image_ar: string;
  breadcrumbs_image: string;
  parent_category?: any;
};
