/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

// funcao de click e verifica classes se tiver bilist troca para bi x
menuMobile.addEventListener('click', () => {
  menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x')
    : menuMobile.classList.replace('bi-x', 'bi-list')
  body.classList.toggle('menu-nav-active')
})
