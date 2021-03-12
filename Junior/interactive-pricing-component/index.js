const slider = document.getElementById('myRange')
const viewsNumber = document.getElementById('views-number')
const amountNumber = document.getElementById('amount-number')
const checkbox = document.getElementById('checkbox')

const items = [
    {
        views: '10K',
        amount: 8
    },
    {
        views: '50K',
        amount: 12
    },
    {
        views: '100K',
        amount: 16
    },
    {
        views: '500k',
        amount: 24
    },
    {
        views: '1M',
        amount: 36
    },
]

const onLoad = () => {
    let data = items.slice()

    function getValuestoHTML(number) {
        const {views, amount} = data[+number / 25]
        return {views, amount}
    }
    
    function handleRangeChanges() {
        const percentage = (slider.value)
        const {views, amount} = getValuestoHTML(slider.value)
        viewsNumber.innerHTML = `${views}`
        amountNumber.innerHTML = `$${amount.toFixed(2)}`
        const color = `linear-gradient(to right, #a3f3ea ${percentage}%, #ecf3fd ${percentage}%)`
        slider.style.background = color
    }
    
    function handleOnCheck() {
        if(this.checked) {
            data = items.map( ({views, amount}) => {
                const discounted = amount * .75
                return {views, amount: discounted}
            })
            handleRangeChanges()
        } 
        else {
            data = items.slice()
            handleRangeChanges()
        } 
    }


    handleOnCheck()
    handleRangeChanges()
    checkbox.onchange = handleOnCheck
    slider.oninput = handleRangeChanges

}



window.onload = onLoad




