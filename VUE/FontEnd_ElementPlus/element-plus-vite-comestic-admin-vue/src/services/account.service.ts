import { Account, FormAccount, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const getListTypeAccount = async (): Promise<FormAccount> => {
    const res = await apiClient?.get(
        `/api-admin/LoaiTaiKhoan/get_all_loaitaikhoan`
    );
    return res?.data;
};

export const checkUserNameIsEmpty = async (): Promise<Account[]> => {
    const res = await apiClient?.get("/api-admin/TaiKhoan/get-alltaikhoan");
    return res?.data;
};

export const getDetailAccount = async (id: number): Promise<FormAccount[]> => {
    const res = await apiClient?.get(
        `/api-admin/TaiKhoan/getbyid-taikhoan-chitiettaikhoan/` + id
    );
    return res?.data;
};

export const searchAccount = async (
    data: object
): Promise<ResponseData<Account>> => {
    const res = await apiClient?.post(
        "/api-admin/TaiKhoan/search-taikhoan",
        data
    );
    return res?.data;
};

export const createAccount = async (data: object): Promise<FormAccount> => {
    const res = await apiClient?.post(
        `/api-admin/TaiKhoan/create-taikhoan`,
        data
    );
    return res?.data;
};

export const updateAccount = async (data: object): Promise<FormAccount> => {
    const res = await apiClient?.put(
        `/api-admin/TaiKhoan/update-taikhoan`,
        data
    );
    return res?.data;
};

export const deleteAccount = async (data: object): Promise<FormAccount> => {
    const res = await apiClient?.delete(`/api-admin/TaiKhoan/delete-taikhoan`, {
        data: data,
    });
    return res?.data;
};
