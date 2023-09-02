function pedirNombre() {
    let nombre = prompt("Ingrese su nombre");
    alert("¡Hola, " + nombre + "! Bienvenidos a la escuela de magos, a continuacion solicitaremos informacion de sus calificaciones en la prueba de inicio");
}

function eleccionFaccion() {
    let poder, intelecto, magia;

    while (true) {
        poder = parseFloat(prompt("Ingrese la calificación de 1 a 10 que sacó en la prueba de PODER"));
        intelecto = parseFloat(prompt("Ingrese la calificación de 1 a 10 que sacó en la prueba de INTELECTO"));
        magia = parseFloat(prompt("Ingrese la calificación de 1 a 10 que sacó en la prueba de MAGIA"));

        if (!isNaN(poder) && !isNaN(intelecto) && !isNaN(magia)) {
            break; // Bucle en caso de que no pongan numeros.
        }

        alert("Por favor, ingrese calificaciones válidas.");
    }

    // Promedio de las notas
    let promedio = (poder + intelecto + magia) / 3;

    alert("Promedio Final: " + promedio);

    // Divido en facciones según el promedio
    if (promedio >= 9.5) {
        alert("Felicitaciones, sos uno de los pocos magos supremos.Bienvenido a la Faccion Diamante");
    }else if (promedio >= 8){
        alert("Sos muy bueno, sobresales del resto. Bienvenido a la Faccion Esmeralda")
    } else if (promedio >= 6) {
        alert("Sos un mago intermedio, segui trabajando. Bienvenido a la Faccion Oro");
    } else if (promedio >= 4) {
        alert("Sos considerado un mago principiante, esfuerzate para lograr a ser un mago intermedio. Bienvenido a la Faccion Plata");
    } else {
        alert("Tu nivel como mago es bajo, a seguir trabajando.Bienvenido a la Faccion Cobre");
    }
}

pedirNombre();
eleccionFaccion();
