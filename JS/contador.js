



// Declaración de variable
let contador = 0;

// Declaración de constante
const ContadorMaximo = 10;

// Aumentar el contador
function aumentarContador() {
    if (contador < ContadorMaximo) {
        contador++;
        actualizarPantalla();
    } else {
        alert('¡El contador alcanzó su valor máximo!');
    }
}

// Disminuir el contador
function disminuirContador() {
    if (contador > 0) {
        contador--;
        actualizarPantalla();
    } else {
        alert('¡El contador ya está en cero!');
    }
}

// Reiniciar el contador
function reiniciarContador() {
    const confirmacion = confirm('¿Seguro que quieres reiniciar el contador?');
    if (confirmacion) {
        contador = 0;
        actualizarPantalla();
    }
}

// Mostrar en la consola y un cuadro de diálogo
function actualizarPantalla() {
    console.log('Contador: ' + contador);
    alert('Contador: ' + contador);
}

// Ciclo WHILE y SWITCH
while (contador < ContadorMaximo) {
    const opcion = prompt('Opciones:\n1. Aumentar contador\n2. Disminuir contador\n3. Reiniciar contador\n4. Salir');

    switch (opcion) {
        case '1':
            aumentarContador();
            break;
        case '2':
            disminuirContador();
            break;
        case '3':
            reiniciarContador();
            break;
        case '4':
            alert('Saliendo del contador.');
            contador = ContadorMaximo;
            break;
        default:
            alert('Opción no válida. Introduce 1, 2, 3 o 4.');
            break;
    }
}
