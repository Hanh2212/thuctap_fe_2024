import { Distributor, ResponseData } from "~/constant/api";
import { apiClient } from "../constant/request";
import { DistributorUrl } from "~/constant/endpoints";

export const searchDistributor = async (
    data: Record<string, string | number>
): Promise<ResponseData<Distributor>> => {
    const res = await apiClient?.post(
        `${DistributorUrl}/search-nhaphanphoi`,
        data
    );
    return res?.data;
};

export const createDistributor = async (
    data: Record<string, string | number>
): Promise<Distributor> => {
    const res = await apiClient?.post(
        `${DistributorUrl}/create-nhaphanphoi`,
        data
    );
    return res?.data;
};

export const updateDistributor = async (
    data: Record<string, string | number>
): Promise<Distributor> => {
    const res = await apiClient?.put(
        `${DistributorUrl}/update-nhaphanphoi`,
        data
    );
    return res?.data;
};

export const deleteDistributor = async (
    data: Array<number>
): Promise<Distributor> => {
    const res = await apiClient?.delete(
        `${DistributorUrl}/delete-nhaphanphoi`,
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
        `${DistributorUrl}/getbyid-nhaphanphoi/` + maNhaPhanPhoi
    );
    return res?.data;
};
