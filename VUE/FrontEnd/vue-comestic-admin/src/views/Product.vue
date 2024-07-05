<template>
    <div>
        <a-space warp>
            <a-button
                type="primary"
                class="btn_add"
                block
                @click="handlerAddItem"
                >Thêm sản phẩm</a-button
            >
            <a-button type="primary" danger>Xoá sản phẩm</a-button>
        </a-space>
        <div class="table_res">
            <a-table
                rowKey="maSanPham"
                :row-selection="rowSelection"
                :columns="columns"
                :data-source="data"
            >
                <template v-slot:bodyCell="{ column, record }">
                    <template v-if="column.dataIndex === 'tenSanPham'">
                        <div class="product-name" :title="record.tenSanPham">
                            {{ record.tenSanPham }}
                        </div>
                    </template>
                    <template v-else-if="column.dataIndex === 'anhDaiDien'">
                        <img
                            :src="apiImage + record.anhDaiDien"
                            alt="Hình Ảnh"
                            style="width: 100px"
                        />
                    </template>
                    <template v-else-if="column.dataIndex === 'giaGiam'">
                        <p>
                            {{
                                parseInt(record.giaGiam).toLocaleString("en-US")
                            }}
                        </p>
                    </template>
                    <template v-else-if="column.dataIndex === 'trangThai'">
                        <p
                            :style="{
                                color: record.trangThai ? '#00CC00' : '#FFCC00',
                            }"
                        >
                            {{ record.trangThai ? "Hoạt Động" : "Đã Ẩn" }}
                        </p>
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
        <ProductModal
            :isModal="openModalState"
            :closeModal="IsCloseModal"
            :recordItem="recordItem"
            :fetchData="fetchProducts"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount } from "vue";
import { useStore } from "vuex";
import type { TableProps, TableColumnType } from "ant-design-vue";
import { apiImage } from "@/constant/api";

import { searchProduct } from "@/services/product.service";
import ProductModal from "@/components/Product/ProductModal.vue";

interface DataType {
    key: number;
    maSanPham: number;
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

const store = useStore();

const user = computed(() => store.state.user);

const userToken = user.value?.token;

const data = ref<DataType[]>([]);
const recordItem = ref<DataType[]>([]);
const openModalState = ref<boolean>(false);

const fetchProducts = async () => {
    try {
        if (!userToken) {
            throw new Error("User token is not available");
        }
        const response = await searchProduct(userToken, {
            page: 1,
            pageSize: 10,
        });
        data.value = response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

onMounted(() => {
    fetchProducts();
});

const dataSet = computed(() => {
    return data.value.map((value: any, index: number) => ({
        key: index + 1,
        maSanPham: value.maSanPham,
        tenSanPham: value.tenSanPham,
        anhDaiDien: apiImage + value.anhDaiDien,
        giaGiam: value.giaGiam,
        soLuong: value.soLuong,
        luotBan: value.luotBan,
        danhGia: value.danhGia,
        trongLuong: value.trongLuong,
        tenDanhMuc: value.tenDanhMuc,
        tendanhmucuudai: value.tendanhmucuudai,
        trangThai: value.trangThai,
    }));
});

const handleEdit = (item: DataType) => {
    recordItem.value = item;
    console.log(item);
    IsShowModal();
};

const IsShowModal = () => {
    openModalState.value = true;
};

const IsCloseModal = () => {
    openModalState.value = false;
};

const handlerAddItem = () => {
    IsShowModal();
};

const columns: TableColumnType<DataType>[] = [
    {
        title: "ID",
        dataIndex: "maSanPham",
    },
    {
        title: "Tên Sản Phẩm",
        dataIndex: "tenSanPham",
        align: "center",
    },
    {
        title: "Hình Ảnh",
        dataIndex: "anhDaiDien",
        align: "center",
    },
    {
        title: "Giá Bán",
        dataIndex: "giaGiam",
        align: "center",
    },
    {
        title: "Số Lượng",
        dataIndex: "soLuong",
        align: "center",
    },
    {
        title: "Đã Bán",
        dataIndex: "luotBan",
        align: "center",
    },
    {
        title: "Đánh Giá",
        dataIndex: "danhGia",
        align: "center",
    },
    {
        title: "Trọng Lượng",
        dataIndex: "trongLuong",
        align: "center",
    },
    {
        title: "Danh mục",
        dataIndex: "tenDanhMuc",
        align: "center",
    },
    {
        title: "Danh mục ưu đãi",
        dataIndex: "tendanhmucuudai",
        align: "center",
    },
    {
        title: "Trạng Thái",
        dataIndex: "trangThai",
        align: "center",
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

<style lang="scss" scoped>
.product-name {
    max-width: 150px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

// .product-name:hover {
//     color: #0099FF;
// }

.table_res {
    margin-top: 15px;
}

.btn_add {
    background-color: #00cc00 !important;
    border-color: #00cc00 !important;
}

.btn_add:hover,
.btn_add:focus {
    background-color: #339900 !important;
    border-color: #339900 !important;
}
</style>
