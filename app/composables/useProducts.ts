import { type ProductsResponse } from "../types/types";

export function useProducts() {
  const productsResponse = ref<ProductsResponse>();

  const route = useRoute();

  const fetchProducts = async () => {
    productsResponse.value = undefined;

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

    if (route.query.brand) {
      queryString += `&filter[brands]=${route.query.brand}`;
    }

    productsResponse.value = await $fetch<ProductsResponse>(
      `${baseUrl}${queryString}`,
    );
  };

  watch(
    () => route.query,
    (newValue, oldValue) => {
      if (newValue.filter_bar === oldValue?.filter_bar) {
        fetchProducts();
      }
    },
  );

  return { productsResponse, fetchProducts };
}
