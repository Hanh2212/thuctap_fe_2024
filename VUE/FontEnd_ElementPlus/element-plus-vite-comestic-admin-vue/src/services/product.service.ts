import { apiClient } from "~/constant/request";
import {
    ResponseData,
    Product,
    Category,
    CategoryOffer,
    Manufactor,
    Distributor,
    FormProduct,
    ImgDetail,
} from "~/constant/api";
import { da } from "element-plus/es/locale";

export const searchProduct = async (
    data: object
): Promise<ResponseData<Product>> => {
    const res = await apiClient?.post(
        `/api-admin/SanPham/search-sanpham`,
        data
    );
    return res?.data;
};

export const getCategory = async (): Promise<Category[]> => {
    const res = await apiClient?.get("/api-admin/DanhMuc/get-all-danhmuc");
    return res?.data;
};

export const getCategoryOffer = async (): Promise<CategoryOffer[]> => {
    const res = await apiClient?.get(
        "/api-admin/DanhMucUuDai/get-all-danhmucuudai"
    );
    return res?.data;
};

export const getManufactor = async (): Promise<Manufactor[]> => {
    const res = await apiClient?.get(
        "/api-admin/HangSanXuat/get-all-hangsanxuat"
    );
    return res?.data;
};

export const getDistributor = async (): Promise<Distributor[]> => {
    const res = await apiClient?.get(
        "/api-admin/NhaPhanPhoi/get-all-nhaphanphoi"
    );
    return res?.data;
};

export const createProduct = async (
    data: object
): Promise<ResponseData<Product>> => {
    const res = await apiClient?.post(
        `/api-admin/SanPham/create-sanpham`,
        data
    );
    return res?.data;
};

export const getbyIdProduct = async (
    maSanPham: number
): Promise<FormProduct> => {
    const res = await apiClient?.get(
        "/api-admin/SanPham/getbyid-sanpham/" + maSanPham
    );
    return res?.data;
};

export const getbyImgDetailProduct = async (
    maSanPham: any
): Promise<ImgDetail[]> => {
    const res = await apiClient?.get(
        "/api-admin/SanPham/getbyid-anhsanphamdetail/" + maSanPham
    );
    return res?.data;
};

export const updateProduct = async (data: object): Promise<FormProduct> => {
    const res = await apiClient?.put(`/api-admin/SanPham/update-sanpham`, data);
    return res?.data;
};

export const deleteProduct = async (
    data: Array<number>
): Promise<FormProduct> => {
    const res = await apiClient?.delete(`/api-admin/SanPham/delete-sanpham`, {
        data: data,
    });
    return res?.data;
};
