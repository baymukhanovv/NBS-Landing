const burgerButtonOpen = document.querySelector(".burger-button"),
      burgerButtonClose = document.querySelector(".cross-button"),
      menuList = document.querySelector('.navigation__bottom-list');

burgerButtonOpen.addEventListener('click', () => {
    menuList.style.left = 30 + 'px';
})
burgerButtonClose.addEventListener('click', () => {
    menuList.style.left = -9999 + 'px';
})