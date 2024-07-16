import { defineStore } from "pinia";
import { User } from "~/constant/api";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
            anhdaidien: "/img/anh fb.png",
            email: "admin@gmail.com",
            hoten: "Lưu Đức Quangg",
            maLoaitaikhoan: 8,
            mataikhoan: 22,
            sodienthoai: "09837817823",
            taikhoan: "admin",
            token: "eyJhbGciOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiOCIsIm5iZiI6MTcyMDY3MDU1NSwiZXhwIjoxNzIxMjc1MzU1LCJpYXQiOjE3MjA2NzA1NTV9.Zu-vELrw1oUUZivlCw5Y_yc-6aabuNpNrYM79TpIcMQ",
        },
    }),
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        setUser(user: User) {
            this.user = user;
        },
    },
});
