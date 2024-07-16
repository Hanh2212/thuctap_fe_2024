import { News, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const searchNews = async (data: object): Promise<ResponseData<News>> => {
    const res = await apiClient?.post(`/api-admin/TinTuc/search-tintuc`, data);
    return res?.data;
};

export const createNew = async (data: object): Promise<News> => {
    const res = await apiClient?.post(`/api-admin/TinTuc/create-tintuc`, data);
    return res?.data;
};

export const updateNew = async (data: object): Promise<any> => {
    const res = await apiClient?.put(`/api-admin/TinTuc/update-tintuc`, data);
    return res?.data;
};

export const deleteNew = async (data: object): Promise<News> => {
    const res = await apiClient?.delete(`/api-admin/TinTuc/delete-tintuc`, {
        data: data,
    });
    return res?.data;
};

export const getbyIdNews = async (maTinTuc: number): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/TinTuc/getbyid-tintuc/" + maTinTuc
    );
    return res?.data;
};
