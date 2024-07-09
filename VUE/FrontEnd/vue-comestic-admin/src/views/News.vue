<template>
    <div>
        <a-space warp>
            <a-button type="primary" class="btn_add" block @click=""
                >Thêm sản phẩm</a-button
            >
            <a-button type="primary" danger>Xoá sản phẩm</a-button>
        </a-space>
        <div class="table_res">
            <a-table
                rowKey="maTinTuc"
                :row-selection="rowSelection"
                :columns="columns"
                :data-source="data"
                :pagination="false"
            >
                <template v-slot:bodyCell="{ column, record }">
                    <template v-if="column.dataIndex === 'tongTien'">
                        <p>
                            {{
                                parseInt(record.tongTien).toLocaleString(
                                    "en-US"
                                )
                            }}
                        </p>
                    </template>
                    <template v-else-if="column.dataIndex === 'tuyChon'">
                        <i
                            @click="handleEdit(record)"
                            class="fa-solid fa-pen-to-square"
                        ></i>
                    </template>
                    <template v-else-if="column.dataIndex === 'hinhAnh'">
                        <img
                            :src="apiImage + record.hinhAnh"
                            alt="Hình Ảnh"
                            :style="{ width: '100px' }"
                        />
                    </template>
                    <template v-else>
                        {{ record[column.dataIndex] }}
                    </template>
                </template>
            </a-table>
        </div>
        <a-pagination
            v-model:current="currentPage"
            :total="totalItemPage"
            show-less-items
        />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import type { TableProps, TableColumnType } from "ant-design-vue";
import { searchNews } from "@/services/news.service";
import { apiImage } from "@/constant/api";

interface DataType {
    key: number;
    maTinTuc: number;
    tieuDe: string;
    noiDung: string;
    hinhAnh: string;
    maTaiKhoan: number;
    luotXem: number;
    hoTen: string;
    trangThai: string;
}

const store = useStore();
const user = computed(() => store.state.user);
const userToken = user.value?.token;

const data = ref<DataType[]>([]);
const recordItem = ref<DataType[]>([]);

const currentPage = ref<number>(1);
const totalItemPage = ref(0);

watch(currentPage, (newPage: number, oldPage: number) => {
    if (newPage !== oldPage) {
        fetchNews();
    }
});

const fetchNews = async () => {
    try {
        if (!userToken) {
            throw new Error("User token is not available");
        }
        const response = await searchNews(userToken, {
            page: currentPage.value,
            pageSize: 10,
        });
        totalItemPage.value = response.totalItems;
        data.value = response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

onMounted(() => {
    fetchNews();
});

const handleEdit = (item: DataType) => {
    recordItem.value = item;
    console.log(recordItem.value);
};

const columns: TableColumnType<DataType>[] = [
    {
        title: "ID",
        dataIndex: "maTinTuc",
    },
    {
        title: "Hình Ảnh",
        dataIndex: "hinhAnh",
    },
    {
        title: "Tiêu đề",
        dataIndex: "tieuDe",
    },
    {
        title: "Người Đăng",
        dataIndex: "hoTen",
    },
    {
        title: "Lượt Xem",
        dataIndex: "luotXem",
    },
    {
        title: "Trạng Thái",
        dataIndex: "trangThai",
    },
    {
        title: "Tuỳ Chọn",
        align: "center",
        dataIndex: "tuyChon",
    },
];

const rowSelection: TableProps["rowSelection"] = {
    onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
};
</script>

<style lang="scss" scoped></style>
