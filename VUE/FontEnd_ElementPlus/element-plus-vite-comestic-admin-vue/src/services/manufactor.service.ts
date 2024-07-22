import { Manufactor, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";
import { ManufactorUrl } from "~/constant/endpoints";

export const searchManufactor = async (
    data: Record<string, string | number>
): Promise<ResponseData<Manufactor>> => {
    const res = await apiClient?.post(
        `${ManufactorUrl}/search-hangsanxuat`,
        data
    );
    return res?.data;
};

export const createManufactor = async (
    data: Record<string, string | number>
): Promise<Manufactor> => {
    const res = await apiClient?.post(
        `${ManufactorUrl}/create-hangsanxuat`,
        data
    );
    return res?.data;
};

export const updateManufactor = async (
    data: Record<string, string | number>
): Promise<Manufactor> => {
    const res = await apiClient?.put(
        `${ManufactorUrl}/update-hangsanxuat`,
        data
    );
    return res?.data;
};

export const deleteManufactor = async (
    data: Array<number>
): Promise<Manufactor> => {
    const res = await apiClient?.delete(`${ManufactorUrl}/delete-hangsanxuat`, {
        data: data,
    });
    return res?.data;
};

export const getbyIdManufactor = async (maNhaSanXuat: number): Promise<any> => {
    const res = await apiClient?.get(
        `${ManufactorUrl}/getbyid-hangsanxuat/` + maNhaSanXuat
    );
    return res?.data;
};
