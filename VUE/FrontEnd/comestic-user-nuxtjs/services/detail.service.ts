import type { Product, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const getProductById = async (id: number): Promise<Product> => {
    const res = await apiClient?.get(`/api-user/SanPham/getbyid-sanpham/` + id);
    return res?.data;
};

export const getProductRecomend = async (
    data: Record<string , string | number>
): Promise<ResponseData<Product>> => {
    const res = await apiClient?.post(`/api-user/SanPham/search-sanpham`, data);
    return res?.data;
};

export const getImgProductDetail = async (maSanPham: number): Promise<any> => {
    const res = await apiClient?.get(
        `/api-user/SanPham/getbyid-anhsanphamdetail/` + maSanPham
    );
    return res?.data;
};

export const getRatingProduct = async (
    data: Record<string, string>
): Promise<any> => {
    const res = await apiClient?.post(`/api-user/DanhGia/search-danhgia`, data);
    return res?.data;
};
