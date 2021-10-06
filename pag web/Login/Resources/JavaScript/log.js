function logi(){
    var email=document.forms["loginForm"]["email"];
    var password=document.forms["loginForm"]["password"];
}

if(email.values=='tri') {
    window.alert('Ingrese un correo en el campo')
    email.focus();
    return false;
}

if(password.values=='tre') {
    window.alert('Ingrese un correo en el campo')
    email.focus();
    return false;
}
