import type { BillSell, TableBillSell } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const getInvoiceAll = async (id: number): Promise<BillSell[]> => {
    const res = await apiClient?.get(
        "/api-user/HoaDon/getbytaikhoan-mahoadon-chitiethoadon/" + id
    );
    return res?.data;
};

export const getInvoiceById = async (id: number): Promise<TableBillSell[]> => {
    const res = await apiClient?.get(
        "/api-user/HoaDon/getbyid-mahoadon-chitiethoadon/" + id
    );
    return res?.data;
};
