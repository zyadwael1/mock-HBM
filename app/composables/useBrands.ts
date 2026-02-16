import type { Brand, BrandsResponse } from "~/types/products/brands";

export default function useBrands() {
  const fetchBrands = async () => {
    const res = await $fetch<BrandsResponse>(
      "https://fillcart.staging.hbm.studio/api/v1/brands",
    );

    return res.data;
  };

  const { data: brands } = useAsyncData(fetchBrands);

  return {
    brands,
  };
}
