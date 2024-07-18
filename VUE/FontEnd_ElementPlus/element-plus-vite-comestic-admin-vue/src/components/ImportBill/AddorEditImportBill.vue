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
            <el-form-item label="Nhà phân phối" prop="maNhaPhanPhoi">
                <el-select
                    v-model="ruleForm.maNhaPhanPhoi"
                    filterable
                    placeholder="Vui lòng chọn nhà phân phối"
                >
                    <el-option
                        v-for="item in optionsDistributor"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>

            <el-form-item label="Kiểu thanh toán" prop="kieuThanhToan">
                <el-select
                    v-model="ruleForm.kieuThanhToan"
                    placeholder="Vui lòng chọn"
                >
                    <el-option label="Tiền mặt" value="Tiền mặt" />
                    <el-option label="Thẻ ngân hàng" value="Thẻ ngân hàng" />
                    <el-option label="Thẻ Visa" value="Thẻ Visa" />
                    <el-option label="Zalo Pay" value="Zalo Pay" />
                    <el-option label="Momo" value="Momo" />
                </el-select>
            </el-form-item>

            <el-form-item label="Tổng tiền" prop="tongGia">
                <el-input readonly v-model="ruleForm.tongGia" type="number" />
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

                <el-form-item label="Đơn vị tính" prop="donViTinh">
                    <el-input v-model="ruleForm.donViTinh" />
                </el-form-item>

                <el-form-item label="Đơn giá" prop="donGia">
                    <el-input v-model="ruleForm.donGia" type="number" />
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
                        label="Đơn vị tính"
                        align="center"
                        prop="donViTinh"
                    />

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
    ImportBill,
    News,
    OptionSelect,
    TableBillSell,
    TableImportBill,
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
import {
    createImportBill,
    getAllDistributor,
    getDetailImportBillById,
    updateImportBill,
} from "~/services/importbill.service";

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

const ruleForm = reactive<ImportBill>({
    maNhaPhanPhoi: 0,
    kieuThanhToan: "Tiền mặt",
    tongGia: 0,
    maSanPham: 0,
    soLuong: 1,
    donViTinh: "",
    donGia: 0,
    tongTien: 0,
});

