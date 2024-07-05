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
                        :options="options"
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
                        :options="options"
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
                        action="/upload.do"
                        list-type="picture-card"
                        :max-count="1"
                        v-model:fileList="fileList"
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
                        action="/upload.doa"
                        list-type="picture-card"
                        v-model:fileList="fileLists"
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
                        :options="options"
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
                        :options="options"
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
                            :config="editorConfig"
                        />
                    </a-form-item>
                </a-form>
            </a-form>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, reactive, onMounted } from "vue";
import type { SelectProps } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { CKEditor } from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

const handleOk = () => {
    // props.closeModal();
    console.log(formState);
};

const handleCancel = () => {
    props.closeModal();
};

const handleChangeCategory = (value: string) => {
    console.log(`selected ${value}`);
};

const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const options = ref<SelectProps["options"]>([
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "tom", label: "Tom" },
]);

const handleChangeCategoryOffer = (value: string) => {
    console.log(`selected ${value}`);
};

const fileList = ref([]);
const fileLists = ref([]);

const handleUploadImgChange = ({ fileList: newFileList }: any) => {
    fileList.value = newFileList;
    console.log(newFileList);
};

const handleUploadImgDetailChange = ({ fileLists: newFileList }: any) => {
    fileLists.value = newFileList;
    console.log(newFileList);
};

const editorConfig = {
    toolbar: ["heading", "|", "bold", "italic", "link"],
    // any other configuration options
};

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
