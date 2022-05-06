const send = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'

    const validate = (formElements) => {
        let success = true
        formElements.forEach(input => {
           if (input.name == 'fio') {
                if (input.value === '') {
                    success = false
                } else if (input.value.match(/[^а-яА-Я\^a-zA-Z\s]/g)) {
                    success = false
                }
            } else if (input.name == 'phone') {
                if (input.value === '') {
                    success = false
                } else if (input.value.match(/[^0-9\(\)\+\-]/g)) {
                    success = false
                }
            } 
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
    
    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}
        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (document.querySelector('body').classList.contains('balkony')) {
                if(element == null) {
                    console.log('Верните блок!');
                } else {
                    if (elem.type === 'block') {
                        formBody[elem.id] = element.value
                    }
                }
            }
            
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                    setTimeout(() => {
                        statusBlock.remove()
                    }, 2000)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
            
        } else {
            alert('Поля заполнены неверно!')
            statusBlock.textContent = errorText
            setTimeout(() => {
                statusBlock.remove()
            }, 2000)
        }
    }

    try {
        if (!form) {
            throw new Error ('Верните форму')
        }
        submitForm()
    } catch (error) {
        console.log(error.message);
    }
    
    
}

export default send