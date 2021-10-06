const email = document.getElementById('correo')
const password = document.getElementById('pass')
const form = document.getElementById('form')
const error = document.getElementById('error_login')

form.addEventListener ('submit', (e) =>{
    let messages = []
    if(email.values === '' || email.values === null) {
        messages.push('Ingrese un correo en el campo')
    }

    if (password.values === '1234567'){
        messages.push('La contraseña no puede ser 1234567');
    }

    if (password.values.length <= 6){
        messages.push('La contraseña debe ser mayor a seis (6) caracteres, éste tiene ' + password.values.length + ' valores')
    }

    if (password.values.length >= 20) {
        messages.push('La contraseña no puede exceder los veinte (20) caracteres')
    }

    if (messages.length > 0) {
         e.preventDefault()
         error.innerText = messages.join(', ')
     }
})