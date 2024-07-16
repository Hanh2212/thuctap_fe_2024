import { Advertisment, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const searchAdvertisement = async (
    data: object
): Promise<ResponseData<Advertisment>> => {
    const res = await apiClient?.post(
        `/api-admin/QuangCao/search-quangcao`,
        data
    );
    return res?.data;
};

export const createAdvertisement = async (
    data: object
): Promise<Advertisment> => {
    const res = await apiClient?.post(
        `/api-admin/QuangCao/create-quangcao`,
        data
    );
    return res?.data;
};

export const updateAdvertisement = async (
    data: object
): Promise<Advertisment> => {
    const res = await apiClient?.put(
        `/api-admin/QuangCao/update-quangcao`,
        data
    );
    return res?.data;
};

export const deleteAdvertisement = async (
    data: object
): Promise<Advertisment> => {
    const res = await apiClient?.delete(
        `/api-admin/QuangCao/delete-quangcao2`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdAdvertisement = async (Id: number): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/QuangCao/getbyid-quangcao/" + Id
    );
    return res?.data;
};
