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
  pagination: {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
  };
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
export type CategoryState = {
  id: string;
  title: string;
};

// ===== PRODUCTS TYPES (CORRECTED) =====
export type ProductsResponse = {
  meta: {
    code: number;
    errors: any[];
  };
  data: ProductType[];
  pagination: {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
  };
};

export type Rating = {
  product_ratings: number; // e.g., 5, 4.3, 0
  total_reviews_count: number; // e.g., 2, 4, 0
};

export type ProductType = {
  id: string;
  title: string;
  description: string;
  type: string; // e.g., "WithVariants"
  price: string; // Formatted string like "23,519.00" or "200.00"
  has_variant: boolean;
  variants_count: number;
  default_variant_id: string;
  is_in_stock: boolean;
  featured_image: string;
  second_image: string;
  rating: Rating;
  can_review: boolean;
  trendy: number; // 0 or 1
  best_seller: number; // 0 or 1
  featured: number; // 0 or 1
  clearance: number; // 0 or 1
  brand: {
    id: string;
    title: string;
    logo: string;
    products_count: number | null;
  };
  model_type: string; // e.g., "product"
  hidden: boolean;
  customizable_fields: any[];
};
