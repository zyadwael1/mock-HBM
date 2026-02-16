export type BaseResponse<T> = {
  meta: string;
  data: T;
  pagination: {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
  };
};
