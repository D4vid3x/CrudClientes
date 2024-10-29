let arrayClientes = [

    {
        "name": "Leanne Graham",
        "username": "Bret",
        "dni": "11111",
        "edad": 18
    }, {
        "name": "Ervin Howell",
        "username": "Antonette",
        "dni": "22222",
        "edad": 20
    }, {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "dni": "33333",
        "edad": 17
    }, {
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "dni": "44444",
        "edad": 23

    }, {
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "dni": "55555",
        "edad": 16
    }, {
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "dni": "66666",
        "edad": 18
    }, {
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "dni": "88888",
        "edad": 45
    }, {
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "dni": "88888",
        "edad": 34
    }, {
        "name": "Glenna Reichert",
        "username": "Delphine",
        "dni": "99999",
        "edad": 14
    }, {
        "name": "Clementina DuBuque",
        "username": "",
        "dni": "10001",
        "edad": 57
    }

];
let arrayClientesCopia = [];

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
    if(nombre === "" || apellidos ==="" || dni==="" || edad===""){
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