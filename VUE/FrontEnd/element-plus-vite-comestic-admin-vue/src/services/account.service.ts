import { Account, FormAccount, ResponseData } from "~/constant/api";
import { TypeAccountUrl, AccountUrl } from "~/constant/endpoints";
import { apiClient } from "~/constant/request";

export const getListTypeAccount = async (): Promise<FormAccount> => {
    const res = await apiClient?.get(`${TypeAccountUrl}/get_all_loaitaikhoan`);
    return res?.data;
};

export const checkUserNameIsEmpty = async (): Promise<Account[]> => {
    const res = await apiClient?.get(`${AccountUrl}/get-alltaikhoan`);
    return res?.data;
};

export const getDetailAccount = async (id: number): Promise<FormAccount[]> => {
    const res = await apiClient?.get(
        `${AccountUrl}/getbyid-taikhoan-chitiettaikhoan/` + id
    );
    return res?.data;
};

export const searchAccount = async (
    data: Record<string, string | number>
): Promise<ResponseData<Account>> => {
    const res = await apiClient?.post(`${AccountUrl}/search-taikhoan`, data);
    return res?.data;
};

export const createAccount = async (
    data: Record<string | number, string | number | Array<object>>
): Promise<FormAccount> => {
    const res = await apiClient?.post(`${AccountUrl}/create-taikhoan`, data);
    return res?.data;
};

export const updateAccount = async (
    data: Record<string | number, string | number | Array<object>>
): Promise<FormAccount> => {
    const res = await apiClient?.put(`${AccountUrl}/update-taikhoan`, data);
    return res?.data;
};

export const deleteAccount = async (
    data: Array<number>
): Promise<FormAccount> => {
    const res = await apiClient?.delete(`${AccountUrl}/delete-taikhoan`, {
        data: data,
    });
    return res?.data;
};
