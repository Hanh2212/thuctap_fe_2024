import { Category, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";
import { CategoryUrl } from "~/constant/endpoints";

export const searchCategory = async (
    data: Record<string, string | number>
): Promise<ResponseData<Category>> => {
    const res = await apiClient?.post(`${CategoryUrl}/search-danhmuc`, data);
    return res?.data;
};

export const createCategory = async (
    data: Record<string, string | number | boolean>
): Promise<Category> => {
    const res = await apiClient?.post(`${CategoryUrl}/create-danhmuc`, data);
    return res?.data;
};

export const updateCategory = async (
    data: Record<string, string | number | boolean>
): Promise<Category> => {
    const res = await apiClient?.put(`${CategoryUrl}/update-danhmuc`, data);
    return res?.data;
};

export const deleteCategory = async (
    data: Array<number>
): Promise<Category> => {
    const res = await apiClient?.delete(`${CategoryUrl}/delete-danhmuc`, {
        data: data,
    });
    return res?.data;
};

export const getbyIdCategory = async (maDanhMuc: number): Promise<any> => {
    const res = await apiClient?.get(
        `${CategoryUrl}/getbyid-danhmuc/` + maDanhMuc
    );
    return res?.data;
};
