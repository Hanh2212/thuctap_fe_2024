import { apiClient } from "../constant/api";

export const searchCategoryOffer = async (UserToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/DanhMucUuDai/search-danhmucuudai`,data,{
        headers: {
            "Authorization": "Bearer " + UserToken,
        }});
    return res?.data;
}