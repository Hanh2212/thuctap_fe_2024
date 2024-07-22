import { CategoryOffer, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";
import { CategoryOfferUrl } from "~/constant/endpoints";

export const searchCategoryOffer = async (
    data: Record<string, string | number>
): Promise<ResponseData<CategoryOffer>> => {
    const res = await apiClient?.post(
        `${CategoryOfferUrl}/search-danhmucuudai`,
        data
    );
    return res?.data;
};

export const createCategoryOffer = async (
    data: Record<string, string | number | boolean>
): Promise<CategoryOffer> => {
    const res = await apiClient?.post(
        `${CategoryOfferUrl}/create-danhmucuudai`,
        data
    );
    return res?.data;
};

export const updateCategoryOffer = async (
    data: Record<string, string | number | boolean>
): Promise<CategoryOffer> => {
    const res = await apiClient?.put(
        `${CategoryOfferUrl}/update-danhmucuudai`,
        data
    );
    return res?.data;
};

export const deleteCategoryOffer = async (
    data: Array<number>
): Promise<CategoryOffer> => {
    const res = await apiClient?.delete(
        `${CategoryOfferUrl}/delete-danhmucuudai`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdCategoryOffer = async (
    maDanhMuc: number
): Promise<CategoryOffer> => {
    const res = await apiClient?.get(
        `${CategoryOfferUrl}/getbyid-danhmucuudai/` + maDanhMuc
    );
    return res?.data;
};
