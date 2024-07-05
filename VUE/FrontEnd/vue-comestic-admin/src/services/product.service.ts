import { apiClient } from "@/constant/api";

export const searchProduct = async (userToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/SanPham/search-sanpham`,data,{
        headers: {
            "Authorization": "Bearer " + userToken,
        }});
    return res?.data;
}