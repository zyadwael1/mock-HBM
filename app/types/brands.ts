import type { BaseResponse } from "./api";

export type BrandsResponse = BaseResponse<Brand[]>;

export type Brand = {
  id: string;
  title: string;
  logo: string;
  products_count: number;
};
