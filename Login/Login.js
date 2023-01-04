function onDoLogin(){
    const password = document.getElementById('inputPassword').value;
    const user = document.getElementById('inputUser').value;

    if(password == '' && user == ''){
        alert("Usuario y Contraseña requeridos");
        return;
    }

    if(password == ''){
        alert("Por favor, ingresa tu contraseña")
        document.getElementById('inputUser').value = "";
        return;
    }

    if(user == ''){
        alert("Por favor, ingresa tu usuario")
        document.getElementById('inputPassword').value = "";
        return;
    }

    alert('Bienvenido JaviExpress')
    formLogin.reset();


}


