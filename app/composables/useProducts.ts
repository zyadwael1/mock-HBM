import { type ProductsResponse } from "../types/types";
export function useProducts() {
    const productsResponse = ref<ProductsResponse | null>(null);

  
  const route = useRoute();
  
  const fetchProducts = async () => {
    const baseUrl = "https://fillcart.staging.hbm.studio/api/v2/products?";
    let queryString = "";

    if (route.query.per_page) {
      queryString += `?per_page=${route.query.per_page}`;
    }

    if (route.query.page) {
      queryString += `&page=${route.query.page}`;
    }
    if (route.query.category) {
      queryString += `&filter[v2_categories]=${route.query.category}`;
    }
    if (route.query.sort) {
      queryString += `&sort=${route.query.sort}`;
    }

    return await $fetch<ProductsResponse>(`${baseUrl}${queryString}`);
  };

  watch(
    () => route.query,
    async () => {
      productsResponse.value = null
      productsResponse.value = await fetchProducts();
    },
    { immediate: true },
  );

  return { productsResponse, fetchProducts };
}
