<template>
    <div>
        <a-modal
            :open="isModal"
            cancelText="Hủy bỏ"
            okText="Lưu lại"
            title="Thông tin sản phẩm"
            width="55vw"
            @ok="handleOk"
            @cancel="handleCancel"
        >
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
            >
                <a-form-item
                    :style="{ display: 'none' }"
                    label="Mã sản phẩm"
                    name="maSanPham"
                >
                    <a-input v-model:value="formState.maSanPham" />
                </a-form-item>

                <a-form-item
                    label="Tên danh mục"
                    name="maDanhMuc"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng chọn tên danh mục',
                        },
                    ]"
                >
                    <a-select
                        v-model:value="formState.maDanhMuc"
                        show-search
                        placeholder="Vui lòng chọn danh mục"
                        :options="optionsCategory"
                        :filter-option="filterOption"
                    ></a-select>
                </a-form-item>

                <a-form-item
                    label="Tên danh mục ưu đãi"
                    name="madanhmucuudai"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng chọn tên danh mục ưu đãi',
                        },
                    ]"
                >
                    <a-select
                        v-model:value="formState.madanhmucuudai"
                        show-search
                        placeholder="Vui lòng chọn danh mục ưu đãi"
                        :options="optionsCategoryOffer"
                        :filter-option="filterOption"
                    ></a-select>
                </a-form-item>

                <a-form-item
                    label="Tên sản phẩm"
                    name="tenSanPham"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên sản phẩm',
                        },
                    ]"
                >
                    <a-textarea v-model:value="formState.tenSanPham" />
                </a-form-item>

                <a-form-item
                    label="Ảnh sản phẩm"
                    name="anhDaiDien"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng chọn ảnh sản phẩm',
                        },
                    ]"
                >
                    <a-upload
                        :custom-request="handleCustomRequestImg"
                        list-type="picture-card"
                        :max-count="1"
                        v-model:fileList="formState.anhDaiDien"
                    >
                        <div>
                            <PlusOutlined />
                            <div style="margin-top: 8px">Upload</div>
                        </div>
                    </a-upload>
                </a-form-item>

                <a-form-item
                    label="Ảnh chi tiết sản phẩm"
                    name="anhChiTiet"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng chọn ảnh chi tiết sản phẩm',
                        },
                    ]"
                >
                    <a-upload
                        :custom-request="handleCustomRequestImgs"
                        list-type="picture-card"
                        v-model:fileList="formState.anhChiTiet"
                        multiple
                    >
                        <div>
                            <PlusOutlined />
                            <div style="margin-top: 8px">Upload</div>
                        </div>
                    </a-upload>
                </a-form-item>

                <a-form-item label="Giá Nhập" name="gianhap">
                    <a-input
                        type="number"
                        v-model:value="formState.gianhap"
                        disabled
                    />
                </a-form-item>

                <a-form-item label="Giá (Giá nhập + 50%)" name="gia">
                    <a-input
                        type="number"
                        v-model:value="formState.gia"
                        disabled
                    />
                </a-form-item>

                <a-form-item label="Giá Giảm (Giá nhập + 30%)" name="giaGiam">
                    <a-input
                        type="number"
                        v-model:value="formState.giaGiam"
                        :default-value="0"
                    />
                </a-form-item>

                <a-form-item label="Số Lượng" name="soLuong">
                    <a-input
                        type="number"
                        v-model:value="formState.soLuong"
                        disabled
                        :default-value="0"
                    />
                </a-form-item>

                <a-form-item
                    label="Trọng Lượng"
                    name="trongLuong"
                    :rules="[
                        {
                            required: true,
                            message: 'Trọng lượng không được để trống!',
                        },
                    ]"
                >
                    <a-input v-model:value="formState.trongLuong" />
                </a-form-item>

                <a-form-item
                    label="Trạng Thái"
                    name="trangThai"
                    :rules="[
                        {
                            required: true,
                            message: 'Trạng thái không được để trống!',
                        },
                    ]"
                >
                    <a-select
                        v-model:value="formState.trangThai"
                        placeholder="Chọn trạng thái"
                    >
                        <a-select-option :value="true"
                            >Hoạt Động</a-select-option
                        >
                        <a-select-option :value="false">Tắt</a-select-option>
                    </a-select>
                </a-form-item>

                <a-form-item
                    label="Tên nhà sản xuất"
                    name="maNhaSanXuat"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng chọn tên nhà sản xuất',
                        },
                    ]"
                >
                    <a-select
                        v-model:value="formState.maNhaSanXuat"
                        show-search
                        placeholder="Vui lòng chọn nhà sản xuất"
                        :options="optionsCategoryManufactor"
                        :filter-option="filterOption"
                    ></a-select>
                </a-form-item>

                <a-form-item
                    label="Tên nhà phân phối"
                    name="maNhaPhanPhoi"
                    :rules="[
                        {
                            required: true,
                            message: 'Vui lòng chọn tên nhà phân phối',
                        },
                    ]"
                >
                    <a-select
                        v-model:value="formState.maNhaPhanPhoi"
                        show-search
                        placeholder="Vui lòng chọn nhà phân phối"
                        :options="optionsCategoryDistributor"
                        :filter-option="filterOption"
                    ></a-select>
                </a-form-item>

                <a-form-item
                    label="Xuất Xứ"
                    name="xuatXu"
                    :rules="[
                        {
                            required: true,
                            message: 'Xuất xứ không được để trống!',
                        },
                    ]"
                >
                    <a-input v-model:value="formState.xuatXu" />
                </a-form-item>

                <a-form-item
                    label="Mô Tả"
                    name="moTa"
                    :rules="[
                        {
                            required: true,
                            message: 'Mô Tả không được để trống!',
                        },
                    ]"
                >
                    <a-textarea :rows="4" v-model:value="formState.moTa" />
                </a-form-item>

                <a-form :model="formState">
                    <a-form-item
                        label="Chi Tiết"
                        name="chiTiet"
                        :rules="[
                            {
                                required: true,
                                message: 'Chi tiết không được để trống!',
                            },
                        ]"
                    >
                        <ckeditor
                            :editor="editor"
                            v-model="formState.chiTiet"
                        />
                    </a-form-item>
                </a-form>
            </a-form>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, reactive, onMounted, computed } from "vue";
