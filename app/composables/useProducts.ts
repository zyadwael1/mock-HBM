import { type ProductsResponse } from "../types/types";
export function useProducts() {
  const productsResponse = ref();

  const route = useRoute();

  const fetchProducts = async () => {
    return await $fetch<ProductsResponse>(
      `https://fillcart.staging.hbm.studio/api/v2/products?per_page=${route.query.per_page}&filter[v2_categories]=${route.query.category}`,
    );
  };

  watch(
    () => route.query,
    async () => {
      productsResponse.value = await fetchProducts();
    },
    { immediate: true },
  );

  return { productsResponse, fetchProducts };
}
