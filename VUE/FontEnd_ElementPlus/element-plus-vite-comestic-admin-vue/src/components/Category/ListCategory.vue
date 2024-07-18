<template>
    <el-card class="card_content">
        <div class="button_add">
            <el-button @click="handlerAdd" type="primary"
                ><el-icon><CirclePlus /></el-icon
            ></el-button>
        </div>
        <el-table :data="tableData" class="table_content">
            <el-table-column
                label="Danh mục"
                align="center"
                prop="tenDanhMuc"
            />
            <el-table-column label="Nội dung" align="center" prop="noiDung" />
            <el-table-column label="Trạng thái" align="center" prop="dacBiet">
                <template #default="scope">
                    <p
                        :style="{
                            color:
                                scope.row.dacBiet === true
                                    ? '#33CC33'
                                    : '#CC3333',
                        }"
                    >
                        {{ scope.row.dacBiet === true ? "Hoạt động" : "Tắt" }}
                    </p>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template #header>
                    <el-input
                        v-model="search"
                        size="small"
                        placeholder="Nhập tên danh mục"
                    />
                </template>
                <template #default="scope">
                    <el-button
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
                        @confirm="() => confirmEvent(scope.row.maDanhMuc)"
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
import { CirclePlus, StarFilled } from "@element-plus/icons-vue";
import debounce from "~/utils/debounce";
import { apiImage } from "~/constant/request";
import { Category } from "~/constant/api";
import { deleteCategory, searchCategory } from "~/services/category.service";
import router from "~/router";
import { ElMessage } from "element-plus";

const search = ref<string>("");

const tableData = ref<Category[]>([]);

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

const handleEdit = (index: number, row: Category) => {
    router.push(`/category/edit/${row.maDanhMuc}`);
};

const confirmEvent = async (Id: number) => {
    try {
        await deleteCategory([Id]);
        Notification("Xoá thành công", "success");
        fetchData(search.value);
    } catch (error) {
        console.error("Error deleting =:", error);
        Notification("Lỗi khi xoá =", "error");
    }
};

const fetchData = async (searchTerm: string = "") => {
    try {
        const res = await searchCategory({
            page: currentPage.value,
            pageSize: 10,
            TenDanhMuc: searchTerm,
        });
        totalItemPage.value = res.totalItems;
        tableData.value = res.data.map(function (value: Category) {
            return {
                maDanhMuc: value.maDanhMuc,
                tenDanhMuc: value.tenDanhMuc,
                dacBiet: value.dacBiet,
                noiDung: value.noiDung,
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
    router.push("/category/add");
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
