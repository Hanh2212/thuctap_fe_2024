import { TypeAccount } from "~/constant/api";
import { TypeAccountUrl } from "~/constant/endpoints";
import { apiClient } from "~/constant/request";

export const getAllTypeAccount = async (): Promise<TypeAccount[]> => {
    const res = await apiClient?.get(`${TypeAccountUrl}/get_all_loaitaikhoan`);
    return res?.data;
};

export const createTypeAccount = async (
    data: Record<string, string | number>
): Promise<TypeAccount> => {
    const res = await apiClient?.post(
        `${TypeAccountUrl}/create_loaitaikhoan`,
        data
    );
    return res?.data;
};

export const updateTypeAccount = async (
    data: Record<string, string | number>
): Promise<TypeAccount> => {
    const res = await apiClient?.put(
        `${TypeAccountUrl}/update_loaitaikhoan`,
        data
    );
    return res?.data;
};

export const deleteTypeAccount = async (
    data: Array<number>
): Promise<TypeAccount> => {
    const res = await apiClient?.delete(
        `${TypeAccountUrl}/delete_loaitaikhoan`,
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
        `${TypeAccountUrl}/getbyid-loaitaikhoan/` + maLoaitaikhoan
    );
    return res?.data;
};
