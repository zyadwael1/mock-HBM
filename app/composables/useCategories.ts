import { type CategoriesResponse } from "../types/types";
export function useCategories() {
  const route = useRoute();

  const { data: categoriesResponse } = useFetch<CategoriesResponse>(
    "https://fillcart.staging.hbm.studio/api/v2/categories?include=media",
  );

  const selectedCategory = computed(() =>
    categoriesResponse.value?.data.find(
      (category) => category.id === route.query.category,
    ),
  );

  return {
    categoriesResponse,
    selectedCategory,
  };
}
