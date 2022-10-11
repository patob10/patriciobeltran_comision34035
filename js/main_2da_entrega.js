
alert("Bienvenido a PeliculasYa")


class Clientes {
    constructor(nombre, apellido, dni, telefono , pagar) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.pagar = pagar
    }

    sumarsaldo(pagar) {
        this.pagar = this.pagar + pagar;
    }
}
const clientes = [];


class Peliculas {
    constructor(titulo, id, precio, stock) {
        this.titulo = titulo;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
}

const pelicula1 = new Peliculas("Mision Imposible 1", 1, 500, 10);
const pelicula2 = new Peliculas("Top Gun Maverick", 2, 2000, 5);
const pelicula3 = new Peliculas("Avengers", 3, 1200, 20); 

const ListaPeliculas = [pelicula1, pelicula2, pelicula3];

function menu(){
    let opcion = 1;
while (opcion !== 0 ) {
    opcion = parseInt(prompt("Ingrese opción deseada:\n \n1- DAR DE ALTA UN CLIENTE   \n2- BUSCAR UN CLIENTE POR DNI  \n3- BUSCAR SALDO  \n4- BUSCAR PELICULA  \n5- BUSCAR SALDO \n\n 6- SALIR "));
    
switch (opcion) {
    case 1:
        altaCliente();
        opcion=1;
        break;
    case 2:
        buscardni();
        opcion=1;
        break;
    case 3:
        buscarsaldo();
        opcion=1;
        break;
    case 4:
        buscarpelicula();
        opcion=1;
        break;
    case 5:
        sumarsaldo();
        opcion=1;
        break;
    case 6:
        salir();
        opcion = 0;
        break;
    }
}
}

menu();

function altaCliente(){

    let nombre = prompt("Ingrese el nombre del nuevo cliente");
    let apellido = prompt("Ingrese apellido del nuevo cliente");
    let dni = prompt("Ingrese su dni del nuevo cliente");
    let telefono = prompt("Ingrese el telefono del nuevo cliente")
    let pagar = 0;
    const cliente = new Clientes(nombre, apellido, dni, telefono, pagar);
    clientes.push(cliente);  
    menu();
}

function buscardni() {
    let dni = prompt("Ingrese el DNI del cliente a buscar: ");
    let cliente = clientes.find(cliente => cliente.dni === dni);
    
    if(cliente == null){
        console.log("Cliente no encontrado");
    }else{
        alert("El cliente encontrado es: " + cliente.nombre);
        
    }
    menu();
}
function buscarsaldo() {
    let dni = prompt("Ingrese el DNI del cliente a buscar: ");
    let cliente = clientes.find(cliente => cliente.dni === dni);

    if(cliente.pagar != 0){
        alert("El cliente tiene un importe pendiente de abonar:  " + cliente.pagar);
    }else{
        alert("El cliente no tiene saldo deudor")
    }
    menu();
}


function sumarsaldo() {
    let dni = prompt("Ingrese el DNI del cliente a buscar: ");
    let cliente = clientes.find(cliente => cliente.dni === dni);
    let nuevosaldo = parseInt(prompt("Ingrese nuevo saldo"));
    for (let Clientes of clientes) {
        if(Clientes.dni == dni) {
            Clientes.sumarsaldo(nuevosaldo);
        }
    }
    console.log(cliente)
    menu();
}

function buscarpelicula(){
    let buscar = prompt("Ingrese el id de la pelicula");
    const pelicula = ListaPeliculas.find(Peliculas => Peliculas.id == buscar); 
    // alert("La pelicula es: " + buscado);
    // console.log("La pelicula es: " + buscado.titulo);
    // console.log("Quedan: " + buscado.stock + "peliculas");
    alert("La pelicula seleccionada es: "+ pelicula.titulo + "\nQuedan disponibles: "+pelicula.stock + "unidades" + "\nLa pelicula seleccionada cuesta: " +pelicula.precio);
    menu();
}


function salir() {
    alert("Gracias por utilizar el sistema de gestion de PeliculasYa");
}
