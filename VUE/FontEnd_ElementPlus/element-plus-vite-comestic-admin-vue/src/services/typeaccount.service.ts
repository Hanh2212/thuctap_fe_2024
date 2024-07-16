import { TypeAccount } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const getAllTypeAccount = async (): Promise<TypeAccount[]> => {
    const res = await apiClient?.get(
        `/api-admin/LoaiTaiKhoan/get_all_loaitaikhoan`
    );
    return res?.data;
};

export const createTypeAccount = async (data: object): Promise<TypeAccount> => {
    const res = await apiClient?.post(
        `/api-admin/LoaiTaiKhoan/create_loaitaikhoan`,
        data
    );
    return res?.data;
};

export const updateTypeAccount = async (data: object): Promise<TypeAccount> => {
    const res = await apiClient?.put(
        `/api-admin/LoaiTaiKhoan/update_loaitaikhoan`,
        data
    );
    return res?.data;
};

export const deleteTypeAccount = async (data: object): Promise<TypeAccount> => {
    const res = await apiClient?.delete(
        `/api-admin/LoaiTaiKhoan/delete_loaitaikhoan`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdTypeAccount = async (
    maLoaitaikhoan: number
): Promise<any> => {
    const res = await apiClient?.get(
        "/api-admin/LoaiTaiKhoan/getbyid-loaitaikhoan/" + maLoaitaikhoan
    );
    return res?.data;
};