import type { SelectProps } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
    getCategory,
    getCategoryOffer,
    getManufactor,
    getDistributor,
} from "@/services/product.service";
import axios from "axios";
import { apiImage } from "@/constant/api";
import { useStore } from "vuex";

interface Props {
    isModal: boolean;
    recordItem: object;
    closeModal: () => void;
}

interface FormState {
    maSanPham?: string;
    maDanhMuc?: string;
    madanhmucuudai?: string;
    tenSanPham?: string;
    anhDaiDien?: string;
    anhChiTiet?: string;
    gianhap?: number;
    gia?: number;
    giaGiam?: number;
    soLuong?: number;
    trongLuong?: number;
    trangThai?: boolean;
    maNhaSanXuat?: string;
    maNhaPhanPhoi?: string;
    xuatXu?: string;
    moTa?: string;
    chiTiet?: string;
}

const formState = reactive<FormState>({
    gianhap: 0,
    gia: 0,
    giaGiam: 0,
    soLuong: 0,
    trongLuong: 0,
    trangThai: true,
    xuatXu: "",
    moTa: "",
    chiTiet: "",
});

const props = defineProps<Props>();

const editor = ClassicEditor;

const store = useStore();

const user = computed(() => store.state.user);

const userToken = user.value?.token;

const handleOk = () => {
    // props.closeModal();
    console.log(formState);
};

const handleCancel = () => {
    props.closeModal();
};

const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

let optionsCategory = ref<SelectProps["options"]>([{}]);

async function fetchCategory() {
    const res = await getCategory();
    optionsCategory.value = res.map(function (value: any) {
        return {
            value: value.maDanhMuc,
            label: value.tenDanhMuc,
        };
    });
}

onMounted(() => {
    fetchCategory();
});

let optionsCategoryOffer = ref<SelectProps["options"]>([{}]);

async function fetchCategoryOffer() {
    const res = await getCategoryOffer();
    optionsCategoryOffer.value = res.map(function (value: any) {
        return {
            value: value.madanhmucuudai,
            label: value.tendanhmucuudai,
        };
    });
}

onMounted(() => {
    fetchCategoryOffer();
});

const fileLists = ref([]);

const handleCustomRequestImg = async ({ file, onSuccess, onError }: any) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(
            apiImage + "/api-admin/Image/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: "Bearer " + userToken,
                },
            }
        );

        if (response.status === 200) {
            onSuccess(response.data);
            formState.anhDaiDien = response.data.filePath;
            console.log(formState.anhDaiDien);
        } else {
            onError(new Error("Upload failed"));
        }
    } catch (error) {
        onError(error);
    }
};

const handleCustomRequestImgs = async ({ file, onSuccess, onError }: any) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(
            apiImage + "/api-admin/Image/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: "Bearer " + userToken,
                },
            }
        );

        if (response.status === 200) {
            onSuccess(response.data);
            // formState.anhDaiDien = response.data.filePath;
            console.log(response.data);
        } else {
            onError(new Error("Upload failed"));
        }
    } catch (error) {
        onError(error);
    }
};

let optionsCategoryManufactor = ref<SelectProps["options"]>([{}]);

async function fetchCategoryManufactor() {
    const res = await getManufactor();
    optionsCategoryManufactor.value = res.map(function (value: any) {
        return {
            value: value.maNhaSanXuat,
            label: value.tenHang,
        };
    });
}

onMounted(() => {
    fetchCategoryManufactor();
});

let optionsCategoryDistributor = ref<SelectProps["options"]>([{}]);

async function fetchCategoryDistributor() {
    const res = await getDistributor();
    console.log(res);
    optionsCategoryDistributor.value = res.map(function (value: any) {
        return {
            value: value.maNhaPhanPhoi,
            label: value.tenNhaPhanPhoi,
        };
    });
}

onMounted(() => {
    fetchCategoryDistributor();
});

onMounted(() => {
    editor
        .create(document.querySelector("#editor"), {
            // Initial configuration options
        })
        .then((editorInstance: any) => {
            editorInstance.editing.view.change((writer: any) => {
                writer.setStyle(
                    "height",
                    "200px",
                    editorInstance.editing.view.document.getRoot()
                );
            });
        })
        .catch((error: any) => {
            console.error(
                "There was a problem initializing the editor.",
                error
            );
        });
});
</script>
