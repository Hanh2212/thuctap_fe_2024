import { Advertisment, ResponseData } from "~/constant/api";
import { AdvertisementUrl } from "~/constant/endpoints";
import { apiClient } from "~/constant/request";

export const searchAdvertisement = async (
    data: Record<string, string | number>
): Promise<ResponseData<Advertisment>> => {
    const res = await apiClient?.post(
        `${AdvertisementUrl}/search-quangcao`,
        data
    );
    return res?.data;
};

export const createAdvertisement = async (
    data: Record<string, string | number>
): Promise<Advertisment> => {
    const res = await apiClient?.post(
        `${AdvertisementUrl}/create-quangcao`,
        data
    );
    return res?.data;
};

export const updateAdvertisement = async (
    data: Record<string, string | number>
): Promise<Advertisment> => {
    const res = await apiClient?.put(
        `${AdvertisementUrl}/update-quangcao`,
        data
    );
    return res?.data;
};

export const deleteAdvertisement = async (
    data: Array<number>
): Promise<Advertisment> => {
    const res = await apiClient?.delete(
        `${AdvertisementUrl}/delete-quangcao2`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdAdvertisement = async (Id: number): Promise<any> => {
    const res = await apiClient?.get(
        `${AdvertisementUrl}/getbyid-quangcao/` + Id
    );
    return res?.data;
};
