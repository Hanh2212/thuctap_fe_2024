var btn_scroll_top = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
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