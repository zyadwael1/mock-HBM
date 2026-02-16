import type { BaseResponse } from "~/types/common/api";

export type BrandsResponse = BaseResponse<Brand[]>;

export type Brand = {
  id: string;
  title: string;
  logo: string;
  products_count: number;
};
