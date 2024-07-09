import { apiClient } from "@/constant/api";

export const searchBillSell = async (UserToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/HoaDon/search-hoadonsingle`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }});
    return res?.data;
}