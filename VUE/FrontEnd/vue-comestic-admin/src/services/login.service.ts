import { apiClient } from "@/constant/api";

export const login = async (data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/User/login`,data);
    return res?.data;
}