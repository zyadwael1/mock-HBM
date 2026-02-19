import type { BrandsResponse } from "~/types/brands";

export function useBrands() {
  const fetchBrands = async () => {
    const response = await $fetch<BrandsResponse>(
      "https://fillcart.staging.hbm.studio/api/v1/brands",
    );
    return response.data;
  };
  const { data: brands } = useAsyncData(fetchBrands);
  return { brands };
}
