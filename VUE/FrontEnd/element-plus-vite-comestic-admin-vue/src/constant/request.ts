import axios from "axios";
import { useUserStore } from "~/store";

export const apiClient = axios.create({
    baseURL: "http://localhost:23668",
    timeout: 1000 * 60 * 30 * 3, // 90 minutes
});

export const apiImage = "http://localhost:23668";

apiClient.interceptors.request.use(
    (config) => {
        const useStore = useUserStore();
        const token = useStore.user.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
