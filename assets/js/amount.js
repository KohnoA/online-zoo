const yellowCircleHover = document.querySelectorAll('.circle-border-external')
const anotherAmountInput = document.querySelector('.another-amount-input')
anotherAmountInput.value = 100

function switchingAmountElements() {
    let amountStyle = this.nextElementSibling.nextElementSibling
    let amountInt = this.nextElementSibling.nextElementSibling.lastElementChild.innerHTML
    
    yellowCircleHover.forEach(item => {
        item.classList.remove('show-circle')
        item.nextElementSibling.nextElementSibling.classList.remove('donation-line-amount-current')
    })

    this.classList.add('show-circle')
    amountStyle.classList.add('donation-line-amount-current')
    anotherAmountInput.value = amountInt
}

function inputLimitInt(limit) {
    if(this.value.length >= limit) {
        this.value = this.value.slice(0, limit)
    }
}

function inputSwitchingAmountElements() {
    yellowCircleHover.forEach(item => {
        let currentAmountInt = item.nextElementSibling.nextElementSibling.lastElementChild.innerHTML
        let currentAmountStyle = item.nextElementSibling.nextElementSibling
        
        if(anotherAmountInput.value === currentAmountInt) {
            yellowCircleHover.forEach(item => {
                item.classList.remove('show-circle')
                item.nextElementSibling.nextElementSibling.classList.remove('donation-line-amount-current')
            })
            item.classList.add('show-circle')
            currentAmountStyle.classList.add('donation-line-amount-current')
        }
    })
}

function emptyInput() {
    yellowCircleHover.forEach(item => {
        let currentAmountInt = item.nextElementSibling.nextElementSibling.lastElementChild.innerHTML
        
        if(this.value !== currentAmountInt || this.value.length === 0) {
            yellowCircleHover.forEach(item => {
                item.classList.remove('show-circle')
                item.nextElementSibling.nextElementSibling.classList.remove('donation-line-amount-current')
            })
        }
    })
}

yellowCircleHover.forEach(item => {
    item.addEventListener('click', switchingAmountElements)
})

anotherAmountInput.addEventListener('keydown', () => {
    inputLimitInt.call(anotherAmountInput, 4)
})
anotherAmountInput.addEventListener('keyup', () => {
    inputSwitchingAmountElements()
    inputLimitInt.call(anotherAmountInput, 4)
})

anotherAmountInput.addEventListener('input', emptyInput)