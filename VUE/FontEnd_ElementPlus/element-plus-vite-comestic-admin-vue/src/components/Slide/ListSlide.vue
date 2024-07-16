<template>
    <el-card class="card_content">
        <div class="button_add">
            <el-button @click="handlerAdd" type="primary"
                ><el-icon><CirclePlus /></el-icon
            ></el-button>
        </div>
        <el-table :data="tableData" class="table_content">
            <el-table-column label="Hình ảnh" align="center" prop="linkAnh">
                <template #default="scope">
                    <img
                        :src="apiImage + scope.row.linkAnh"
                        alt="Hình ảnh sản phẩm"
                        class="img_item"
                    /> </template
            ></el-table-column>
            <el-table-column label="Tiêu đề" align="center" prop="tieuDe" />
            <el-table-column label="Mô tả" align="center" prop="moTa" />

            <el-table-column align="right">
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
                        @confirm="() => confirmEvent(scope.row.maAnh)"
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
import { apiImage } from "~/constant/request";
import { Slide } from "~/constant/api";
import { deleteBannerSlide, searchSlide } from "~/services/slide.service";
import router from "~/router";
import { ElMessage } from "element-plus";

const tableData = ref<Slide[]>([]);

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
        fetchData();
    }
});

const handleEdit = (index: number, row: Slide) => {
    router.push(`/slide/edit/${row.maAnh}`);
};

const confirmEvent = async (Id: number) => {
    try {
        await deleteBannerSlide([Id]);
        Notification("Xoá thành công", "success");
        fetchData();
    } catch (error) {
        console.error("Error deleting =:", error);
        Notification("Lỗi khi xoá =", "error");
    }
};

const fetchData = async () => {
    try {
        const res = await searchSlide({
            page: currentPage.value,
            pageSize: 10,
        });
        totalItemPage.value = res.totalItems;
        tableData.value = res.data.map(function (value: Slide) {
            return {
                maAnh: value.maAnh,
                linkAnh: value.linkAnh,
                tieuDe: value.tieuDe,
                moTa: value.moTa,
            };
        });
    } catch (error) {
        console.error("Error fetching:", error);
        tableData.value = [];
    }
};

onMounted(() => {
    fetchData();
});

const handlerAdd = () => {
    router.push("/slide/add");
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
    width: 150px;
    height: 70px;
    object-fit: contain;
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
