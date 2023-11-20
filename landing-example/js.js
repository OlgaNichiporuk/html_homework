const user = {
    login: 'ivan@gmail.com',
    password: '&$9yst_32hd',
};

const buttonLogInArray = document.querySelectorAll('.buttonAuth')

buttonLogInArray.forEach(item => {
    item.addEventListener('click', () => {
        const frame = document.querySelector('#frame')
        frame.style.display = 'block'
    })
})

const buttonCloseModal = document.querySelector('#close')
buttonCloseModal.addEventListener('click', () => {
    const frame = document.querySelector('#frame')
    frame.style.display = 'none'
})

// клик за пределами модалки



// клик на Login и сравнение данных с const
const buttonSingUp = document.querySelector('#button_LogIn')
buttonSingUp.addEventListener('click', () => {
    const AvaIcon = document.getElementById('icon_avatar')
    const emailUser = document.getElementById('email')
    const passwordUser = document.getElementById('password')
    const warningText = document.getElementById('hint')
    const button_1SingUp = document.getElementById('SingUp')
    const button_LogIn = document.getElementById('LogIn')

    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(emailUser.value)) {
        frame.style.display = 'none'
        button_LogIn.style.display = 'none'
        button_1SingUp.style.display = 'none'
        AvaIcon.style.display = 'block'

    } else {
        warningText.style.display = 'block'
        emailUser.style = 'outline: 1px solid red'
    }
    
    if (validPass(passwordUser.value)) {
        frame.style.display = 'none'
        button_LogIn.style.display = 'none'
        button_1SingUp.style.display = 'none'
        AvaIcon.style.display = 'block'
    }
    else {
        warningText.style.display = 'block'
        passwordUser.style = 'outline: 1px solid red'


    }
    return
})

function validPass(password){
    let result = false;
    const arr = password.split('');

    arr.forEach(i => {
        if(!isNaN(i)) result = true
    })

    arr.forEach(i => {
        if (i === ' ') {
            result = false
        }
    })

    return result
}
