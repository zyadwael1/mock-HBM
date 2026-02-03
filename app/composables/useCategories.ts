import { type CategoriesResponse } from "../types/types";
export function useCategories() {
  const { data: categoriesResponse } = useFetch<CategoriesResponse>(
    "https://fillcart.staging.hbm.studio/api/v2/categories?include=media",
  );
  return { categoriesResponse };
}
