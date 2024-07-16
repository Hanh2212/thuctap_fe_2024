import { BillSell, FormProduct, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const searchBillSell = async (
    data: object
): Promise<ResponseData<BillSell>> => {
    const res = await apiClient?.post(
        `/api-admin/HoaDon/search-hoadonsingle`,
        data
    );
    return res?.data;
};

export const getAllProduct = async (): Promise<FormProduct> => {
    const res = await apiClient?.get(`/api-admin/SanPham/get-allsanpham`);
    return res?.data;
};

export const getDetailBillById = async (id: number): Promise<any> => {
    const res = await apiClient?.get(
        `/api-admin/HoaDon/getbyid-mahoadon-chitiethoadon/${id}`
    );
    return res?.data;
};

export const createBillSell = async (data: object): Promise<any> => {
    const res = await apiClient?.post(`/api-admin/HoaDon/create-hoadon`, data);
    return res?.data;
};

export const updateBillSell = async (data: object): Promise<any> => {
    const res = await apiClient?.put(`/api-admin/HoaDon/update-hoadon`, data);
    return res?.data;
};

export const deleteBillSell = async (data: object): Promise<any> => {
    const res = await apiClient?.delete(`/api-admin/HoaDon/delete-hoadon`, {
        data: data,
    });
    return res?.data;
};
