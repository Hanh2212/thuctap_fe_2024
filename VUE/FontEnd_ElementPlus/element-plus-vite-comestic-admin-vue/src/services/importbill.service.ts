import { Distributor, ImportBill, ResponseData } from "~/constant/api";
import { DistributorUrl, ImportBillUrl } from "~/constant/endpoints";
import { apiClient } from "~/constant/request";

export const searchImportBill = async (
    data: Record<string, string | number>
): Promise<ResponseData<ImportBill>> => {
    const res = await apiClient?.post(
        `${ImportBillUrl}/search-hoadonnhapsingle`,
        data
    );
    return res?.data;
};

export const getAllDistributor = async (): Promise<ImportBill[]> => {
    const res = await apiClient?.get(`${DistributorUrl}/get-all-nhaphanphoi`);
    return res?.data;
};

export const getDetailImportBillById = async (
    id: number
): Promise<ImportBill[]> => {
    const res = await apiClient?.get(
        `${ImportBillUrl}/getbyid-mahoadon-chitiethoadonnhap/${id}`
    );
    return res?.data;
};

export const createImportBill = async (
    data: Record<string | number, string | number | Array<object>>
): Promise<ImportBill> => {
    const res = await apiClient?.post(
        `${ImportBillUrl}/create-hoadonnhap`,
        data
    );
    return res?.data;
};

export const updateImportBill = async (
    data: Record<string | number, string | number | Array<object>>
): Promise<ImportBill> => {
    const res = await apiClient?.put(
        `${ImportBillUrl}/update-hoadonnhap`,
        data
    );
    return res?.data;
};

export const deleteImportBill = async (
    data: Array<number>
): Promise<ImportBill> => {
    const res = await apiClient?.delete(`${ImportBillUrl}/delete-hoadonnhap`, {
        data: data,
    });
    return res?.data;
};
