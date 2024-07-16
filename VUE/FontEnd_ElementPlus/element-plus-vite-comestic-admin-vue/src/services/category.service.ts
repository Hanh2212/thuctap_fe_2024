import { Category, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";

export const searchCategory = async (
    data: object
): Promise<ResponseData<Category>> => {
    const res = await apiClient?.post(
        `/api-admin/DanhMuc/search-danhmuc`,
        data
    );
    return res?.data;
};

export const createCategory = async (data: object): Promise<Category> => {
    const res = await apiClient?.post(
        `/api-admin/DanhMuc/create-danhmuc`,
        data
    );
    return res?.data;
};

export const updateCategory = async (data: object): Promise<Category> => {
    const res = await apiClient?.put(`/api-admin/DanhMuc/update-danhmuc`, data);
    return res?.data;
};

export const deleteCategory = async (data: object): Promise<Category> => {
    const res = await apiClient?.delete(`/api-admin/DanhMuc/delete-danhmuc`, {
        data: data,
    });
    return res?.data;
};

export const getbyIdCategory = async (maDanhMuc: number): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/DanhMuc/getbyid-danhmuc/" + maDanhMuc
    );
    return res?.data;
};
