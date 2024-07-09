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
                rowKey="maDanhGia"
                :row-selection="rowSelection"
                :columns="columns"
                :data-source="data"
                :pagination="false"
            >
                <template v-slot:bodyCell="{ column, record }">
                    <template v-if="column.dataIndex === 'chatLuong'">
                        <div>
                            <span>{{ record.chatLuong }}</span>
                            <i
                                class="fa-solid fa-star"
                                :style="{
                                    marginTop: '-3px',
                                    color: '#ff9c1a',
                                    marginLeft: '2px',
                                }"
                            ></i>
                        </div>
                    </template>
                    <template v-else-if="column.dataIndex === 'anhDanhGia'">
                        <img
                            :src="apiImage + record.anhDanhGia"
                            alt="Hình Ảnh"
                            :style="{ width: '100px' }"
                        />
                    </template>
                    <template v-else-if="column.dataIndex === 'tuyChon'">
                        <i
                            @click="handleEdit(record)"
                            class="fa-solid fa-pen-to-square"
                        ></i>
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
import { searchRate } from "@/services/rate.service";
import { apiImage } from "@/constant/api";

interface DataType {
    key: number;
    maDanhGia: number;
    maSanPham: number;
    maTaiKhoan: number;
    anhDanhGia: string;
    chatLuong: number;
    noiDung: string;
    trangThai: boolean;
    thoiGian: Date;
    ghiChu: string;
    tenSanPham: string;
    hoTen: string;
    tenTaiKhoan: string;
    soDienThoai: string;
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
        fetchRate();
    }
});

const fetchRate = async () => {
    try {
        if (!userToken) {
            throw new Error("User token is not available");
        }
        const response = await searchRate(userToken, {
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
    fetchRate();
});

const handleEdit = (item: DataType) => {
    recordItem.value = item;
    console.log(recordItem.value);
};

const columns: TableColumnType<DataType>[] = [
    {
        title: "ID",
        dataIndex: "maDanhGia",
    },
    {
        title: "Tên Người Dùng",
        dataIndex: "hoTen",
    },
    {
        title: "Tên Đăng Nhập",
        dataIndex: "tenTaiKhoan",
    },
    {
        title: "Số Điện Thoại",
        dataIndex: "soDienThoai",
    },
    {
        title: "Tên Sản Phẩm",
        dataIndex: "tenSanPham",
    },
    {
        title: "Chất Lượng",
        dataIndex: "chatLuong",
    },
    {
        title: "Nội Dung",
        dataIndex: "noiDung",
    },
    {
        title: "Ảnh Đánh Giá",
        dataIndex: "anhDanhGia",
    },
    {
        title: "Thời Gian",
        dataIndex: "thoiGian",
    },
    {
        title: "Trạng Thái",
        dataIndex: "trangThai",
    },
    {
        title: "Ghi Chú",
        dataIndex: "ghiChu",
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
