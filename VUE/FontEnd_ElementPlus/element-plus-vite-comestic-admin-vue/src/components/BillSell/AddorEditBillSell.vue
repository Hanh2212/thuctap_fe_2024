<template>
    <el-card class="card_body">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
        >
            <el-form-item label="Tên khách hàng" prop="tenKH">
                <el-input v-model="ruleForm.tenKH" />
            </el-form-item>

            <el-form-item label="Số điện thoại" prop="sdt">
                <el-input v-model="ruleForm.sdt" />
            </el-form-item>

            <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email" />
            </el-form-item>

            <el-form-item label="Địa chỉ giao hàng" prop="diaChiGiaoHang">
                <el-input v-model="ruleForm.diaChiGiaoHang" />
            </el-form-item>

            <el-form-item label="Tổng tiền" prop="tongGia">
                <el-input readonly v-model="ruleForm.tongGia" type="number" />
            </el-form-item>

            <el-form-item
                v-if="route.params.id"
                label="Trạng thái"
                prop="trangThai"
            >
                <el-select
                    v-model="ruleForm.trangThai"
                    placeholder="Vui lòng chọn"
                >
                    <el-option label="Đang xử lý" value="Đang xử lý" />
                    <el-option label="Đang giao hàng" value="Đang giao hàng" />
                    <el-option label="Đã giao hàng" value="Đã giao hàng" />
                    <el-option label="Đổi hàng" value="Đổi hàng" />
                    <el-option label="Trả hàng" value="Trả hàng" />
                    <el-option label="Hoàn tất" value="Hoàn tất" />
                    <el-option label="Huỷ đơn" value="Huỷ đơn" />
                </el-select>
            </el-form-item>

            <el-card>
                <el-form-item label="Tên sản phẩm" prop="maSanPham">
                    <el-select
                        v-model="ruleForm.maSanPham"
                        filterable
                        placeholder="Vui lòng chọn sản phẩm muốn mua"
                        @change="handleProductChange"
                    >
                        <el-option
                            v-for="item in optionsProduct"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>

                <el-form-item label="Số lượng" prop="soLuong">
                    <el-input
                        v-model="ruleForm.soLuong"
                        type="number"
                        @change="handleQuantityChange"
                    />
                </el-form-item>

                <el-form-item label="Đơn giá" prop="donGia">
                    <el-input
                        readonly
                        v-model="ruleForm.donGia"
                        type="number"
                    />
                </el-form-item>

                <el-form-item label="Tổng giá" prop="tongTien">
                    <el-input
                        readonly
                        v-model="ruleForm.tongTien"
                        type="number"
                    />
                </el-form-item>

                <el-form-item>
                    <div class="list_btn">
                        <el-icon
                            @click="handlerAddDetail"
                            class="btn_add_detail"
                            ><Plus
                        /></el-icon>
                    </div>
                </el-form-item>

                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        label="STT"
                        width="80"
                        align="center"
                        prop="stt"
                    >
                    </el-table-column>

                    <el-table-column
                        label="Hình ảnh"
                        align="center"
                        prop="hinhAnh"
                    >
                        <template #default="scope">
                            <img
                                :src="apiImage + scope.row.hinhAnh"
                                alt="Hình ảnh sản phẩm"
                                class="img_item"
                            /> </template
                    ></el-table-column>

                    <el-table-column
                        label="Số lượng"
                        align="center"
                        prop="soLuong"
                    >
                        <template #default="scope">
                            <el-input
                                class="amount_detail"
                                v-model="scope.row.soLuong"
                                type="number"
                                min="1"
                                @click="updateTotalPrice(scope.row)"
                                @focus="handleFocus(scope.row)"
                            ></el-input>
                        </template>
                    </el-table-column>

                    <el-table-column
                        label="Đơn giá"
                        align="center"
                        prop="donGia"
                    />

                    <el-table-column
                        label="Tổng tiền"
                        align="center"
                        prop="tongTien"
                    />

                    <el-table-column label="Tuỳ chọn" align="center">
                        <template #default="scope">
                            <!-- <el-button
                                v-if="route.params.id"
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)"
                            >
                                Edit
                            </el-button> -->
                            <el-popconfirm
                                confirm-button-text="Yes"
                                cancel-button-text="No"
                                icon-color="#626AEF"
                                title="Bạn có muốn xoá không?"
                                @confirm="
                                    () => confirmEvent(scope.$index, scope.row)
                                "
                            >
                                <template #reference>
                                    <el-button size="small" type="danger">
                                        Delete
                                    </el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>

                <el-form-item class="btns_item">
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        {{ route.params.id ? "Update" : "Create" }}
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-card>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from "vue";
import type {
    ComponentSize,
    FormInstance,
    FormRules,
    Table,
} from "element-plus";
import { Plus, Check } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { useUserStore } from "~/store";
import {
    BillSell,
    Category,
    News,
    OptionSelect,
    TableBillSell,
} from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createBillSell,
    getAllProduct,
    getDetailBillById,
    updateBillSell,
} from "~/services/billsell.service";
import { el } from "element-plus/es/locale";
import { watch } from "vue";
import { table } from "console";

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const route = useRoute();
const store = useUserStore();

