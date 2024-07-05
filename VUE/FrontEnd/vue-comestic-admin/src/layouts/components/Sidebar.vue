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
                <span class="text">Home</span>
            </router-link>
            <router-link to="/product" class="button">
                <i class="fa-brands fa-product-hunt"></i>
                <span class="text">Product</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref,defineEmits  } from "vue";
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
    min-width: 64px;
    max-width: 264px;
    display: flex;
    flex-direction: column;

    background-color: var(--dark);
    color: var(--light);

    width: calc(2rem + 32px);
    overflow: hidden;
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
            padding: 0.5rem 1rem;

            i {
                font-size: 1.8rem;
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
