var btn_scroll_top = document.querySelector(".scroll-top");
var bg_nav = document.querySelector(".navbar");
var content_header = document.querySelector(".content_header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        bg_nav.style.backgroundColor = "#181818";
        bg_nav.style.height = "60px";
        content_header.style.height = "60px";
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

// srcoll indicator
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// scroll active
// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll(".navbar-nav li a");

// window.onscroll = () => {
//     sections.forEach((sec) => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach((link) => {
//                 link.classList.remove("activeNav");
//                 document
//                     .querySelector(`.navbar-nav li a[href*=${id}]`)
//                     .classList.add("activeNav");
//             });
//         }
//     });
// };
