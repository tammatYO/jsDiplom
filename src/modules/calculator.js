const calculator = () => {
    const calcBlock = document.getElementById('calc')
    const balconyValue = document.getElementById('calc-type')
    const calcMeters = document.getElementById('calc-input')
    const calcType = document.getElementById('calc-type-material')
    const result = document.getElementById('calc-total')

    const countCalc = () => {
        const calcTypeValue = +balconyValue.options[balconyValue.selectedIndex].value
        const calcMetersValue = calcMeters.value

        let MaterialValue = +calcType.options[calcType.selectedIndex].value
        let resultValue = 0

        if(calcType.value == "--") {
            MaterialValue = 1
        }
        if(balconyValue.value && calcMeters) {
            resultValue = Math.round(calcMetersValue*calcTypeValue*MaterialValue)
        }
        result.value = resultValue
    }


    if (calcBlock == null) {
        console.log('нет блока с калькулятором');
    } else {
        calcBlock.addEventListener('input', (e) => {
            if (e.target === balconyValue || e.target === calcMeters || e.target === calcType) {
                countCalc()
            } else {
                resultValue = 0
            }
        })
    }
}

export default calculator