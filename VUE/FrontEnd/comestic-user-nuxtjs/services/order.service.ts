import type { BillSell } from "~/constant/api";
import { apiClient } from "~/constant/request";

export const sendOrder = async (
    data: Record<string, string | object|number>
): Promise<BillSell> => {
    const res = await apiClient?.post("/api-user/HoaDon/create-hoadon", data);
    return res?.data;
};
