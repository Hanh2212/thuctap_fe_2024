<template>
    <el-card class="card_content">
        <div class="button_add">
            <el-button type="primary"
                ><el-icon><CirclePlus /></el-icon
            ></el-button>
        </div>
        <el-table :data="tableData" class="table_content">
            <el-table-column
                label="Nhà phân phối"
                align="center"
                prop="tenNhaPhanPhoi"
            >
                <template #default="scope">
                    <span :title="scope.row.tenNhaPhanPhoi" class="name_item">{{
                        scope.row.tenNhaPhanPhoi
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Người tạo"
                align="center"
                prop="tenTaiKhoan"
            />
            <el-table-column label="Tổng tiền" align="center" prop="tongTien">
                <template #default="scope">
                    <span>{{
                        parseInt(scope.row.tongTien).toLocaleString("en-US")
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Kiểu thanh toán"
                align="center"
                prop="kieuThanhToan"
            />
            <el-table-column label="Ngày tạo" align="center" prop="ngayTao" />
            <el-table-column align="right">
                <template #header>
                    <el-input
                        v-model="search"
                        size="small"
                        placeholder="Nhập tên nhà phân phối"
                    />
                </template>
                <template #default="scope">
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)"
                    >
                        Edit
                    </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >
                        Delete
                    </el-button>
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
import { ImportBill } from "~/constant/api";
import { searchImportBill } from "~/services/importbill.service";

const search = ref<string>("");

const tableData = ref<ImportBill[]>([]);

const currentPage = ref<number>(1);
const totalItemPage = ref(0);

watch(currentPage, (newPage: number, oldPage: number) => {
    if (newPage !== oldPage) {
        fetchData(search.value);
    }
});

const handleEdit = (index: number, row: ImportBill) => {
    console.log(index, row);
};
const handleDelete = (index: number, row: ImportBill) => {
    console.log(index, row);
};

const fetchData = async (searchTerm: string = "") => {
    try {
        const res = await searchImportBill({
            page: currentPage.value,
            pageSize: 10,
            NhaPhanPhoi: searchTerm,
        });
        totalItemPage.value = res.totalItems;
        tableData.value = res.data.map(function (value: ImportBill) {
            return {
                maHoaDon: value.maHoaDon,
                maNhaPhanPhoi: value.maNhaPhanPhoi,
                tenNhaPhanPhoi: value.tenNhaPhanPhoi,
                ngayTao: value.ngayTao,
                kieuThanhToan: value.kieuThanhToan,
                tongTien: value.tongTien,
                tenTaiKhoan: value.tenTaiKhoan,
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
