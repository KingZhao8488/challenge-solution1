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
    mostrarLista();

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

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (amigos.length === 0) {
        lista.innerHTML = "<li>No hay nombres en la lista.</li>";
        return;
    }

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        
        // Button to remove a name
        let removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.classList.add("remove-button");
        removeButton.onclick = () => eliminarAmigo(index);

        li.appendChild(removeButton);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarLista();
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Agrega al menos un amigo antes de sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}