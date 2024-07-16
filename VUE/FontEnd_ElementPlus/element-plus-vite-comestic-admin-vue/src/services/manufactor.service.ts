import { Manufactor, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";

export const searchManufactor = async (
    data: object
): Promise<ResponseData<Manufactor>> => {
    const res = await apiClient?.post(
        `/api-admin/HangSanXuat/search-hangsanxuat`,
        data
    );
    return res?.data;
};

export const createManufactor = async (data: object): Promise<Manufactor> => {
    const res = await apiClient?.post(
        `/api-admin/HangSanXuat/create-hangsanxuat`,
        data
    );
    return res?.data;
};

export const updateManufactor = async (data: object): Promise<Manufactor> => {
    const res = await apiClient?.put(
        `/api-admin/HangSanXuat/update-hangsanxuat`,
        data
    );
    return res?.data;
};

export const deleteManufactor = async (data: object): Promise<Manufactor> => {
    const res = await apiClient?.delete(
        `/api-admin/HangSanXuat/delete-hangsanxuat`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdManufactor = async (maNhaSanXuat: number): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/HangSanXuat/getbyid-hangsanxuat/" + maNhaSanXuat
    );
    return res?.data;
};
