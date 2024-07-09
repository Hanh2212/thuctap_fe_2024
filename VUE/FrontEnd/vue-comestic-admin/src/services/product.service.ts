import { apiClient } from "@/constant/api";

export const searchProduct = async (userToken:string,data:object):Promise<any> =>{
    const res = await apiClient?.post(`/api-admin/SanPham/search-sanpham`,data,{
        headers: {
            "Authorization": "Bearer " + userToken,
        }});
    return res?.data;
}

export const getCategory = async ():Promise<any> =>{
    const res = await apiClient?.get("/api-admin/DanhMuc/get-all-danhmuc");
    return res?.data;
}

export const getCategoryOffer = async ():Promise<any> =>{
    const res = await apiClient?.get("/api-admin/DanhMucUuDai/get-all-danhmucuudai");
    return res?.data;
}

export const getManufactor = async ():Promise<any> =>{
    const res = await apiClient?.get("/api-admin/HangSanXuat/get-all-hangsanxuat");
    return res?.data;
}

export const getDistributor = async ():Promise<any> =>{
    const res = await apiClient?.get("/api-admin/NhaPhanPhoi/get-all-nhaphanphoi");
    return res?.data;
}