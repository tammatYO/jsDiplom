/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_scrollBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollBtn */ \"./src/modules/scrollBtn.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sliderTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderTwo */ \"./src/modules/sliderTwo.js\");\n/* harmony import */ var _modules_modalImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modalImg */ \"./src/modules/modalImg.js\");\n/* harmony import */ var _modules_send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/send */ \"./src/modules/send.js\");\n\n\n\n\n// import formValidate from './modules/formValidate'\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_scrollBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('25 may 2022')\n// formValidate()\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_sliderTwo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_modalImg__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n\nconst forms = document.querySelectorAll('form')\nforms.forEach((form, index) => {\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n        form.id = `form${index}`\n        ;(0,_modules_send__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            formId: `form${index}`,\n            someElem: [\n                {\n                    type: 'block',\n                    id: 'calc-total'\n                }\n            ] \n        })\n    })\n})\n\n\n\n//# sourceURL=webpack://middle/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcBlock = document.getElementById('calc')\r\n    const balconyValue = document.getElementById('calc-type')\r\n    const calcMeters = document.getElementById('calc-input')\r\n    const calcType = document.getElementById('calc-type-material')\r\n    const result = document.getElementById('calc-total')\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +balconyValue.options[balconyValue.selectedIndex].value\r\n        const calcMetersValue = calcMeters.value\r\n\r\n        let MaterialValue = +calcType.options[calcType.selectedIndex].value\r\n        let resultValue = 0\r\n\r\n        if(calcType.value == \"--\") {\r\n            MaterialValue = 1\r\n        }\r\n        if(balconyValue.value && calcMeters) {\r\n            resultValue = Math.round(calcMetersValue*calcTypeValue*MaterialValue)\r\n        }\r\n        result.value = resultValue\r\n    }\r\n\r\n\r\n    if (calcBlock == null) {\r\n        console.log('нет блока с калькулятором');\r\n    } else {\r\n        calcBlock.addEventListener('input', (e) => {\r\n            if (e.target === balconyValue || e.target === calcMeters || e.target === calcType) {\r\n                countCalc()\r\n            } else {\r\n                resultValue = 0\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const overlay = document.querySelector('.overlay')\n\n    const headerModalContent = document.querySelector('.header-modal')\n    const servicesModal = document.querySelector('.services-modal')\n\n    document.addEventListener('click', (e) => {\n        if (!e.target.closest('.header-modal') && e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        } else if (e.target.closest('.header-modal__close')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        } else if (e.target.closest('.button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            headerModalContent.style.display = \"block\"\n        }\n\n        if (e.target.closest('.utp-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        }\n        \n        if (e.target.closest('.service-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        } else if (e.target.closest('.services-modal__close')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        } else if (!e.target.closest('.services-modal')  &&  e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/modalImg.js":
/*!*********************************!*\
  !*** ./src/modules/modalImg.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalImg = () => {\r\n    const overlay = document.querySelector('.overlay')\r\n    const body = document.querySelector('body')\r\n    const imgs = document.querySelectorAll('.sertificate-document');\r\n    const disable = document.querySelectorAll('.sertificate-document')\r\n    const hoverEffectImgs = document.querySelectorAll('.document-overlay')\r\n\r\n    hoverEffectImgs.forEach(hoverEffectImg => {\r\n        hoverEffectImg.addEventListener('mouseover', () => {\r\n            hoverEffectImg.style.transition = '.5s'\r\n            hoverEffectImg.style.opacity = \"1\"\r\n        })\r\n        hoverEffectImg.addEventListener('mouseout', () => {\r\n            hoverEffectImg.style.transition = '.5s'\r\n            hoverEffectImg.style.opacity = \"0\"\r\n        })\r\n    })\r\n    \r\n    disable.forEach(disable => {\r\n        disable.setAttribute('href', '')\r\n    })\r\n\r\n    const addModalDocument = () => {\r\n        overlay.style.display = \"block\";\r\n        const modalDiv = document.createElement('div')\r\n        modalDiv.classList.add('modal-img')\r\n        body.append(modalDiv)\r\n        modalDiv.innerHTML = `\r\n        <span title=\"Close\" class=\"header-modal__close\">x</span>\r\n        `\r\n        document.addEventListener('click', (e) => {\r\n            if (e.target.closest('.overlay') || e.target.closest(\".header-modal__close\")) {\r\n                modalDiv.remove()\r\n            }\r\n            \r\n        })\r\n    }\r\n\r\n    imgs.forEach(imgDiv => {\r\n        imgDiv.addEventListener('click', (e) => {\r\n            e.preventDefault()            \r\n            addModalDocument()\r\n        })\r\n    })\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalImg); \n\n//# sourceURL=webpack://middle/./src/modules/modalImg.js?");

/***/ }),

