import { Distributor, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";

export const searchDistributor = async (
    data: object
): Promise<ResponseData<Distributor>> => {
    const res = await apiClient?.post(
        `/api-admin/NhaPhanPhoi/search-nhaphanphoi`,
        data
    );
    return res?.data;
};

export const createDistributor = async (data: object): Promise<Distributor> => {
    const res = await apiClient?.post(
        `/api-admin/NhaPhanPhoi/create-nhaphanphoi`,
        data
    );
    return res?.data;
};

export const updateDistributor = async (data: object): Promise<Distributor> => {
    const res = await apiClient?.put(
        `/api-admin/NhaPhanPhoi/update-nhaphanphoi`,
        data
    );
    return res?.data;
};

export const deleteDistributor = async (data: object): Promise<Distributor> => {
    const res = await apiClient?.delete(
        `/api-admin/NhaPhanPhoi/delete-nhaphanphoi`,
        {
            data: data,
        }
    );
    return res?.data;
};

export const getbyIdDistributor = async (
    maNhaPhanPhoi: number
): Promise<Distributor> => {
    const res = await apiClient?.get(
        "/api-admin/NhaPhanPhoi/getbyid-nhaphanphoi/" + maNhaPhanPhoi
    );
    return res?.data;
};