const rules = reactive<FormRules>({
    maNhaPhanPhoi: [
        {
            required: true,
            message: "Vui lòng chọn nhà phân phối",
            trigger: "blur",
        },
    ],
    kieuThanhToan: [
        {
            required: true,
            message: "Vui lòng chọn kiểu thanh toán",
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
    donViTinh: [
        {
            required: true,
            message: "Vui lòng nhập đơn vị tính",
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

const optionsDistributor = ref<OptionSelect[]>();

async function fetchDistributor() {
    const res = await getAllDistributor();
    ruleForm.maNhaPhanPhoi = Number(res[0].maNhaPhanPhoi);
    optionsDistributor.value = res.map(function (value: any) {
        return {
            value: value.maNhaPhanPhoi,
            label: value.tenNhaPhanPhoi,
        };
    });
}
onMounted(() => {
    fetchDistributor();
});

const optionsProduct = ref<OptionSelect[]>();

async function fetchProduct() {
    const res = await getAllProduct();
    ruleForm.maSanPham = Number(res[0].maSanPham);
    ruleForm.donGia = Number(res[0].giaGiam);
    ruleForm.tongTien = Number(res[0].giaGiam);
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
    const resNewId = await getDetailImportBillById(id);
    (ruleForm.maNhaPhanPhoi = resNewId[0].maNhaPhanPhoi),
        (ruleForm.kieuThanhToan = resNewId[0].kieuThanhToan),
        (ruleForm.tongGia = Number(resNewId[0].tongTien)),
        console.log(resNewId);

    const dataTempTable = resNewId.map((value: any, index: number) => {
        return {
            stt: index + 1,
            maChiTietHoaDon: value.id,
            maSanPham: Number(value.maSanPham),
            hinhAnh: String(value.anhDaiDien),
            soLuong: Number(value.soLuong),
            donViTinh: value.donViTinh,
            originalSoLuong: Number(value.soLuong),
            donGia: Number(value.giaNhap),
            tongTien: Number(value.giaNhap) * Number(value.soLuong),
        };
    });

    tableData.value = dataTempTable;
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
            await updateImportBill({
                MaHoaDon: route.params.id,
                MaNhaPhanPhoi: ruleForm.maNhaPhanPhoi,
                KieuThanhToan: ruleForm.kieuThanhToan,
                TongTien: Number(String(ruleForm.tongGia)),
                MaTaiKhoan: store.user.mataikhoan,
                list_json_chitiethoadonnhap: [
                    {
                        Id: row.maChiTietHoaDon,
                        MaSanPham: row.maSanPham,
                        SoLuong: Number(row.soLuong),
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

const tableData = ref<TableImportBill[]>([]);

const handlerAddDetail = async () => {
    const filteredProduct = optionsProduct.value?.find(
        (product) => product.value === ruleForm.maSanPham
    );

    const existingProduct = tableData.value.find(
        (product) => product.maSanPham === ruleForm.maSanPham
    );

    if (ruleForm.donViTinh === "") {
        Notification("Vui lòng điền đơn vị tính", "warning");
        return;
    }

    if (route.params.id) {
        if (existingProduct) {
            Notification("Sản phẩm đã có, vui lòng tăng số lượng", "warning");
        } else {
            await updateImportBill({
                MaHoaDon: route.params.id,
                MaNhaPhanPhoi: ruleForm.maNhaPhanPhoi,
                KieuThanhToan: ruleForm.kieuThanhToan,
                TongTien:
                    Number(ruleForm.tongGia) +
                    Number(ruleForm.soLuong) * Number(ruleForm.donGia),
                MaTaiKhoan: store.user.mataikhoan,
                list_json_chitiethoadonnhap: [
                    {
                        MaSanPham: ruleForm.maSanPham,
                        SoLuong: Number(ruleForm.soLuong),
                        DonViTinh: ruleForm.donViTinh,
                        GiaNhap: Number(ruleForm.donGia),
                        TongGia:
                            Number(ruleForm.soLuong) * Number(ruleForm.donGia),
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
                donViTinh: ruleForm.donViTinh,
                donGia: Number(ruleForm.donGia),
                tongTien: Number(ruleForm.tongTien),
            });
        }
    }
};

const handleFocus = (row: TableImportBill) => {
    row.originalSoLuong = Number(row.soLuong);
};

const updateTotalPrice = async (row: TableImportBill) => {
    const previousQuantity = row.originalSoLuong;

    if (row.soLuong === "0") {
        row.soLuong = 1;
    }
    row.tongTien = Number(row.soLuong) * row.donGia;

    if (route.params.id) {
        const quantityDifference =
            Number(row.soLuong) - Number(previousQuantity);

        await updateImportBill({
            MaHoaDon: route.params.Id,
            MaNhaPhanPhoi: ruleForm.maNhaPhanPhoi,
            KieuThanhToan: ruleForm.kieuThanhToan,
            TongTien: ruleForm.tongGia,
            list_json_chitiethoadonnhap: [
                {
                    id: row.maChiTietHoaDon,
                    MaSanPham: row.maSanPham,
                    SoLuong: Number(row.soLuong),
                    DonViTinh: row.donViTinh,
                    SoLuongTon:
                        Number(row.soLuong) - Number(quantityDifference),
                    GiaNhap: Number(row.donGia),
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
                await updateImportBill({
                    MaHoaDon: route.params.id,
                    MaNhaPhanPhoi: ruleForm.maNhaPhanPhoi,
                    KieuThanhToan: ruleForm.kieuThanhToan,
                    TongTien: ruleForm.tongGia,
                    list_json_chitiethoadonnhap: [
                        {
                            Id: 0,
                            MaSanPham: 0,
                            SoLuong: 0,
                            DonViTinh: "",
                            GiaNhap: 0,
                            TongGia: 0,
                            status: 0,
                        },
                    ],
                });
                Notification("Cập nhật thành công", "success");

                router.push("/importbill");
            } else {
                const listDataProduct = tableData.value.map((value: any) => {
                    return {
                        MaSanPham: value.maSanPham,
                        SoLuong: Number(value.soLuong),
                        DonViTinh: value.donViTinh,
                        GiaNhap: Number(value.donGia),
                        TongGia: Number(value.tongTien),
                    };
                });
                if (listDataProduct.length <= 0) {
                    Notification("Bạn chưa thêm sản phẩm", "warning");
                } else {
                    await createImportBill({
                        MaNhaPhanPhoi: ruleForm.maNhaPhanPhoi,
                        KieuThanhToan: ruleForm.kieuThanhToan,
                        TongTien: Number(String(ruleForm.tongGia)),
                        MaTaiKhoan: store.user.mataikhoan,
                        list_json_chitiethoadonnhap: listDataProduct,
                    });
                    Notification("Thêm thành công", "success");
                    router.push("/importbill");
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
