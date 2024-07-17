<template>
    <el-card class="card_content">
        <div class="button_add">
            <el-button @click="handlerAdd" type="primary"
                ><el-icon><CirclePlus /></el-icon
            ></el-button>
        </div>
        <el-table :data="tableData" class="table_content">
            <el-table-column label="Khách hàng" align="center" prop="tenKH">
                <template #default="scope">
                    <span :title="scope.row.tenKH" class="name_item">{{
                        scope.row.tenKH
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Người tạo"
                align="center"
                prop="tenTaiKhoan"
            />
            <el-table-column label="Tổng tiền" align="center" prop="tongGia">
                <template #default="scope">
                    <span>{{
                        parseInt(scope.row.tongGia).toLocaleString("en-US")
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Địa chỉ giao"
                align="center"
                prop="diaChiGiaoHang"
            />
            <el-table-column label="Số điện thoại" align="center" prop="sdt">
            </el-table-column>
            <el-table-column label="Ngày tạo" align="center" prop="ngayTao" />
            <el-table-column
                label="Trạng thái"
                align="center"
                prop="trangThai"
            />
            <el-table-column align="right">
                <template #header>
                    <el-input
                        v-model="search"
                        size="small"
                        placeholder="Nhập tên khách hàng"
                    />
                </template>
                <template #default="scope">
                    <el-button
                        v-if="scope.row.trangThai != 'Huỷ đơn'"
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)"
                    >
                        Edit
                    </el-button>
                    <el-popconfirm
                        confirm-button-text="Yes"
                        cancel-button-text="No"
                        icon-color="#626AEF"
                        title="Bạn có muốn xoá không?"
                        @confirm="() => confirmEvent(scope.row.maHoaDon)"
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
import { useUserStore } from "~/store";
import { CirclePlus, StarFilled } from "@element-plus/icons-vue";
import debounce from "~/utils/debounce";
import { BillSell } from "~/constant/api";
import { deleteBillSell, searchBillSell } from "~/services/billsell.service";
import router from "~/router";
import { ElMessage } from "element-plus";

const search = ref<string>("");

const tableData = ref<BillSell[]>([]);

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

const handleEdit = (index: number, row: BillSell) => {
    router.push(`/billsell/edit/${row.maHoaDon}`);
};

const confirmEvent = async (Id: number) => {
    try {
        await deleteBillSell([Id]);
        Notification("Xoá thành công", "success");
        fetchData(search.value);
    } catch (error) {
        console.error("Error deleting =:", error);
        Notification("Lỗi khi xoá =", "error");
    }
};

const fetchData = async (searchTerm: string = "") => {
    try {
        const res = await searchBillSell({
            page: currentPage.value,
            pageSize: 10,
            TenKH: searchTerm,
        });
        totalItemPage.value = res.totalItems;
        tableData.value = res.data.map(function (value: BillSell) {
            return {
                maHoaDon: value.maHoaDon,
                tenTaiKhoan: value.tenTaiKhoan,
                trangThai: value.trangThai,
                ngayTao: value.ngayTao,
                tongGia: value.tongGia,
                tenKH: value.tenKH,
                diaChi: value.diaChi,
                email: value.email,
                sdt: value.sdt,
                diaChiGiaoHang: value.diaChiGiaoHang,
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

const handlerAdd = () => {
    router.push("/billsell/add");
};
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
