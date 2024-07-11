function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre == null || nombre === '') {
        alert('ingrese su nombre');
        return false;
    }

    if (email == null || email === '') {
        alert('ingrese su correo electronico');
        return false;
    }

    if (mensaje == null || mensaje === '') {
        alert('ingrese su mensaje');
        return false;
    }

    return true; 
}