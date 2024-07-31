import type { User } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const login = async (
    data: Record<string, string | number>
): Promise<User> => {
    const res = await apiClient?.post(`/api-user/User/login`, data);
    return res?.data;
};
