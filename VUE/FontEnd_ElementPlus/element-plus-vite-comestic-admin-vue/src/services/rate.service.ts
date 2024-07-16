import { Rate, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";

export const searchRate = async (data: object): Promise<ResponseData<Rate>> => {
    const res = await apiClient?.post(
        `/api-admin/DanhGia/search-danhgia`,
        data
    );
    return res?.data;
};

export const editRate = async (data: object): Promise<Rate> => {
    const res = await apiClient?.post(
        `/api-admin/DanhGia/update-danhgia`,
        data
    );
    return res?.data;
};

export const deleteRate = async (data: object): Promise<Rate> => {
    const res = await apiClient?.delete(`/api-admin/Danhgia/delete-danhgia`, {
        data: data,
    });
    return res?.data;
};

export const getbyIdRate = async (maDanhGia: number): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/DanhGia/getbyid-danhgia/" + maDanhGia
    );
    return res?.data;
};
