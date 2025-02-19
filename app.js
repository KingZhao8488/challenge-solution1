// Array to store the names
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (!validarEntrada(nombre)) {
        return;
    }

    // Add the name to the array
    amigos.push(nombre);

    // Update the displayed list
    actualizarLista();

    // Clear the input field
    input.value = "";
}

function validarEntrada(nombre) {
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return false;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return false;
    }

    return true;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

