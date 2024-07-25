<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img
                    src="/images/logo1.png"
                    class="img_logo"
                    alt="images"
                    width="50"
                    height="50"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            >Trang chủ</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tin tức</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Danh mục
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Another action</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <form class="d-flex position-relative" role="search">
                    <input
                        class="form-control pe-5"
                        type="search"
                        placeholder="Tìm kiếm sản phẩm"
                        aria-label="Search"
                    />
                    <button
                        class="btn position-absolute top-0 end-0 rounded-start"
                        type="submit"
                    >
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu_item_right">
                    <li class="nav-item">
                        <NuxtLink to="/cart" class="nav-link"
                            ><i class="fa-solid fa-cart-shopping"></i>
                            <span>(1)</span>
                        </NuxtLink>
                    </li>
                </ul>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu_item_right">
                    <div class="user">
                        <li class="nav-item">
                            <NuxtLink to="/login">Đăng nhập</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/registry">Đăng ký</NuxtLink>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
    background-color: var(--color-primary) !important;
    padding: 0 10%;
    min-height: 60px;
}

.navbar-collapse {
    gap: 10px;
}
.navbar a {
    white-space: nowrap;
    text-decoration: none;
    color: #fff;
}

.navbar a:hover {
    color: var(--color-primary-two);
}

li {
    list-style: none;
}

.img_logo {
    filter: invert(1);
    vertical-align: sub;
}

.shopping i {
    font-size: 20px;
}

.user {
    display: flex;
    align-items: center;
    gap: 15px;
}
.btn,
.form-control {
    padding: 0.25rem 0.75rem;
}

::placeholder{
    font-size: 13px;
    color: var(--color-primary-two);
}

input{
    font-size: 15px;
}

.dropdown-menu {
    background-color: var(--color-primary);
}

.fa-bars {
    color: #fff;
}
</style>