const Notification = (
    message: string,
    type: "success" | "warning" | "error"
) => {
    ElMessage({
        message: message,
        type: type,
    });
};

const ruleForm = reactive<BillSell>({
    tenKH: "",
    sdt: "",
    email: "",
    diaChiGiaoHang: "",
    tongGia: 0,
    trangThai: "",
    maSanPham: 0,
    soLuong: 1,
    donGia: 0,
    tongTien: 0,
});

const rules = reactive<FormRules>({
    tenKH: [
        {
            required: true,
            message: "Vui lòng nhập tên khách hàng",
            trigger: "blur",
        },
    ],
    sdt: [
        {
            required: true,
            message: "Vui lòng nhập số điện thoại",
            trigger: "blur",
        },
    ],
    email: [
        {
            required: true,
            message: "Vui lòng nhập email",
            trigger: "blur",
        },
    ],
    diaChiGiaoHang: [
        {
            required: true,
            message: "Vui lòng nhập địa chỉ giao hàng",
            trigger: "blur",
        },
    ],
    tongGia: [
        {
            required: true,
            message: "Vui lòng nhập tổng giá",
            trigger: "blur",
        },
    ],
    trangThai: [
        {
            required: true,
            message: "Vui lòng nhập trạng thái",
            trigger: "blur",
        },
    ],
    maSanPham: [
        {
            required: true,
            message: "Vui lòng chọn sản phẩm",
            trigger: "blur",
        },
    ],
    soLuong: [
        {
            required: true,
            message: "Vui lòng nhập số lượng",
            trigger: "blur",
        },
    ],
    donGia: [
        {
            required: true,
            message: "Vui lòng nhập đơn giá",
            trigger: "blur",
        },
    ],
    tongTien: [
        {
            required: true,
            message: "Vui lòng nhập tổng giá",
            trigger: "blur",
        },
    ],
});

const optionsProduct = ref<OptionSelect[]>();

async function fetchProduct() {
    const res = await getAllProduct();
    ruleForm.maSanPham = Number(res[0]?.maSanPham);
    ruleForm.donGia = Number(res[0]?.giaGiam);
    ruleForm.tongTien = Number(res[0]?.giaGiam);
    optionsProduct.value = res.map(function (value: any) {
        return {
            value: value.maSanPham,
            label: value.tenSanPham,
            gia: value.giaGiam,
            hinhAnh: value.anhDaiDien,
        };
    });
}
onMounted(() => {
    fetchProduct();
});

const handleProductChange = (value: any) => {
    const filteredProduct = optionsProduct.value?.find(
        (product) => product.value === value
    );
    if (filteredProduct) {
        ruleForm.donGia = filteredProduct.gia;
        ruleForm.tongTien = Number(ruleForm.donGia) * Number(ruleForm.soLuong);
    } else {
        ruleForm.donGia = 0;
    }
};
const handleQuantityChange = (value: any) => {
    ruleForm.tongTien = Number(ruleForm.donGia) * Number(value);
};

const fetchById = async (id: number) => {
    try {
        const resNewId = await getDetailBillById(id);
        (ruleForm.tenKH = resNewId[0]?.tenKH),
            (ruleForm.sdt = resNewId[0]?.sdt),
            (ruleForm.email = resNewId[0]?.email),
            (ruleForm.diaChiGiaoHang = resNewId[0]?.diaChiGiaoHang),
            (ruleForm.tongGia = resNewId[0]?.tongGia),
            (ruleForm.trangThai = resNewId[0]?.trangThai);

        const dataTempTable = resNewId.map((value: any, index: number) => {
            return {
                stt: index + 1,
                maChiTietHoaDon: value.maChiTietHoaDon,
                maSanPham: Number(value.maSanPham),
                hinhAnh: String(value.anhDaiDien),
                soLuong: Number(value.soLuong),
                originalSoLuong: Number(value.soLuong),
                donGia: Number(value.donGia),
                tongTien: Number(value.donGia) * Number(value.soLuong),
            };
        });

        tableData.value = dataTempTable;
    } catch (error) {
        router.push("/billsell");
        Notification("Hoá đơn không có sản phẩm", "success");
        const listitemDeleted = tableData.value.map((value: any) => {
            return {
                MaChiTietHoaDon: value.maChiTietHoaDon,
                MaSanPham: value.maSanPham,
                SoLuongTon: value.soLuong,
                Status: 4,
            };
        });
        await updateBillSell({
            MaHoaDon: Number(route.params.id),
            TrangThai: "Huỷ đơn",
            TongGia: String(ruleForm.tongTien).replace(/\./g, ""),
            TenKH: ruleForm.tenKH,
            DiaChi: String(ruleForm.diaChiGiaoHang),
            Email: ruleForm.email,
            SDT: ruleForm.sdt,
            DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
            MaTaiKhoan: store.user.mataikhoan,
            list_json_chitiet_hoadon: listitemDeleted,
        });
    }
};

