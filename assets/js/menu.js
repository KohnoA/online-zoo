const burgerMenu = document.querySelector('.hamburger')
const navigationList = document.querySelector('.naviagtion-list')
const closeMenu = document.querySelector('.close-nav-adaptive')
const overlay = document.querySelector('.overlay')

function showBurgerMenu() {
    navigationList.classList.toggle('show-menu')
    overlay.classList.toggle('show-overlay')
    if(navigationList.classList.contains('show-menu')) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'scroll'
    }
}

function hiddenBurgerMenu() {
    navigationList.classList.remove('show-menu')
    overlay.classList.remove('show-overlay')
    document.body.style.overflowY = 'scroll'
}

burgerMenu.addEventListener('click', showBurgerMenu)
closeMenu.addEventListener('click', showBurgerMenu)
overlay.addEventListener('click', showBurgerMenu)
window.addEventListener('resize', hiddenBurgerMenu)