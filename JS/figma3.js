var btn_scroll_top = document.querySelector('.scroll-top')
var bg_nav = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if(window.scrollY>100){
        bg_nav.style.backgroundColor = '#fff'
        bg_nav.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    }
    else{
        bg_nav.style.backgroundColor = 'transparent'
        bg_nav.style.boxShadow = 'none'
    }

    if (window.scrollY > 1000) {
        btn_scroll_top.style.display = 'block'; 
    } else {
        btn_scroll_top.style.display = 'none';
    }
});

btn_scroll_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.navbar-nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('activeNav');
                document.querySelector(`.navbar-nav li a[href*=${id}]`).classList.add('activeNav');
            });
        }
    });
};
