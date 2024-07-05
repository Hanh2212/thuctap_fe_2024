import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {anhdaidien
      : 
      "/img/anh fb.png",
      email
      : 
      "admin@gmail.com",
      hoten
      : 
      "Lưu Đức Quang",
      maLoaitaikhoan
      : 
      8,
      mataikhoan
      : 
      22,
      sodienthoai
      : 
      "09837817823",
      taikhoan
      : 
      "admin",
      token
      :"eyJhbGciOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiOCIsIm5iZiI6MTcyMDA2NDA1OSwiZXhwIjoxNzIwNjY4ODU5LCJpYXQiOjE3MjAwNjQwNTl9.mmwm8b-fD-qedTTMSXh0o3j2xieD_Y2eV8U9aWbDIxk"
    },
  },
  mutations: {
    setUser(state:any, userPayload:any) {
      state.user = userPayload;
    },
  },
  actions: {
    fetchUser({ commit }:any, user:any) {
      commit('setUser', user);
    },
  },
  getters: {
    getUser(state:any) {
      return state.user;
    },
  },
});
