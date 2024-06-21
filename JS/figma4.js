// scroll
var btn_scroll_top = document.querySelector(".scroll-top");
var bg_nav = document.querySelector(".navbar");
var content_header = document.querySelector(".content_header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        bg_nav.style.backgroundColor = "#333";
        bg_nav.style.height = "70px";
        content_header.style.height = "70px";
        bg_nav.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
    } else {
        bg_nav.style.backgroundColor = "transparent";
        bg_nav.style.boxShadow = "none";
        bg_nav.style.height = "104px";
        content_header.style.height = "104px";
    }

    if (window.scrollY > 1000) {
        btn_scroll_top.style.display = "block";
    } else {
        btn_scroll_top.style.display = "none";
    }
});

btn_scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// validate

document.getElementById("myForm").addEventListener("submit", function (event) {
    let valid = true;

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const selectOption1 = document.getElementById("selectOption1");
    const selectOption2 = document.getElementById("selectOption2");
    const message = document.getElementById("message");

    if (fullName.value.trim() === "") {
        valid = false;
        fullName.classList.add("is-invalid");
    } else {
        fullName.classList.remove("is-invalid");
    }

    if (email.value.trim() === "" || !validateEmail(email.value)) {
        valid = false;
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }

    if (selectOption1.value === "") {
        valid = false;
        selectOption1.classList.add("is-invalid");
    } else {
        selectOption1.classList.remove("is-invalid");
    }

    if (selectOption2.value === "") {
        valid = false;
        selectOption2.classList.add("is-invalid");
    } else {
        selectOption2.classList.remove("is-invalid");
    }

    if (message.value.trim() === "") {
        valid = false;
        message.classList.add("is-invalid");
    } else {
        message.classList.remove("is-invalid");
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".navbar-nav li a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((link) => {
                link.classList.remove("activeNav");
                document
                    .querySelector(`.navbar-nav li a[href*=${id}]`)
                    .classList.add("activeNav");
            });
        }
    });
};

// fetch api
async function getData() {
    const response = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
    );
    const datares = await response.json();
    var data = datares.articles.slice(0, 3);
    var element = document.querySelector(".client_say_bottom_items");
    var content = "";
    data.map(function (value, index) {
        return (content += `<div class="client_say_bottom_item">
                <div class="list_star text-start">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h6 class="text-start">
                    ${value.title}
                </h6>
                <div class="character text-start">
                    <img
                        src="${value.urlToImage}"
                        alt=""
                    />
                    <div>
                        <a href="#">${value.source.name}</a>
                        <h6>${value.author}</h6>
                    </div>
                </div>
            </div>`);
    });
    element.innerHTML = content;
}
getData();
