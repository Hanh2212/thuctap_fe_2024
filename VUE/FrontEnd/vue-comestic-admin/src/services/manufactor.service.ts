import { apiClient } from "../constant/api";

export const searchManufactor = async (UserToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/HangSanXuat/search-hangsanxuat`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }});
    return res?.data;
}