import modal from "./modules/modal"
import slider from "./modules/slider"
import scroll from "./modules/scrollBtn"
import timer from "./modules/timer"
// import formValidate from './modules/formValidate'
import calculator from './modules/calculator'
import sliderTwo from './modules/sliderTwo'
import modalImg from './modules/modalImg'
import send from './modules/send'


modal()
slider()
scroll()
timer('25 may 2022')
// formValidate()
calculator()
sliderTwo()
modalImg()


const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        send({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})

