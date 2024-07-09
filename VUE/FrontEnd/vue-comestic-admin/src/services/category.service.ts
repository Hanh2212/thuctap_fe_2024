import { apiClient } from "../constant/api";

export const searchCategory = async (UserToken:string,data:any):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/DanhMuc/search-danhmuc`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }});
    return res?.data;
}