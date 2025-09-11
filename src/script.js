const form = document.getElementById('ContactForm') // получаем элемент формы
const emailInput = document.getElementById('email') // получаем поле ввода email

emailInput.addEventListener('input', validateEmail) // на событие ввода email будет выводиться функция validate

function validateEmail(){               // функция проверки корректности email
    const emailRegex = /[A-Za-z0-9_-\.]{2,10}@[a-z0-9\.-_]{1,10}\.[a-z]{2,3}/
    if (emailRegex.test(emailInput.value)){
        removeError(emailInput)
        return true
    }
    else{
        showError(emailInput, 'Email не соответствует формату. Пример ivanov@all.ru')
        return false
    }
}

function showError(input, massage) {        //функиция показа ошибки
    const formControl = input.parentElement // получаем родительскую форму
    const errorElement = formControl.querySelector('.error') || document.createElement('div')
    
    errorElement.class = 'error' // CSS-стиль для блока ошибки
    errorElement.textContent = message // задаем сообщение об ошибке из параметра функции
    formControl.appendChild(errorElement) // добавляем компонент ошибки на форму
    input.style.borderColor = 'red' // добавляем красную обводку поля с ошибкой
}
function removeError(input) {           //функция скрытия ошибки
    const formControl = input.parentElement
    const errorElement = formControl.querySelector('.error')
    if (errorElement) {
        formControl.removeChild(errorElement)
    }
    input.style.borderColor = 'green'
}