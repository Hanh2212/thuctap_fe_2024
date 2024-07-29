import type { Category, Product, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const getCategory = async (): Promise<Category[]> => {
    const res = await apiClient?.get(`/api-user/DanhMuc/get-all-danhmuc`);
    return res?.data;
};

// export const getAds = async (data: any): Promise<any> => {
//     const res = await apiClient?.post(
//         `/api-user/QuangCao/search-quangcao`,
//         data
//     );
//     return res?.data;
// };

export const getProductHome = async (
    data: Record<string, string | number>
): Promise<ResponseData<Product>> => {
    const res = await apiClient?.post(`/api-user/SanPham/search-sanpham`, data);
    return res?.data;
};

export const getProductFavourite = async (): Promise<Product[]> => {
    const res = await apiClient?.get(`/api-user/SanPham/sp-uathich`);
    return res?.data;
};