/***/ "./src/modules/scrollBtn.js":
/*!**********************************!*\
  !*** ./src/modules/scrollBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollBtn = () => {\n    const scrollBtn = document.querySelector('.smooth-scroll')\n\n    window.addEventListener('scroll', () => {\n        if (window.pageYOffset < 600) {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"0\"\n        } else {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"1\"\n        }\n    })\n    \n\n    scrollBtn.addEventListener('click', (e) => {\n        e.preventDefault()\n        const anchor = document.getElementById('header')\n        anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBtn);\n\n//# sourceURL=webpack://middle/./src/modules/scrollBtn.js?");

/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst send = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n\r\n    const validate = (formElements) => {\r\n        let success = true\r\n        formElements.forEach(input => {\r\n           if (input.name == 'fio') {\r\n                if (input.value === '') {\r\n                    success = false\r\n                } else if (input.value.match(/[^а-яА-Я\\^a-zA-Z\\s]/g)) {\r\n                    success = false\r\n                }\r\n            } else if (input.name == 'phone') {\r\n                if (input.value === '') {\r\n                    success = false\r\n                } else if (input.value.match(/[^0-9\\(\\)\\+\\-]/g)) {\r\n                    success = false\r\n                }\r\n            } \r\n        })\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n    \r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        \r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if (document.querySelector('body').classList.contains('balkony')) {\r\n                if(element == null) {\r\n                    console.log('Верните блок!');\r\n                } else {\r\n                    if (elem.type === 'block') {\r\n                        formBody[elem.id] = element.value\r\n                    }\r\n                }\r\n            }\r\n            \r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                    setTimeout(() => {\r\n                        statusBlock.remove()\r\n                    }, 2000)\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n            \r\n        } else {\r\n            alert('Поля заполнены неверно!')\r\n            statusBlock.textContent = errorText\r\n            setTimeout(() => {\r\n                statusBlock.remove()\r\n            }, 2000)\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error ('Верните форму')\r\n        }\r\n        submitForm()\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n    \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);\n\n//# sourceURL=webpack://middle/./src/modules/send.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const benefitItems = document.querySelectorAll('.benefits__item')\n    const benefitsContent = document.querySelector('#benefits')\n\n    let currentSlide = 0\n\n\n    const checkForInnerWidth = () => {\n            benefitItems.forEach((benefitItem, i) => {\n                if (window.innerWidth >= 576) {\n                    if (i > 2) {\n                        benefitItem.classList.add('not-active')\n                       }\n                } else {\n                   if (i > 0) {\n                    benefitItem.classList.add('not-active')\n                   }\n                }   \n            })\n    }\n\n    checkForInnerWidth()\n    \n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    benefitsContent.addEventListener('click', (e) => {\n        \n        if (window.innerWidth >= 576) {\n            if (e.target.closest('.benefits__arrow--right')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n            if (e.target.closest('.benefits__arrow--left')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n        } else {\n            prevSlide(benefitItems, currentSlide, 'not-active')\n\n            if (e.target.closest('.benefits__arrow--right')) {\n                currentSlide++\n            } else if (e.target.closest('.benefits__arrow--left')) {\n                currentSlide--          \n            }\n            if (currentSlide >= benefitItems.length) {\n                currentSlide = 0\n            }\n            if (currentSlide < 0) {\n                currentSlide = benefitItems.length - 1\n            }\n    \n            nextSlide(benefitItems, currentSlide, 'not-active')\n        }   \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/sliderTwo.js":
/*!**********************************!*\
  !*** ./src/modules/sliderTwo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderTwo = () => {\r\n    const serviceCards = document.querySelectorAll('.col-md-12.col-lg-6');\r\n    const serviceContent = document.getElementById('services')\r\n    \r\n    let currentSlide = 0\r\n\r\n    const checkForInnerWidth = () => {\r\n        serviceCards.forEach((serviceCard, i) => {\r\n            if (window.innerWidth >= 576) {\r\n                if (i > 1) {\r\n                    serviceCard.classList.add('not-active')\r\n                }\r\n            } else {\r\n                if (i > 0) {\r\n                    serviceCard.classList.add('not-active')\r\n                }\r\n            }   \r\n        })\r\n    }\r\n\r\n    checkForInnerWidth()\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    serviceContent.addEventListener('click', (e) => {\r\n        \r\n        if (window.innerWidth >= 576) {\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                serviceCards.forEach(serviceCard => {\r\n                    if (serviceCard.classList.contains('not-active')) {\r\n                        serviceCard.classList.remove('not-active')\r\n                    } else {\r\n                        serviceCard.classList.add('not-active')\r\n                    }\r\n                })\r\n            }\r\n            if (e.target.closest('.services__arrow--left')) {\r\n                serviceCards.forEach(serviceCard => {\r\n                    if (serviceCard.classList.contains('not-active')) {\r\n                        serviceCard.classList.remove('not-active')\r\n                    } else {\r\n                        serviceCard.classList.add('not-active')\r\n                    }\r\n                })\r\n            }\r\n        } else {\r\n            prevSlide(serviceCards, currentSlide, 'not-active')\r\n\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                currentSlide++\r\n            } else if (e.target.closest('.services__arrow--left')) {\r\n                currentSlide--          \r\n            }\r\n            if (currentSlide >= serviceCards.length) {\r\n                currentSlide = 0\r\n            }\r\n            if (currentSlide < 0) {\r\n                currentSlide = serviceCards.length - 1\r\n            }\r\n    \r\n            nextSlide(serviceCards, currentSlide, 'not-active')\r\n        }   \r\n    })\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderTwo);\n\n//# sourceURL=webpack://middle/./src/modules/sliderTwo.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelectorAll('.count-wrap > .count_1 > span')\r\n    const timerHours = document.querySelectorAll('.count-wrap > .count_2 > span')\r\n    const timerMinutes = document.querySelectorAll('.count-wrap > .count_3 > span')\r\n    const timerSeconds = document.querySelectorAll('.count-wrap > .count_4 > span')\r\n\r\n    let intervalID\r\n\r\n    const getTimeRemaining = (deadline) => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60)-days*24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(deadline)\r\n        const zeroToNumber = () => {\r\n            timerDays.forEach(timerDays =>{\r\n            if (getTime.days < 10) {\r\n                timerDays.textContent = '0' + getTime.days\r\n            }\r\n            })\r\n            timerHours.forEach(timerHours =>{\r\n            if (getTime.hours < 10) {\r\n                timerHours.textContent = '0' + getTime.hours\r\n            }\r\n            })\r\n            timerMinutes.forEach(timerMinutes =>{\r\n            if (getTime.minutes < 10) {\r\n                timerMinutes.textContent = '0' + getTime.minutes\r\n            }\r\n            })\r\n            timerSeconds.forEach(timerSeconds =>{\r\n            if (getTime.seconds < 10) {\r\n                timerSeconds.textContent = '0' + getTime.seconds\r\n            }\r\n            })\r\n        }\r\n        timerDays.forEach(timerDays =>{\r\n            timerDays.textContent = getTime.days\r\n        })\r\n        timerHours.forEach(timerHours =>{\r\n            timerHours.textContent = getTime.hours\r\n        })\r\n        timerMinutes.forEach(timerMinutes =>{\r\n            timerMinutes.textContent = getTime.minutes\r\n        })\r\n        timerSeconds.forEach(timerSeconds => {\r\n            timerSeconds.textContent = getTime.seconds\r\n        })\r\n        \r\n        zeroToNumber()\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(intervalID)\r\n            timerDays.forEach(timerDays =>{\r\n                timerDays.textContent = '00'\r\n            })\r\n            timerHours.forEach(timerHours =>{\r\n                timerHours.textContent = '00'\r\n            })\r\n            timerMinutes.forEach(timerMinutes =>{\r\n                timerMinutes.textContent = '00'\r\n            })\r\n            timerSeconds.forEach(timerSeconds =>{\r\n            timerSeconds.textContent = '00'\r\n            })\r\n        }\r\n        \r\n    }\r\n    intervalID = setInterval(() => {\r\n        updateClock()\r\n    }, 1000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
