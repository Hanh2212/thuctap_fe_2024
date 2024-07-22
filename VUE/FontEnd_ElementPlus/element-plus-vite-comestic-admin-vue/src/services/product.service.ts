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
import {
    CategoryOfferUrl,
    CategoryUrl,
    DistributorUrl,
    ManufactorUrl,
    ProductUrl,
} from "~/constant/endpoints";

export const searchProduct = async (
    data: Record<string, string | number>
): Promise<ResponseData<Product>> => {
    const res = await apiClient?.post(`${ProductUrl}/search-sanpham`, data);
    return res?.data;
};

export const getCategory = async (): Promise<Category[]> => {
    const res = await apiClient?.get(`${CategoryUrl}/get-all-danhmuc`);
    return res?.data;
};

export const getCategoryOffer = async (): Promise<CategoryOffer[]> => {
    const res = await apiClient?.get(
        `${CategoryOfferUrl}/get-all-danhmucuudai`
    );
    return res?.data;
};

export const getManufactor = async (): Promise<Manufactor[]> => {
    const res = await apiClient?.get(`${ManufactorUrl}/get-all-hangsanxuat`);
    return res?.data;
};

export const getDistributor = async (): Promise<Distributor[]> => {
    const res = await apiClient?.get(`${DistributorUrl}/get-all-nhaphanphoi`);
    return res?.data;
};

export const createProduct = async (
    data: Record<string | number, string | number | Array<object> | boolean>
): Promise<ResponseData<Product>> => {
    const res = await apiClient?.post(`${ProductUrl}/create-sanpham`, data);
    return res?.data;
};

export const getbyIdProduct = async (
    maSanPham: number
): Promise<FormProduct> => {
    const res = await apiClient?.get(
        `${ProductUrl}/getbyid-sanpham/` + maSanPham
    );
    return res?.data;
};

export const getbyImgDetailProduct = async (
    maSanPham: number
): Promise<ImgDetail[]> => {
    const res = await apiClient?.get(
        `${ProductUrl}/getbyid-anhsanphamdetail/` + maSanPham
    );
    return res?.data;
};

export const updateProduct = async (
    data: Record<string | number, string | number | Array<object> | boolean>
): Promise<FormProduct> => {
    const res = await apiClient?.put(`${ProductUrl}/update-sanpham`, data);
    return res?.data;
};

export const deleteProduct = async (
    data: Array<number>
): Promise<FormProduct> => {
    const res = await apiClient?.delete(`${ProductUrl}/delete-sanpham`, {
        data: data,
    });
    return res?.data;
};
