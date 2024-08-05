import { apiClient } from "~/constant/request";


export const getInformation = async (id:any):Promise<any> =>{
    const res = await apiClient?.get("/api-user/TaiKhoan/getbyid-taikhoan-chitiettaikhoan/"+id);
    return res?.data;
}

export const updateInformation = async (data:any):Promise<any> =>{
    const res = await apiClient?.put("/api-user/TaiKhoan/update-taikhoan",data);
    return res?.data;
}
