function mostrarAlerta() {
    alert("¡Has hecho clic en el botón!");
}

const imagenalternativa = "sunny go.png";
const imagendefecto = "Roronoa_Zoro.png";

function cambiarImagen() {
    const imagen = document.getElementById('imagen');
    const imagenSrc = imagen.src.split('/').pop();

    if (imagenSrc === imagendefecto) {
        imagen.src = imagenalternativa;
    }
    else {
        imagen.src = imagendefecto;
    }
}


function comprobarEdad() {
    const fechaInput = document.getElementById("fecha").value;
    if (!fechaInput) {
        alert("Introduzca tu fecha de nacimiento.");
        return;
    }

    const hoy = new Date();
    const fechaNacimiento = new Date(fechaInput);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad >= 18) {
        alert("Eres mayor de edad. (" + edad + " años)");
    } else {
        alert("Eres menor de edad. (" + edad + " años)");
    }
}
