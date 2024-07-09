import { apiClient } from "@/constant/api";


export const searchNews = async (UserToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/TinTuc/search-tintuc`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }});
    return res?.data;
}