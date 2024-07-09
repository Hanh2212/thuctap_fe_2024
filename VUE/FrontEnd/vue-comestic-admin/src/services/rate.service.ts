import { apiClient } from "../constant/api";

export const searchRate = async (UserToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/DanhGia/search-danhgia`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }
    });
    return res?.data;
}