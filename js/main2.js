

class Servicio {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const arroz = new Servicio(1, "Arroz", 100, "img/arroz.png");
const azucar = new Servicio(2, "Azucar", 50, "img/azucar.png");
const fideos = new Servicio(3, "Fideos", 80, "img/fideos.png");
const mermelada = new Servicio(4, "Mermelada", 150, "img/mermelada.png");

//Creamos un Array con todo nuestro catálogo de productos: 

const servicios = [arroz, azucar, fideos, mermelada];

//Creamos el array carrito 

let cotizador = [];

/*** CARGAR CARRITO DESDE EL LOCALSTORAGE: ***/
//Si hay algo en el localStorage, lo cargamos en el carrito. 
if(localStorage.getItem("cotizador")) {
    cotizador = JSON.parse(localStorage.getItem("cotizador"));
}

//console.log(productos);

//Modificamos el DOM mostrando los productos: 

const contenedorProductos = document.getElementById("contenedorProductos");

// Creamos una función para mostrar los productos: 

const mostrarProductos = () => {
    servicios.forEach((servicio) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-6", "col-md-4", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${servicio.img}" class="card-img-top imgProductos" alt="${servicio.nombre}">
                <div class="card-body">
                <h2 class="card-title"> ${servicio.nombre} </h2>
                <p class="card-text"> ${servicio.precio} </p>
                <button class="btn colorBoton" id="boton${servicio.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 
        const boton = document.getElementById(`boton${servicio.id}`);
        boton.addEventListener("click", () => {
            addcotizador(servicio.id)
        })
    })
}

//Función agregar al carrito: 

const addcotizador = (id) => {
    const servicio = servicios.find((servicio) => servicio.id === id);
    const productoEnCarrito = cotizador.find((servicio) => servicio.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        cotizador.push(servicio);
        //Al final de la clase, guardamos en el localStorage. 
        //Trabajamos con el localStorage: 
        localStorage.setItem("cotizador",JSON.stringify(cotizador));
    }
    totalServicios();
}

mostrarProductos();

//MOSTRAR EL CARRITO DE COMPRAS: 

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

//Función para mostrar el Carrillooo: 

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    cotizador.forEach((servicio) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${servicio.img}" class="card-img-top imgProductos" alt="${servicio.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${servicio.nombre} </h5>
                <p class="card-text"> ${servicio.precio} </p>
                <p class="card-text"> ${servicio.cantidad} </p>
                <button class="btn colorBoton" id="eliminar${servicio.id}"> Eliminar Producto </button>
                </div>
            </div>
        `
        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito: 
        const boton = document.getElementById(`eliminar${servicio.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(servicio.id);
        })
    })
    totalServicios();
}


//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const servicio = cotizador.find((servicio) => servicio.id === id);
    const indice = cotizador.indexOf(servicio);
    cotizador.splice(indice, 1);
    mostrarCarrito();

    //LocalStorage:
    localStorage.setItem("cotizador", JSON.stringify(cotizador));
}

//Vaciamos todo el carrito de compras: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

//Función para eliminar todo el carrito: 

const eliminarTodoElCarrito = () => {
    cotizador = [];
    mostrarCarrito();

    //LocalStorage. 
    localStorage.clear();
}

//Mostramos mensaje con el total de la compra 

const total = document.getElementById("total");

const totalServicios = () => {
    let totalCompra = 0; 
    cotizador.forEach((servicio) => {
        totalCompra += servicio.precio * servicio.cantidad;
        //+= es igual a poner totalCompra = totalCompra + producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}

//¿Donde podemos llamar a la función calcularTotal()?
//mostrarCarrito
//agregarAlCarrito