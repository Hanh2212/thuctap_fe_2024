<template>
    <el-card class="card_content">
        <el-table :data="tableData" class="table_content">
            <el-table-column label="Người dùng" align="center" prop="hoTen" />
            <el-table-column
                label="Tài khoản"
                align="center"
                prop="tenTaiKhoan"
            />
            <el-table-column
                label="Số điện thoại"
                align="center"
                prop="soDienThoai"
            />
            <el-table-column label="Sản phẩm" align="center" prop="tenSanPham">
                <template #default="scope">
                    <span :title="scope.row.tenSanPham" class="name_item">{{
                        scope.row.tenSanPham
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Chất lượng" align="center" prop="chatLuong">
                <template #default="scope">
                    <span class="rate_product" :title="scope.row.chatLuong"
                        ><span>{{ scope.row.chatLuong }}</span
                        ><el-icon class="rate_product_star"
                            ><StarFilled /></el-icon
                    ></span>
                </template>
            </el-table-column>
            <el-table-column label="Nội dung" align="center" prop="noiDung">
                <template #default="scope">
                    <span :title="scope.row.noiDung" class="name_item">{{
                        scope.row.noiDung
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Ảnh đánh giá"
                align="center"
                prop="anhDanhGia"
            >
                <template #default="scope">
                    <img
                        :src="apiImage + scope.row.anhDanhGia"
                        alt="Hình ảnh sản phẩm"
                        class="img_item"
                    /> </template
            ></el-table-column>
            <el-table-column label="Thời gian" align="center" prop="thoiGian" />
            <el-table-column
                label="Trạng thái"
                align="center"
                prop="trangThai"
            />
            <el-table-column label="Ghi chú" align="center" prop="ghiChu" />
            <el-table-column align="right">
                <template #header>
                    <el-input
                        v-model="search"
                        size="small"
                        placeholder="Nhập nội dung"
                    />
                </template>
                <template #default="scope">
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)"
                    >
                        Edit
                    </el-button>
                    <!-- <el-popconfirm
                        confirm-button-text="Yes"
                        cancel-button-text="No"
                        icon-color="#626AEF"
                        title="Bạn có muốn xoá không?"
                        @confirm="() => confirmEvent(scope.row.maDanhGia)"
                    >
                        <template #reference>
                            <el-button size="small" type="danger">
                                Delete
                            </el-button>
                        </template>
                    </el-popconfirm> -->
                </template>
            </el-table-column>
        </el-table>
        <div
            style="
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 10px 0;
            "
        >
            <el-pagination
                background
                layout="prev, pager, next"
                v-model:current-page="currentPage"
                :total="totalItemPage"
            />
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { CirclePlus, StarFilled } from "@element-plus/icons-vue";
import debounce from "~/utils/debounce";
import { apiImage } from "~/constant/request";
import { Rate } from "~/constant/api";
import { deleteRate, searchRate } from "~/services/rate.service";
import router from "~/router";
import { ElMessage } from "element-plus";

const search = ref<string>("");

const tableData = ref<Rate[]>([]);

const currentPage = ref<number>(1);
const totalItemPage = ref(0);

const Notification = (
    message: string,
    type: "success" | "warning" | "error"
) => {
    ElMessage({
        message: message,
        type: type,
    });
};

watch(currentPage, (newPage: number, oldPage: number) => {
    if (newPage !== oldPage) {
        fetchData(search.value);
    }
});

const handleEdit = (index: number, row: Rate) => {
    router.push(`/rate/edit/${row.maDanhGia}`);
};

const confirmEvent = async (Id: number) => {
    try {
        await deleteRate([Id]);
        Notification("Xoá thành công", "success");
        fetchData(search.value);
    } catch (error) {
        console.error("Error deleting =:", error);
        Notification("Lỗi khi xoá =", "error");
    }
};

const fetchData = async (searchTerm: string = "") => {
    try {
        const res = await searchRate({
            page: currentPage.value,
            pageSize: 10,
            NoiDung: searchTerm,
        });
        totalItemPage.value = res.totalItems;
        tableData.value = res.data.map(function (value: Rate) {
            return {
                maDanhGia: value.maDanhGia,
                maSanPham: value.maSanPham,
                maTaiKhoan: value.maTaiKhoan,
                anhDanhGia: value.anhDanhGia,
                chatLuong: value.chatLuong,
                noiDung: value.noiDung,
                trangThai: value.trangThai,
                thoiGian: value.thoiGian,
                ghiChu: value.ghiChu,
                tenSanPham: value.tenSanPham,
                hoTen: value.hoTen,
                tenTaiKhoan: value.tenTaiKhoan,
                soDienThoai: value.soDienThoai,
            };
        });
    } catch (error) {
        console.error("Error fetching:", error);
        tableData.value = [];
    }
};

const debouncedFetchData = debounce(fetchData, 300);

watch(search, (newSearch) => {
    debouncedFetchData(newSearch);
});

onMounted(() => {
    fetchData(search.value);
});
</script>

<style scoped>
.card_content {
    max-width: 100wh;
}

.button_add {
    display: flex;
    justify-content: flex-end;
    padding: 0 0 10px 7px;
}

.table_content {
    width: 100%;
}

.img_item {
    width: 70px;
    height: 70px;
    object-fit: cover;
}
.name_item {
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.rate_product {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
}

.rate_product_star {
    color: #ffcc00;
    font-size: 20px;
}
</style>
