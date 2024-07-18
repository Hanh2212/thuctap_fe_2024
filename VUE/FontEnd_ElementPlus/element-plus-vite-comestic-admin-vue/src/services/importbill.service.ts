import { Distributor, ImportBill, ResponseData } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const searchImportBill = async (
    data: object
): Promise<ResponseData<ImportBill>> => {
    const res = await apiClient?.post(
        `/api-admin/HoaDonNhap/search-hoadonnhapsingle`,
        data
    );
    return res?.data;
};

export const getAllDistributor = async (): Promise<ImportBill[]> => {
    const res = await apiClient?.get(
        `/api-admin/NhaPhanPhoi/get-all-nhaphanphoi`
    );
    return res?.data;
};

export const getDetailImportBillById = async (
    id: number
): Promise<ImportBill[]> => {
    const res = await apiClient?.get(
        `/api-admin/HoaDonNhap/getbyid-mahoadon-chitiethoadonnhap/${id}`
    );
    return res?.data;
};

export const createImportBill = async (data: object): Promise<ImportBill> => {
    const res = await apiClient?.post(
        `/api-admin/HoaDonNhap/create-hoadonnhap`,
        data
    );
    return res?.data;
};

export const updateImportBill = async (data: object): Promise<ImportBill> => {
    const res = await apiClient?.put(
        `/api-admin/HoaDonNhap/update-hoadonnhap`,
        data
    );
    return res?.data;
};

export const deleteImportBill = async (data: object): Promise<ImportBill> => {
    const res = await apiClient?.delete(
        `/api-admin/HoaDonNhap/delete-hoadonnhap`,
        {
            data: data,
        }
    );
    return res?.data;
};
