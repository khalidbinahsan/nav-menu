// Navigator Menu 
const nav_slider = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu_nav = document.querySelector('.menu-nav');
    const menu_opn = document.querySelector('.menu-opn');
    const menu_cls = document.querySelector('.menu-cls');

    hamburger.addEventListener('click', () => {
        menu_nav.classList.toggle('nav-active');
        menu_opn.classList.toggle('menu-act');
        menu_cls.classList.toggle('menu-non-act');
    });
}
nav_slider();
// Scroll Effect Animation