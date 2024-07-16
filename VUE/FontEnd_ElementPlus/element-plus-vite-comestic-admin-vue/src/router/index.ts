import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "~/store";

import DefaultLayout from "~/layouts/DefaultLayout.vue";
import OnlyChildren from "~/layouts/OnlyChildren.vue";

import Home from "~/views/Home.vue";

import Product from "~/views/Product.vue";
import ListProduct from "~/components/Product/ListProduct.vue";

import BillSell from "~/views/BillSell.vue";
import ListBillSell from "~/components/BillSell/ListBillSell.vue";

import ImportBill from "~/views/ImportBill.vue";

import News from "~/views/News.vue";
import ListNews from "~/components/News/ListNews.vue";

import Rate from "~/views/Rate.vue";
import ListRate from "~/components/Rate/ListRate.vue";

import Category from "~/views/Category.vue";
import ListCategory from "~/components/Category/ListCategory.vue";

import CategoryOffer from "~/views/CategoryOffer.vue";
import ListCategoryOffer from "~/components/CategoryOffer/ListCategoryOffer.vue";

import Manufactor from "~/views/Manufactor.vue";
import ListManufactor from "~/components/Manufactor/ListManufactor.vue";

import Distributor from "~/views/Distributor.vue";
import ListDistributor from "~/components/Distributor/ListDistributor.vue";

import Advertisement from "~/views/Advertisement.vue";
import ListAdvertisement from "~/components/Advertisement/ListAdvertisement.vue";

import Slide from "~/views/Slide.vue";
import ListSlide from "~/components/Slide/ListSlide.vue";

import TypeAccount from "~/views/TypeAccount.vue";
import ListTypeAccount from "~/components/TypeAccount/ListTypeAccount.vue";

import Account from "~/views/Account.vue";
import ListAccount from "~/components/Account/ListAccount.vue";

import Login from "~/views/Login.vue";

import AddorEditProduct from "~/components/Product/AddorEditProduct.vue";
import AddorEditBillSell from "~/components/BillSell/AddorEditBillSell.vue";
import AddorEditNews from "~/components/News/AddorEditNews.vue";
import AddorEditRate from "~/components/Rate/AddorEditRate.vue";
import AddorEditCategory from "~/components/Category/AddorEditCategory.vue";
import AddorEditCategoryOffer from "~/components/CategoryOffer/AddorEditCategoryOffer.vue";
import AddorEditManufactor from "~/components/Manufactor/AddorEditManufactor.vue";
import AddorEditDistributor from "~/components/Distributor/AddorEditDistributor.vue";
import AddorEditAdvertisement from "~/components/Advertisement/AddorEditAdvertisement.vue";
import AddorEditSlide from "~/components/Slide/AddorEditSlide.vue";
import AddorEditTypeAccount from "~/components/TypeAccount/AddorEditTypeAccount.vue";
import AddorEditAccount from "~/components/Account/AddorEditAccount.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
                meta: {
                    breadcrumbName: "Tổng quan",
                    requiresAuth: true,
                },
            },
            {
                path: "product",
                name: "Product",
                component: Product,
                meta: {
                    breadcrumbName: "Thông tin sản phẩm",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListProduct",
                        component: ListProduct,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddProduct",
                        component: AddorEditProduct,
                        meta: {
                            breadcrumbName: "Thêm sản phẩm",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditProduct",
                        component: AddorEditProduct,
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
                component: BillSell,
                meta: {
                    breadcrumbName: "Hoá đơn bán",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListBillSell",
                        component: ListBillSell,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddBillSell",
                        component: AddorEditBillSell,
                        meta: {
                            breadcrumbName: "Thêm hoá đơn bán",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditBillSell",
                        component: AddorEditBillSell,
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
                component: ImportBill,
                meta: {
                    breadcrumbName: "Hoá đơn nhập",
                    requiresAuth: true,
                },
            },
            {
                path: "news",
                name: "News",
                component: News,
                meta: {
                    breadcrumbName: "Tin tức",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListNews",
                        component: ListNews,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddNews",
                        component: AddorEditNews,
                        meta: {
                            breadcrumbName: "Thêm tin tức",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditNews",
                        component: AddorEditNews,
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
                component: Rate,
                meta: {
                    breadcrumbName: "Đánh giá",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListRate",
                        component: ListRate,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditRate",
                        component: AddorEditRate,
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
                component: Category,
                meta: {
                    breadcrumbName: "Danh mục",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListCategory",
                        component: ListCategory,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddCategory",
                        component: AddorEditCategory,
                        meta: {
                            breadcrumbName: "Thêm danh mục",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditCategory",
                        component: AddorEditCategory,
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
                component: CategoryOffer,
                meta: {
                    breadcrumbName: "Danh mục ưu đãi",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListCategoryOffer",
                        component: ListCategoryOffer,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddCategoryOffer",
                        component: AddorEditCategoryOffer,
                        meta: {
                            breadcrumbName: "Thêm danh mục ưu đãi",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditCategoryOffer",
                        component: AddorEditCategoryOffer,
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
                component: Manufactor,
                meta: {
                    breadcrumbName: "Hãng sản xuất",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListManufactor",
                        component: ListManufactor,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddManufactor",
                        component: AddorEditManufactor,
                        meta: {
                            breadcrumbName: "Thêm hãng sản xuất",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditManufactor",
                        component: AddorEditManufactor,
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
                component: Distributor,
                meta: {
                    breadcrumbName: "Nhà phân phối",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListDistributor",
                        component: ListDistributor,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddDistributor",
                        component: AddorEditDistributor,
                        meta: {
                            breadcrumbName: "Thêm nhà phân phối",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditDistributor",
                        component: AddorEditDistributor,
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
                component: Advertisement,
                meta: {
                    breadcrumbName: "Quảng cáo",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListAdvertisement",
                        component: ListAdvertisement,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddAdvertisement",
                        component: AddorEditAdvertisement,
                        meta: {
                            breadcrumbName: "Thêm quảng cáo",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditAdvertisement",
                        component: AddorEditAdvertisement,
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
                component: Slide,
                meta: {
                    breadcrumbName: "Slide",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListSlide",
                        component: ListSlide,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddSlide",
                        component: AddorEditSlide,
                        meta: {
                            breadcrumbName: "Thêm slide",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditSlide",
                        component: AddorEditSlide,
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
                component: TypeAccount,
                meta: {
                    breadcrumbName: "Loại tài khoản",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListTypeAccount",
                        component: ListTypeAccount,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddTypeAccount",
                        component: AddorEditTypeAccount,
                        meta: {
                            breadcrumbName: "Thêm loại tài khoản",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditTypeAccount",
                        component: AddorEditTypeAccount,
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
                component: Account,
                meta: {
                    breadcrumbName: "Tài khoản",
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "",
                        name: "ListAccount",
                        component: ListAccount,
                        meta: {
                            breadcrumbName: "Danh sách",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "add",
                        name: "AddAccount",
                        component: AddorEditAccount,
                        meta: {
                            breadcrumbName: "Thêm tài khoản",
                            requiresAuth: true,
                        },
                    },
                    {
                        path: "edit/:id",
                        name: "EditAccount",
                        component: AddorEditAccount,
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

    if (requiresAuth && !user) {
        next({ name: "Login" });
    } else {
        next();
    }
});

export default router;
