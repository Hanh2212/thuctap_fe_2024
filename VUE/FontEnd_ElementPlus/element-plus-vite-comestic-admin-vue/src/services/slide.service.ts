import { ResponseData, Slide } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const searchSlide = async (
    data: object
): Promise<ResponseData<Slide>> => {
    const res = await apiClient?.post(
        `/api-admin/SlideDetail/search-slide`,
        data
    );
    return res?.data;
};

export const createBannerSlide = async (data: object): Promise<Slide> => {
    const res = await apiClient?.post(
        `/api-admin/SlideDetail/create-slide_detail`,
        data
    );
    return res?.data;
};

export const updateBannerSlide = async (data: object): Promise<Slide> => {
    const res = await apiClient?.put(
        `/api-admin/SlideDetail/update-slide_detail`,
        data
    );
    return res?.data;
};

export const deleteBannerSlide = async (data: object): Promise<Slide> => {
    const res = await apiClient?.delete(
        `/api-admin/SlideDetail/delete-slide_detail`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdSlide = async (maAnh: number): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/SlideDetail/getbyid-slidedetail/" + maAnh
    );
    return res?.data;
};
