import { apiClient } from "../constant/api";

export const searchDistributor = async (UserToken:string,data:any):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/NhaPhanPhoi/search-nhaphanphoi`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }});
    return res?.data;
}