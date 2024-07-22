import { ResponseData, Slide } from "~/constant/api";
import { SlideUrl } from "~/constant/endpoints";
import { apiClient } from "~/constant/request";

export const searchSlide = async (
    data: Record<string, string | number>
): Promise<ResponseData<Slide>> => {
    const res = await apiClient?.post(`${SlideUrl}/search-slide`, data);
    return res?.data;
};

export const createBannerSlide = async (
    data: Record<string, string | number>
): Promise<Slide> => {
    const res = await apiClient?.post(`${SlideUrl}/create-slide_detail`, data);
    return res?.data;
};

export const updateBannerSlide = async (
    data: Record<string, string | number>
): Promise<Slide> => {
    const res = await apiClient?.put(`${SlideUrl}/update-slide_detail`, data);
    return res?.data;
};

export const deleteBannerSlide = async (
    data: Array<number>
): Promise<Slide> => {
    const res = await apiClient?.delete(`${SlideUrl}/delete-slide_detail`, {
        data: data,
    });
    return res?.data;
};

export const getbyIdSlide = async (maAnh: number): Promise<any> => {
    const res = await apiClient?.get(
        `${SlideUrl}/getbyid-slidedetail/` + maAnh
    );
    return res?.data;
};
