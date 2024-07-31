import type { Account } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const checkUserNameIsEmpty = async (): Promise<Account> => {
    const res = await apiClient?.get("/api-user/TaiKhoan/get-alltaikhoan");
    return res?.data;
};

export const registryUser = async (
    data: Record<string, string | number>
): Promise<Account> => {
    const res = await apiClient?.post(
        `/api-user/TaiKhoan/create-taikhoan`,
        data
    );
    return res?.data;
};
