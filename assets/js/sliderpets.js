import pets from './pets.js'

const petsSliderPref = document.querySelector('.pets-slider-prev')
const petsSliderNext = document.querySelector('.pets-slider-next')
const containerWidth = document.querySelector('.container')
let petsList = document.querySelector('.pets-list')

function sortPetsList(list) {
    const petsListArr = Array.from(list.children)
    const petsSort = pets.sort(() => Math.random() - 0.5)

    for(let i = 0; i < 6; i++) {
        const petItemImage = petsListArr[i].querySelector('.pets-item-image')
        const petItemTitle = petsListArr[i].querySelector('.pet-title')
        const petItemDescription = petsListArr[i].querySelector('.pet-description')

        petItemImage.setAttribute('src', petsSort[i].petImage)
        petItemTitle.textContent = petsSort[i].petName
        petItemDescription.textContent = petsSort[i].petLocation
        if(pets[i].petBanana) {
            petItemDescription.classList.add('pet-banana')
            petItemDescription.classList.remove('pet-meat')
        } else {
            petItemDescription.classList.remove('pet-banana')
            petItemDescription.classList.add('pet-meat')
        }
    }
}

function showSliderPets() {
    petsSliderNext.removeEventListener('click', showSliderPets)
    petsSliderPref.removeEventListener('click', showSliderPets)

    const petsListClone = petsList.cloneNode(true)
    let stepPrevItem
    let stepNextItem

    if(this.className === 'pets-slider-next') {
        stepPrevItem = `-${containerWidth.offsetWidth + 100}`
        stepNextItem = `${containerWidth.offsetWidth / 2 + 100}`
    } else if(this.className === 'pets-slider-prev') {
        stepPrevItem = `${containerWidth.offsetWidth + 100}`
        stepNextItem = `-${containerWidth.offsetWidth / 2 + 100}`
    }

    petsList.after(petsListClone)
    sortPetsList(petsListClone)

    petsListClone.style.opacity = '0'
    petsList.style.transform = 'translateX(' + stepPrevItem + 'px)'
    petsListClone.style.transform = 'translateX(' + stepNextItem +'px)'
    
    setTimeout(() => {
        petsList.remove()
        petsListClone.style.opacity = ''
        petsListClone.style.transform = ''
        petsList = petsListClone
    }, 300)
    
    setTimeout(() => {
        petsSliderNext.addEventListener('click', showSliderPets)
        petsSliderPref.addEventListener('click', showSliderPets)
    }, 700)
}

petsSliderNext.addEventListener('click', showSliderPets)
petsSliderPref.addEventListener('click', showSliderPets)
document.addEventListener('DOMContentLoaded', sortPetsList(petsList))