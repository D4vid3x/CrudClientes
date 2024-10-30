let arrayClientes = [

    {
        "nombre": "Leanne Graham",
        "apellidos": "Bret",
        "dni": "11111",
        "edad": 18
    }, {
        "nombre": "Ervin Howell",
        "apellidos": "Antonette",
        "dni": "22222",
        "edad": 20
    }, {
        "nombre": "Clementine Bauch",
        "apellidos": "Samantha",
        "dni": "33333",
        "edad": 17
    }, {
        "nombre": "Patricia Lebsack",
        "apellidos": "Karianne",
        "dni": "44444",
        "edad": 23

    }, {
        "nombre": "Chelsey Dietrich",
        "apellidos": "Kamren",
        "dni": "55555",
        "edad": 16
    }, {
        "nombre": "Mrs. Dennis Schulist",
        "apellidos": "Leopoldo_Corkery",
        "dni": "66666",
        "edad": 18
    }, {
        "nombre": "Kurtis Weissnat",
        "apellidos": "Elwyn.Skiles",
        "dni": "88888",
        "edad": 45
    }, {
        "nombre": "Nicholas Runolfsdottir V",
        "apellidos": "Maxime_Nienow",
        "dni": "88888",
        "edad": 34
    }, {
        "nombre": "Glenna Reichert",
        "apellidos": "Delphine",
        "dni": "99999",
        "edad": 14
    }, {
        "nombre": "Clementina DuBuque",
        "apellidos": "",
        "dni": "10001",
        "edad": 57
    }

];

function crearCliente() {
    let nombre = document
        .getElementById("nombre")
        .value;
    let apellidos = document
        .getElementById("apellidos")
        .value;
    let dni = document
        .getElementById("dni")
        .value;
    let edad = document
        .getElementById("edad")
        .value;

    let clientes = {
        nombre: nombre,
        apellidos: apellidos,
        dni: dni,
        edad: edad
    };

    if(nombre === "" || apellidos === "" || dni=== "" || edad=== ""){
        alert("Rellena los campos");
    }else{
        arrayClientes.push(clientes);
    }
}

function borrarDatosIntro() {
    document
        .getElementById("nombre")
        .value = "";
    document
        .getElementById("apellidos")
        .value = "";
    document
        .getElementById("dni")
        .value = "";
    document
        .getElementById("edad")
        .value = "";
}

function mostrartodosClientes() {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    for (let dato of arrayClientes) {
        let fila = document.createElement("tr");
        for (let valor in dato) {
            let celda = document.createElement("td");
            celda.innerHTML = `${dato[valor]}`;
            fila.appendChild(celda);
            celda.style.border="1px solid black";
            celda.style.padding="8px";
        }
        tabla.appendChild(fila);
    }
    
}
function limpiarTabla() {
    let tabla = document.getElementById("tabla");

    tabla.innerHTML = "";
}

function encontrarClienteDNI(){
    let busca=prompt("Escribe el dni del cliente: ");
    let encuentra=arrayClientes.findIndex(cliente=> cliente.dni===busca);

    if(encuentra !==-1){
        return encuentra;
    }else{
        alert(`No se ha encontrado al cliente con dni ${busca}`);
        return -1;
    }
}

function borrarCliente(){
   if(confirm("¿Desea borrar un cliente?")){
    let encontrado=encontrarClienteDNI();
    if(encontrado!==-1){
        arrayClientes.splice(encontrado, 1);
        alert("Cliente borrado");
        mostrartodosClientes();
    }
   }else{
    alert("No se ha borrado ningún cliente");
   }
}

function editarCliente(cliente, valor){
    let valorNuevo=prompt(`Introduce el nuevo ${valor}`);
    cliente[valor]=valorNuevo;
    return cliente;
}

function modificarCliente() {
    if (confirm("¿Desea modificar un cliente?")) {
        let cliente = encontrarClienteDNI();
        
        if (cliente !== -1) {
            let opcion = prompt("¿Qué deseas modificar (nombre, apellidos, dni, edad)?").toLowerCase();
            let propiedadesValidas = ["nombre", "apellidos", "dni", "edad"];
            
            if (propiedadesValidas.includes(opcion)) {
                editarCliente(cliente, opcion);
                alert("Cliente modificado");
                mostrartodosClientes();
            } else {
                alert("Opción no válida");
            }
        }
    } else {
        alert("No se ha modificado ningún cliente");
    }
}