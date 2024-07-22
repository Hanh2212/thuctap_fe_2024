import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "~/store";

import DefaultLayout from "~/layouts/DefaultLayout.vue";
import OnlyChildren from "~/layouts/OnlyChildren.vue";

import LayoutView from "~/views/LayoutView.vue";

import Login from "~/views/Login.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("~/views/Home.vue"),
                meta: {
                    breadcrumbName: "Tổng quan",
                    requiresAuth: true,
                },
            },
            {
                path: "product",
                name: "Product",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Thông tin sản phẩm",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListProduct",
                        component: () =>
                            import("~/components/Product/ListProduct.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddProduct",
                        component: () =>
                            import("~/components/Product/AddorEditProduct.vue"),
                        meta: {
                            breadcrumbName: "Thêm sản phẩm",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditProduct",
                        component: () =>
                            import("~/components/Product/AddorEditProduct.vue"),
                        meta: {
                            breadcrumbName: "Sửa sản phẩm",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "billsell",
                name: "BillSell",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Hoá đơn bán",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListBillSell",
                        component: () =>
                            import("~/components/BillSell/ListBillSell.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddBillSell",
                        component: () =>
                            import(
                                "~/components/BillSell/AddorEditBillSell.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm hoá đơn bán",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditBillSell",
                        component: () =>
                            import(
                                "~/components/BillSell/AddorEditBillSell.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa hoá đơn bán",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "importbill",
                name: "ImportBill",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Hoá đơn nhập",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListImportBill",
                        component: () =>
                            import(
                                "~/components/ImportBill/ListImportBill.vue"
                            ),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddImportBill",
                        component: () =>
                            import(
                                "~/components/ImportBill/AddorEditImportBill.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm hoá đơn nhập",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditImportBill",
                        component: () =>
                            import(
                                "~/components/ImportBill/AddorEditImportBill.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa hoá đơn nhập",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "news",
                name: "News",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Tin tức",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListNews",
                        component: () =>
                            import("~/components/News/ListNews.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddNews",
                        component: () =>
                            import("~/components/News/AddorEditNews.vue"),
                        meta: {
                            breadcrumbName: "Thêm tin tức",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditNews",
                        component: () =>
                            import("~/components/News/AddorEditNews.vue"),
                        meta: {
                            breadcrumbName: "Sửa tin tức",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "rate",
                name: "Rate",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Đánh giá",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListRate",
                        component: () =>
                            import("~/components/Rate/ListRate.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditRate",
                        component: () =>
                            import("~/components/Rate/AddorEditRate.vue"),
                        meta: {
                            breadcrumbName: "Sửa đánh giá",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "category",
                name: "Category",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Danh mục",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListCategory",
                        component: () =>
                            import("~/components/Category/ListCategory.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddCategory",
                        component: () =>
                            import(
                                "~/components/Category/AddorEditCategory.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm danh mục",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditCategory",
                        component: () =>
                            import(
                                "~/components/Category/AddorEditCategory.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa danh mục",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "categoryoffer",
                name: "CategoryOffer",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Danh mục ưu đãi",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListCategoryOffer",
                        component: () =>
                            import(
                                "~/components/CategoryOffer/ListCategoryOffer.vue"
                            ),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddCategoryOffer",
                        component: () =>
                            import(
                                "~/components/CategoryOffer/AddorEditCategoryOffer.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm danh mục ưu đãi",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditCategoryOffer",
                        component: () =>
                            import(
                                "~/components/CategoryOffer/AddorEditCategoryOffer.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa danh mục ưu đãi",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "manufactor",
                name: "Manufactor",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Hãng sản xuất",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListManufactor",
                        component: () =>
                            import(
                                "~/components/Manufactor/ListManufactor.vue"
                            ),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddManufactor",
                        component: () =>
                            import(
                                "~/components/Manufactor/AddorEditManufactor.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm hãng sản xuất",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditManufactor",
                        component: () =>
                            import(
                                "~/components/Manufactor/AddorEditManufactor.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa hãng sản xuất",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "distributor",
                name: "Distributor",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Nhà phân phối",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListDistributor",
                        component: () =>
                            import(
                                "~/components/Distributor/ListDistributor.vue"
                            ),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddDistributor",
                        component: () =>
                            import(
                                "~/components/Distributor/AddorEditDistributor.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm nhà phân phối",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditDistributor",
                        component: () =>
                            import(
                                "~/components/Distributor/AddorEditDistributor.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa nhà phân phối",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "advertisement",
                name: "Advertisement",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Quảng cáo",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListAdvertisement",
                        component: () =>
                            import(
                                "~/components/Advertisement/ListAdvertisement.vue"
                            ),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddAdvertisement",
                        component: () =>
                            import(
                                "~/components/Advertisement/AddorEditAdvertisement.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm quảng cáo",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditAdvertisement",
                        component: () =>
                            import(
                                "~/components/Advertisement/AddorEditAdvertisement.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa quảng cáo",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "slide",
                name: "Slide",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Slide",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListSlide",
                        component: () =>
                            import("~/components/Slide/ListSlide.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddSlide",
                        component: () =>
                            import("~/components/Slide/AddorEditSlide.vue"),
                        meta: {
                            breadcrumbName: "Thêm slide",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditSlide",
                        component: () =>
                            import("~/components/Slide/AddorEditSlide.vue"),
                        meta: {
                            breadcrumbName: "Sửa slide",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "typeaccount",
                name: "TypeAccount",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Loại tài khoản",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListTypeAccount",
                        component: () =>
                            import(
                                "~/components/TypeAccount/ListTypeAccount.vue"
                            ),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddTypeAccount",
                        component: () =>
                            import(
                                "~/components/TypeAccount/AddorEditTypeAccount.vue"
                            ),
                        meta: {
                            breadcrumbName: "Thêm loại tài khoản",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditTypeAccount",
                        component: () =>
                            import(
                                "~/components/TypeAccount/AddorEditTypeAccount.vue"
                            ),
                        meta: {
                            breadcrumbName: "Sửa loại tài khoản",
                            requiresAuth: true,
                        },
                    },
                ],
            },
            {
                path: "account",
                name: "Account",
                component: LayoutView,
                meta: {
                    breadcrumbName: "Tài khoản",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListAccount",
                        component: () =>
                            import("~/components/Account/ListAccount.vue"),
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddAccount",
                        component: () =>
                            import("~/components/Account/AddorEditAccount.vue"),
                        meta: {
                            breadcrumbName: "Thêm tài khoản",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditAccount",
                        component: () =>
                            import("~/components/Account/AddorEditAccount.vue"),
                        meta: {
                            breadcrumbName: "Sửa tài khoản",
                            requiresAuth: true,
                        },
                    },
                ],
            },
        ],
    },
    {
        path: "/",
        component: OnlyChildren,
        children: [
            {
                path: "login",
                name: "Login",
                component: Login,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useUserStore();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const user = store.getUser;

    if (requiresAuth && (!user || Object.keys(user).length === 0)) {
        next({ name: "Login" });
    } else {
        next();
    }
});

export default router;
