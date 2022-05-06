// const formValidate = () => {
//     const form = document.querySelector('.form-horizontal')
//     const inputPhone = form.querySelector('[name="phone"]')
//     const inputName = form.querySelector('[name="fio"]')

//     form.addEventListener('submit', (e) =>{
//         e.preventDefault()
//         let error = false
//         if(inputName.value === ''){
//             alert('Введите имя')
//         }
//         if(/[^а-яА-Я\-\s]/g.test(inputName.value)){
//             alert('имя введено неверно')
//         }
//         if(inputPhone.value === ''){
//             alert('Введите телефон')
//         }
//         if(!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g.test(inputPhone.value)){
//             alert('телефон введен неверно')
//         }
//         else if(!error){
//             alert('Данные отправлены')
//         }
//     })
// } 

// export default formValidate

