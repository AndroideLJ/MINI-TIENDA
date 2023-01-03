function onDoLogin(){
    const password = document.getElementById('inputPassword').value;
    const user = document.getElementById('inputUser').value;

    if(password == '' && user == ''){
        alert("Usuario o contraseña requeridos");
        return;
    }

    if(password == ''){
        alert("Por favor, ingresa tu contraseña")
        return;
    }

    if(user == ''){
        alert("Por favor, ingresa tu usuario")
        return;
    }

    alert('Bienvenido JaviExpress')


}


