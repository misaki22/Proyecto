function validateform(){
    var email = document.forms["Login"]["email"];
    var password = document.forms["Login"]["password"];
}

if (email.value == ""){
    window.alert("Ingrese un correo")
    email.focus();
    return false;
}
return true;