onMounted(() => {
    if (route.params.id) {
        fetchById(Number(route.params.id));
    }
});

const handleEdit = (index: number, row: TableBillSell) => {
    console.log(index, row);
};

const confirmEvent = async (index: number, row: TableBillSell) => {
    try {
        if (route.params.id) {
            await updateBillSell({
                MaHoaDon: Number(route.params.id),
                TrangThai: ruleForm.trangThai,
                TongGia:
                    Number(ruleForm.tongGia) -
                    Number(row.soLuong) * Number(row.donGia),
                TenKH: ruleForm.tenKH,
                DiaChi: String(ruleForm.diaChiGiaoHang),
                Email: ruleForm.email,
                SDT: ruleForm.sdt,
                DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
                list_json_chitiet_hoadon: [
                    {
                        MaChiTietHoaDon: row.maChiTietHoaDon,
                        MaSanPham: row.maSanPham,
                        SoLuongTon: Number(row.soLuong),
                        status: 3,
                    },
                ],
            });
            fetchById(Number(route.params.id));
            Notification("Xoá thành công", "success");
        } else {
            tableData.value.splice(index, 1);
        }
    } catch (error) {
        console.error("Error deleting =:", error);
        Notification("Lỗi khi xoá =", "error");
    }
};

const tableData = ref<TableBillSell[]>([]);

const handlerAddDetail = async () => {
    const filteredProduct = optionsProduct.value?.find(
        (product) => product.value === ruleForm.maSanPham
    );

    const existingProduct = tableData.value.find(
        (product) => product.maSanPham === ruleForm.maSanPham
    );

    if (route.params.id) {
        if (existingProduct) {
            Notification("Sản phẩm đã có, vui lòng tăng số lượng", "warning");
        } else {
            await updateBillSell({
                MaHoaDon: Number(route.params.id),
                TrangThai: ruleForm.trangThai,
                TongGia:
                    Number(ruleForm.tongGia) +
                    Number(ruleForm.soLuong) * Number(ruleForm.donGia),
                TenKH: ruleForm.tenKH,
                DiaChi: String(ruleForm.diaChiGiaoHang),
                Email: ruleForm.email,
                SDT: ruleForm.sdt,
                DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
                list_json_chitiet_hoadon: [
                    {
                        MaSanPham: ruleForm.maSanPham,
                        SoLuong: Number(ruleForm.soLuong),
                        SoLuongTon: Number(ruleForm.soLuong),
                        DonGia: Number(ruleForm.donGia),
                        TongGia: Number(ruleForm.tongTien),
                        status: 1,
                    },
                ],
            });
            Notification("Thêm thành công", "success");
        }
        fetchById(Number(route.params.id));
    } else {
        if (existingProduct) {
            existingProduct.soLuong =
                Number(existingProduct.soLuong) + Number(ruleForm.soLuong);
            existingProduct.tongTien =
                Number(existingProduct.soLuong) * existingProduct.donGia;
        } else {
            tableData.value.push({
                stt: Number(tableData.value.length + 1),
                maChiTietHoaDon: 0,
                maSanPham: Number(ruleForm.maSanPham),
                hinhAnh: String(filteredProduct?.hinhAnh),
                soLuong: Number(ruleForm.soLuong),
                originalSoLuong: Number(ruleForm.soLuong),
                donGia: Number(ruleForm.donGia),
                tongTien: Number(ruleForm.tongTien),
            });
        }
    }
};

const handleFocus = (row: TableBillSell) => {
    row.originalSoLuong = Number(row.soLuong);
};

