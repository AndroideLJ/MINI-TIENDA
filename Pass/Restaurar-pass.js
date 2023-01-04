function onDoPass(){
    const email = document.getElementById('inputEmail').value;
    const ident = document.getElementById('inputIdent').value;

    if(email == '' && ident == ''){
        alert("Email e identificacion requeridos");
        return;
    }

    if(ident == ''){
        alert("Por favor, ingresa su identificacion")
        document.getElementById('inputEmail').value = "";
        return;
    }

    if(email == ''){
        alert("Por favor, ingresa tu email")
        document.getElementById('inputIdent').value = "";
        return;
    }

    alert('Se ha enviado un correo de restablecimiento')
    formPass.reset();


}

function onDoRenviar(){
    const email = document.getElementById('inputEmail').value;
    const ident = document.getElementById('inputIdent').value;

    if(email == '' && ident == ''){
        alert("Por favor, llene los campos");
        return;
    }
    

    if(ident == ''){
        alert("Por favor, ingresa su identificacion")
        document.getElementById('inputEmail').value = "";
        return;
    }

    if(email == ''){
        alert("Por favor, ingresa tu email")
        document.getElementById('inputIdent').value = "";
        return;
    }

    alert('Se reenvio nuevamente el mensaje')
    formPass.reset();

}
