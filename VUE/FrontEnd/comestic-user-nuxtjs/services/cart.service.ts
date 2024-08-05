import { apiClient } from "~/constant/request";
import type { Cart } from "~/constant/api";

export const getGioHangByIdTaiKhoan = async (id: number): Promise<Cart[]> => {
    const res = await apiClient?.get(
        `/api-user/GioHang/getbyidtaikhoan-giohang/` + id
    );
    return res?.data;
};

export const createCart = async (
    data: Record<string, string | number | boolean>
): Promise<Cart> => {
    const res = await apiClient?.post(`/api-user/GioHang/create-giohang`, data);
    return res?.data;
};

export const updateCart = async (
    data: Record<string, string | number | boolean>
): Promise<Cart> => {
    const res = await apiClient?.put(`/api-user/GioHang/update-giohang`, data);
    return res?.data;
};

export const updateCartsFalse = async (mataikhoan: number): Promise<Cart> => {
    const res = await apiClient?.put(
        `/api-user/GioHang/update-giohangfalse?mataikhoan=${mataikhoan}`
    );
    return res?.data;
};

export const deleteCarts = async (data: Array<number>): Promise<Cart> => {
    const res = await apiClient?.delete(`/api-user/GioHang/delete-giohang`, {
        data: data,
    });
    return res?.data;
};
