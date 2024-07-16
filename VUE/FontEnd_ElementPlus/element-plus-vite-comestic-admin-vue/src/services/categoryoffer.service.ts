import { CategoryOffer, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";

export const searchCategoryOffer = async (
    data: object
): Promise<ResponseData<CategoryOffer>> => {
    const res = await apiClient?.post(
        `/api-admin/DanhMucUuDai/search-danhmucuudai`,
        data
    );
    return res?.data;
};

export const createCategoryOffer = async (
    data: object
): Promise<CategoryOffer> => {
    const res = await apiClient?.post(
        `/api-admin/DanhMucUuDai/create-danhmucuudai`,
        data
    );
    return res?.data;
};

export const updateCategoryOffer = async (
    data: object
): Promise<CategoryOffer> => {
    const res = await apiClient?.put(
        `/api-admin/DanhMucUuDai/update-danhmucuudai`,
        data
    );
    return res?.data;
};

export const deleteCategoryOffer = async (
    data: object
): Promise<CategoryOffer> => {
    const res = await apiClient?.delete(
        `/api-admin/DanhMucUuDai/delete-danhmucuudai`,
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
        "/api-admin/DanhMucUuDai/getbyid-danhmucuudai/" + maDanhMuc
    );
    return res?.data;
};
