
const navToggleBtn = document.querySelector("#nav-toggle");
const navMenuMobile = document.querySelector("#nav-menu-mobile");
const navMenuMobileCloseBtn = document.querySelector("#nav-menu-mobile-close");

if(navToggleBtn) {
  navToggleBtn.addEventListener('click', () => {
    navMenuMobile.classList.add("nav__menu__mobile__show");
  })
}

if(navMenuMobileCloseBtn) {
  navMenuMobileCloseBtn.addEventListener('click', () => {
    navMenuMobile.classList.remove("nav__menu__mobile__show")
  })
}