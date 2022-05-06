const modalImg = () => {
    const overlay = document.querySelector('.overlay')
    const body = document.querySelector('body')
    const imgs = document.querySelectorAll('.sertificate-document');
    const disable = document.querySelectorAll('.sertificate-document')
    const hoverEffectImgs = document.querySelectorAll('.document-overlay')

    hoverEffectImgs.forEach(hoverEffectImg => {
        hoverEffectImg.addEventListener('mouseover', () => {
            hoverEffectImg.style.transition = '.5s'
            hoverEffectImg.style.opacity = "1"
        })
        hoverEffectImg.addEventListener('mouseout', () => {
            hoverEffectImg.style.transition = '.5s'
            hoverEffectImg.style.opacity = "0"
        })
    })
    
    disable.forEach(disable => {
        disable.setAttribute('href', '')
    })

    const addModalDocument = () => {
        overlay.style.display = "block";
        const modalDiv = document.createElement('div')
        modalDiv.classList.add('modal-img')
        body.append(modalDiv)
        modalDiv.innerHTML = `
        <span title="Close" class="header-modal__close">x</span>
        `
        document.addEventListener('click', (e) => {
            if (e.target.closest('.overlay') || e.target.closest(".header-modal__close")) {
                modalDiv.remove()
            }
            
        })
    }

    imgs.forEach(imgDiv => {
        imgDiv.addEventListener('click', (e) => {
            e.preventDefault()            
            addModalDocument()
        })
    })

    
}

export default modalImg 