const updateTotalPrice = async (row: TableBillSell) => {
    const previousQuantity = row.originalSoLuong;

    if (row.soLuong === "0") {
        row.soLuong = 1;
    }
    row.tongTien = Number(row.soLuong) * row.donGia;

    if (route.params.id) {
        const quantityDifference =
            Number(row.soLuong) - Number(previousQuantity);

        await updateBillSell({
            MaHoaDon: Number(route.params.id),
            TrangThai: ruleForm.trangThai,
            TongGia:
                Number(ruleForm.tongGia) +
                quantityDifference * Number(row.donGia),
            TenKH: ruleForm.tenKH,
            DiaChi: String(ruleForm.diaChiGiaoHang),
            Email: ruleForm.email,
            SDT: ruleForm.sdt,
            DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
            list_json_chitiet_hoadon: [
                {
                    MaChiTietHoaDon: row.maChiTietHoaDon,
                    MaSanPham: row.maSanPham,
                    SoLuong: Number(row.soLuong),
                    SoLuongTon:
                        Number(row.soLuong) - Number(quantityDifference),
                    DonGia: Number(row.donGia),
                    TongGia: Number(row.donGia) * Number(row.soLuong),
                    status: 2,
                },
            ],
        });
        fetchById(Number(route.params.id));
        Notification("Điều chỉnh số lượng thành công", "success");
    }
};

watch(
    tableData.value,
    (newTableData) => {
        const totalAmount = newTableData.reduce(
            (acc: any, item: any) => acc + item.tongTien,
            0
        );
        ruleForm.tongGia = totalAmount;
    },
    { deep: true }
);

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    try {
        const valid = await formEl.validate();
        if (valid) {
            if (route.params.id) {
                if (ruleForm.trangThai === "Huỷ đơn") {
                    const listitemDeleted = tableData.value.map(
                        (value: any) => {
                            return {
                                MaChiTietHoaDon: value.maChiTietHoaDon,
                                MaSanPham: value.maSanPham,
                                SoLuongTon: value.soLuong,
                                Status: 4,
                            };
                        }
                    );
                    await updateBillSell({
                        MaHoaDon: Number(route.params.id),
                        TrangThai: ruleForm.trangThai,
                        TongGia: String(ruleForm.tongTien).replace(/\./g, ""),
                        TenKH: ruleForm.tenKH,
                        DiaChi: String(ruleForm.diaChiGiaoHang),
                        Email: ruleForm.email,
                        SDT: ruleForm.sdt,
                        DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
                        MaTaiKhoan: store.user.mataikhoan,
                        list_json_chitiet_hoadon: listitemDeleted,
                    });
                    Notification("Huỷ đơn thành công", "success");
                } else {
                    await updateBillSell({
                        MaHoaDon: Number(route.params.id),
                        TrangThai: ruleForm.trangThai,
                        TongGia: String(ruleForm.tongTien).replace(/\./g, ""),
                        TenKH: ruleForm.tenKH,
                        DiaChi: String(ruleForm.diaChiGiaoHang),
                        Email: ruleForm.email,
                        SDT: ruleForm.sdt,
                        DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
                        MaTaiKhoan: store.user.mataikhoan,
                        list_json_chitiet_hoadon: [
                            {
                                MaChiTietHoaDon: 0,
                                MaSanPham: 0,
                                SoLuong: 0,
                                TongGia: 0,
                                status: 0,
                            },
                        ],
                    });
                    Notification("Cập nhật thành công", "success");
                }
                router.push("/billsell");
            } else {
                const listDataProduct = tableData.value.map((value: any) => {
                    return {
                        MaSanPham: value.maSanPham,
                        SoLuong: Number(value.soLuong),
                        DonGia: Number(value.donGia),
                        TongGia: Number(value.tongTien),
                    };
                });
                if (listDataProduct.length <= 0) {
                    Notification("Bạn chưa thêm sản phẩm", "warning");
                } else {
                    await createBillSell({
                        TrangThai: "Đang xử lý",
                        TongGia: ruleForm.tongGia,
                        TenKH: ruleForm.tenKH,
                        DiaChi: String(ruleForm.diaChiGiaoHang),
                        Email: ruleForm.email,
                        SDT: ruleForm.sdt,
                        DiaChiGiaoHang: String(ruleForm.diaChiGiaoHang),
                        MaTaiKhoan: store.user.mataikhoan,
                        list_json_chitiet_hoadon: listDataProduct,
                    });
                    Notification("Thêm thành công", "success");
                    router.push("/billsell");
                }
            }
        } else {
            Notification("Bạn cần điền đủ thông tin", "warning");
        }
    } catch (fields) {
        Notification("Bạn cần điền đủ thông tin", "warning");
    }
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>

<style scoped>
.line_item {
    height: 1px;
    background-color: #333;
}

.img_item {
    width: 70px;
    height: 70px;
    object-fit: cover;
}

.list_btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
.btn_add_detail {
    background-color: #3eeb27;
    color: aliceblue;
    font-size: 23px;
    cursor: pointer;
}

.btn_check_detail {
    background-color: #3eeb27;
    color: aliceblue;
    font-size: 23px;
    cursor: pointer;
}

.amount_detail {
    width: 60px;
}

.btns_item {
    margin-top: 10px;
}
</style>
