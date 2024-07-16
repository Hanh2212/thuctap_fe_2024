import { User } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const login = async (data: object): Promise<User> => {
    const res = await apiClient?.post(`/api-admin/User/login`, data);
    return res?.data;
};
