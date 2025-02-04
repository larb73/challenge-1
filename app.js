// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nombre = " "

//*let amigo = Input.value()

function agregarAmigo() {
    document.getElementById("resultado").innerHTML =" "
    document.getElementById("amigo").innerHTML=" "
    nombre = document.getElementById("amigo").value;
 
    if (nombre === "") {
        document.getElementById("resultado").innerHTML =" Por favor, inserte un nombre";
        return;
    }
    agregarNombres(nombre);
    crealistaAmigos(amigos);
 }

function agregarNombres() {
    amigos.push(nombre);
    nombre = document.getElementById("amigo").value ="";
    return;
 }

 function sortearAmigo() {
    // Validacion array vacio
      if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles.";
        return;
    }
        // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo seleccionado: ${amigoSorteado}`;
}

 function crealistaAmigos() {
   
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo como texto
        lista.appendChild(li); // Agregar el elemento <li> a la lista
    }
    return;
}



