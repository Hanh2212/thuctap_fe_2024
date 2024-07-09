<template>
    <aside
        :class="`${is_expanded ? 'is-expanded' : ''}`"
        :style="{ minWidth: is_expanded ? '264px' : '64px' }"
    >
        <div class="logo">
            <img :src="logo" alt="logo" />
            <span>Comestic</span>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <i v-if="is_expanded" class="fa-solid fa-toggle-on"></i>
                <i v-else class="fa-solid fa-toggle-off"></i>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <i class="fa-solid fa-house"></i>
                <span class="text">Trang chủ</span>
            </router-link>
            <router-link to="/product" class="button">
                <i class="fa-solid fa-shop"></i>
                <span class="text">Thông tin sản phẩm</span>
            </router-link>
            <router-link to="/billsell" class="button">
                <i class="fa-solid fa-file-invoice-dollar"></i>
                <span class="text">Hoá đơn bán</span>
            </router-link>
            <router-link to="/importbill" class="button">
                <i class="fa-solid fa-file-lines"></i>
                <span class="text">Hoá đơn nhập</span>
            </router-link>
            <router-link to="/news" class="button">
                <i class="fa-solid fa-newspaper"></i>
                <span class="text">Tin tức</span>
            </router-link>
            <router-link to="/rate" class="button">
                <i class="fa-solid fa-comments"></i>
                <span class="text">Đánh giá</span>
            </router-link>
            <router-link to="/category" class="button">
                <i class="fa-solid fa-tag"></i>
                <span class="text">Danh mục</span>
            </router-link>
            <router-link to="/categoryoffer" class="button">
                <i class="fa-solid fa-tags"></i>
                <span class="text">Danh mục ưu đãi</span>
            </router-link>
            <router-link to="/manufactor" class="button">
                <i class="fa-solid fa-industry"></i>
                <span class="text">Hãng sản xuất</span>
            </router-link>
            <router-link to="/distributor" class="button">
                <i class="fa-solid fa-house-chimney-window"></i>
                <span class="text">Nhà phân phối</span>
            </router-link>
            <router-link to="/advertisment" class="button">
                <i class="fa-brands fa-adversal"></i>
                <span class="text">Quảng cáo</span>
            </router-link>
            <router-link to="/bannerslide" class="button">
                <i class="fa-solid fa-thumbtack"></i>
                <span class="text">Banner Slide</span>
            </router-link>
            <router-link to="/typeaccount" class="button">
                <i class="fa-solid fa-user-tag"></i>
                <span class="text">Loại tài khoản</span>
            </router-link>
            <router-link to="/account" class="button">
                <i class="fa-solid fa-user-gear"></i>
                <span class="text">Tài khoản</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import logo from "@/assets/logo.jpg";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const emit = defineEmits(["update:isExpanded"]);

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value);
    emit("update:isExpanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
    overflow: hidden;
    overflow-y: scroll;
    min-width: 64px;
    max-width: 264px;
    display: flex;

    max-height: 100vh;
    flex-direction: column;

    background-color: var(--dark);
    color: var(--light);

    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 0.9rem;
    padding-top: 14px;

    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        display: flex;
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }

        span {
            height: 32px;
            line-height: 32px;
            font-weight: 700;
            margin-left: 20px;
        }
    }

    .menu-toggle-wrap {
        .bi-toggle-on {
            display: flex;
        }

        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;
            display: flex;

            i {
                font-size: 1.8rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                i {
                    color: var(--primary);
                    // transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        white-space: nowrap;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 1rem 1rem;

            i {
                font-size: 1.5rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--dark-alt);

                i,
                .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                i,
                .text {
                    color: var(--primary);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            // .menu-toggle {
            // 	transform: rotate(-180deg);
            // }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            i {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    // @media (max-width: 1024px) {
    //     position: absolute;
    //     z-index: 99;
    // }
}
</style>
