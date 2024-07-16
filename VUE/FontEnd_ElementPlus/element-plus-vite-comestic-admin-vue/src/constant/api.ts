export interface ResponseData<T> {
    data: T[];
    page: number;
    pageSize: number;
    totalItems: number;
}

export interface User {
    anhdaidien: string;
    email: string;
    hoten: string;
    maLoaitaikhoan: number;
    mataikhoan: number;
    sodienthoai: string;
    taikhoan: string;
    token: string;
}

export interface Product {
    maSanPham?: number;
    tenSanPham: string;
    anhDaiDien: string;
    giaGiam: number;
    soLuong: number;
    luotBan: number;
    danhGia: number;
    trongLuong: string;
    tenDanhMuc: string;
    tendanhmucuudai: string;
    trangThai: boolean;
}

export interface FormProduct {
    maChiTietSanPham?: number;
    maDanhMuc: number;
    madanhmucuudai: number;
    tenSanPham: string;
    anhDaiDien: string;
    anhChiTiet: ImgDetail[];
    gianhap: number;
    gia: number;
    giaGiam: number;
    soLuong: number;
    luotBan: number;
    danhGia: number;
    trongLuong: string;
    trangThai: boolean;
    maNhaSanXuat: number;
    maNhaPhanPhoi: number;
    xuatXu: string;
    moTa: string;
    chiTiet: string;
}

export interface ImgDetail {
    id?: number;
    maSanPham?: number;
    linkAnh: string;
    status: number;
}

export interface BillSell {
    maHoaDon: number;
    tenTaiKhoan: string;
    trangThai: string;
    ngayTao: Date;
    tongGia: number;
    tenKH: string;
    diaChi: string;
    email: string;
    sdt: string;
    diaChiGiaoHang: string;
}

export interface ImportBill {
    maHoaDon: number;
    maNhaPhanPhoi: number;
    tenNhaPhanPhoi: string;
    ngayTao: Date;
    kieuThanhToan: string;
    tongTien: number;
    tenTaiKhoan: string;
}

export interface News {
    maTinTuc?: number;
    tieuDe: string;
    noiDung: string;
    hinhAnh: string;
    maTaiKhoan?: number;
    luotXem?: number;
    hoTen?: string;
    trangThai: string;
}

export interface Rate {
    maDanhGia?: number;
    maSanPham?: number;
    maTaiKhoan?: number;
    anhDanhGia?: string;
    chatLuong?: number;
    noiDung?: string;
    trangThai?: boolean;
    thoiGian?: Date;
    ghiChu: string;
    tenSanPham?: string;
    hoTen?: string;
    tenTaiKhoan?: string;
    soDienThoai?: string;
}

export interface Category {
    maDanhMuc?: number;
    tenDanhMuc: string;
    dacBiet: boolean;
    noiDung: string;
}

export interface CategoryOffer {
    madanhmucuudai?: number;
    tendanhmucuudai: string;
    dacBiet: boolean;
    noiDung: string;
}

export interface Manufactor {
    maNhaSanXuat?: number;
    tenHang: string;
    linkWeb: string;
    anhDaiDien: string;
}

export interface Distributor {
    maNhaPhanPhoi?: number;
    tenNhaPhanPhoi: string;
    diaChi: string;
    soDienThoai: string;
    linkWeb: string;
    moTa: string;
}

export interface Advertisment {
    id?: number;
    anhDaiDien: string;
    linkQuangCao: string;
    moTa: string;
}

export interface Slide {
    maAnh?: number;
    linkAnh: string;
    tieuDe: string;
    moTa: string;
}

export interface TypeAccount {
    maLoaitaikhoan?: number;
    tenLoai: string;
    moTa: string;
}

export interface Account {
    maTaiKhoan?: number;
    tenTaiKhoan: string;
    email: string;
    matKhau: string;
}

export interface FormAccount {
    maTaiKhoan?: number;
    maChitietTaiKhoan?: number;
    tenTaiKhoan: string;
    matKhau: string;
    email: string;
    hoTen: string;
    diaChi: string;
    soDienThoai: string;
    maLoaitaikhoan: number;
    anhDaiDien: string;
}

export interface OptionSelect {
    value: string | number;
    label: string;
}
