
let presupuesto = localStorage.getItem("presupuesto") ? JSON.parse(localStorage.getItem("presupuesto")) : [];

class Servicio {
    constructor(nombre, precio, img, id) {
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const album = new Servicio("album", 50000, "./img/album.jpg", 01);
const video = new Servicio("video", 80000, "./img/video.jpg", 02);
const casamiento = new Servicio("Foto", 500000, "./img/casamiento.jpg", 03);
const cumpleanios = new Servicio("cumpleaños", 380000, "./img/cumple.webp", 04);

const servicios = [album, video, casamiento, cumpleanios];

const c__servicios = document.getElementById("c__servicios");

const verServicios = () => { 
    servicios.forEach((servicio) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-6", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${servicio.img}" class="card-img-top img__servicio" alt="${servicio.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${servicio.nombre} </h5>
                <p class="card-text"> ${servicio.precio} </p>
                <button class="btn boton" id="add${servicio.id}"> Seleccionar Servicio </button>
                </div>
            </div>
        `
        c__servicios.appendChild(card);
        const add = document.getElementById(`add${servicio.id}`);
        add.addEventListener("click", () => {
            addServicios(servicio.id)
        })
    })
}

verServicios();

const div__presupuesto = document.getElementById("div__presupuesto");
const verPresupuesto = document.getElementById("verPresupuesto");

verPresupuesto.addEventListener("click", () => {
    mostrarPresupuesto();
});

const mostrarPresupuesto = () => {
    div__presupuesto.innerHTML="";
    presupuesto.forEach((servicio) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${servicio.img}" class="card-img-top img__servicio" alt="${servicio.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${servicio.nombre} </h5>
                <p class="card-text"> ${servicio.precio} </p>
                <p class="card-text"> ${servicio.cantidad} </p>
                <button class="btn boton" id="delete${servicio.id}"> Eliminar Servicio </button>
                </div>
            </div>
        `
        div__presupuesto.appendChild(card);
        const add = document.getElementById(`delete${servicio.id}`);
        add.addEventListener("click", () => {
            eliminarServicio(servicio.id);
        })
    })
    totalServicios();
}

const addServicios = (id) => { 
    const servicio = servicios.find((servicio) => servicio.id === id);
    const servicioAgregado = presupuesto.find((servicio) => servicio.id === id);
    if(servicioAgregado){
        servicioAgregado.cantidad++;
    }else {
        presupuesto.push(servicio);
        localStorage.setItem("presupuesto",JSON.stringify(presupuesto));
    }
    totalServicios();
}

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    resetPresupuesto();
})

const resetPresupuesto = () => {
    presupuesto = [];
    mostrarPresupuesto();
    localStorage.clear();
}

const presupuestoTotal = document.getElementById("presupuestoTotal");

const totalServicios = () => {
    let totalPresupuesto = 0; 
    presupuesto.forEach((servicio) => {
        totalPresupuesto =  totalPresupuesto + servicio.precio * servicio.cantidad;
    })
    total.innerHTML = ` $${totalPresupuesto}`;
}

const eliminarServicio = (id) => {
    const servicios = presupuesto.find((servicio) => servicio.id === id);
    const indice = presupuesto.indexOf(servicios);
    presupuesto.splice(indice, 1);
    mostrarPresupuesto();
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
}