function onDoPass() {
    const email = document.getElementById('inputEmail');
    const ident = document.getElementById('inputIdent');

    if (email.value == '' && ident.value == '') {
        alert("Usuario y Contraseña requeridos");
        return;
    }

    const fieldInvalids = validateInput(email, 'Email requerido') || validateInput(ident, 'Identificacion requerido')
    if (fieldInvalids) {
        return;
    }

    alert('Se ha enviado un correo de restablecimiento')

    startCountDown();
    disableResendMail();
}

function onDoRenviar() {
    const email = document.getElementById('inputEmail').value;
    const ident = document.getElementById('inputIdent').value;

    if (email.value == '' && ident.value == '') {
        alert("Usuario y Contraseña requeridos");
        return;
    }

    const fieldInvalids = validateInput(email, 'Email requerido') || validateInput(ident, 'Identificacion requerido')
    if (fieldInvalids) {
        return;
    }

    alert('Se reenvio nuevamente el mensaje')

    formPass.reset();
    disableResendMail();
    startCountDown();

}

function validateInput(element, message) {
    const isEmpty = element.value === '';
    if (isEmpty) {
        alert(message);
        formPass.reset();
    }
    return isEmpty;
}

function disableResendMail() {
    document.getElementById('reenviarButton').classList.add('resend-disable')
    setTimeout(function () {
        document.getElementById('reenviarButton').classList.remove('resend-disable')
    }, 5000);
}

function startCountDown(){
    var second = 5;
    document.getElementById('counter').innerHTML='00:0'+second;
    var interval = setInterval(function() {
        
        if( second === 0){
            clearInterval(interval);
            document.getElementById('counter').innerHTML='';
        } else {
            document.getElementById('counter').innerHTML='00:0'+second;
            second--;
        }
        
    }, 1000);
}
