const scrollbar = document.querySelector('.scrollbar')
const testimonialsList = document.querySelector('.testimonials-list')
const testimonialsItem = document.querySelectorAll('.testimonials-item')
const overlay = document.querySelector('.overlay-testimonials')
const testimonialsSection = document.querySelector('.testimonials')
const description = document.querySelector('.card-description')
const button = document.createElement('div')

function testimonialsSlider() {
    let translateInt

    if(window.innerWidth < 1241) {
        translateInt = this.value * 323
    }  else {
        translateInt = this.value * 297
    }

    testimonialsList.style.transform = 'translateX(-' + translateInt + 'px)'
}

function showTestimonialsPopup() {
    let currentItem = this.cloneNode(true)

    overlay.classList.add('show-overlay')
    testimonialsSection.appendChild(currentItem)
    button.classList.add('close-testimonials-popup')
    currentItem.appendChild(button)
    currentItem.classList.add('testimonials-item-current')
    currentItem.style.minWidth = '264px'
    currentItem.onclick = hiddenTestimonialsPopup
}

function hiddenTestimonialsPopup() {
    let currentEl = testimonialsSection.lastElementChild
    
    overlay.classList.remove('show-overlay')
    if(currentEl.className === 'testimonials-item testimonials-item-current') {
        currentEl.remove()
        button.remove()
    }
}

function checkingTheWidth() {
    if(window.innerWidth < 999) {
        testimonialsItem.forEach(item => {
            item.addEventListener('click', showTestimonialsPopup)
        })
        overlay.addEventListener('click', hiddenTestimonialsPopup)
    } else {
        testimonialsItem.forEach(item => {
            item.removeEventListener('click', showTestimonialsPopup)
            item.removeEventListener('click', hiddenTestimonialsPopup)
        })
        overlay.removeEventListener('click', hiddenTestimonialsPopup)
        hiddenTestimonialsPopup()
    }
}

checkingTheWidth()
window.addEventListener('resize', checkingTheWidth)
scrollbar.addEventListener('input', testimonialsSlider)