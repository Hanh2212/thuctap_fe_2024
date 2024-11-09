import { BillSell, FormProduct, ResponseData } from "~/constant/api";
import { BillSellUrl, ProductUrl } from "~/constant/endpoints";
import { apiClient } from "~/constant/request";

export const searchBillSell = async (
    data: Record<string, string | number>
): Promise<ResponseData<BillSell>> => {
    const res = await apiClient?.post(
        `${BillSellUrl}/search-hoadonsingle`,
        data
    );
    return res?.data;
};

export const getAllProduct = async (): Promise<FormProduct[]> => {
    const res = await apiClient?.get(`${ProductUrl}/get-allsanpham`);
    return res?.data;
};

export const getDetailBillById = async (id: number): Promise<BillSell[]> => {
    const res = await apiClient?.get(
        `${BillSellUrl}/getbyid-mahoadon-chitiethoadon/${id}`
    );
    return res?.data;
};

export const createBillSell = async (
    data: Record<string | number, string | number | Array<object>>
): Promise<BillSell> => {
    const res = await apiClient?.post(`${BillSellUrl}/create-hoadon`, data);
    return res?.data;
};

export const updateBillSell = async (
    data: Record<string | number, string | number | Array<object>>
): Promise<BillSell> => {
    const res = await apiClient?.put(`${BillSellUrl}/update-hoadon`, data);
    return res?.data;
};

export const deleteBillSell = async (
    data: Array<number>
): Promise<BillSell> => {
    const res = await apiClient?.delete(`${BillSellUrl}/delete-hoadon`, {
        data: data,
    });
    return res?.data;
};
