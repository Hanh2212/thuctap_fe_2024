import { ImportBill, ResponseData } from "~/constant/api";
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
