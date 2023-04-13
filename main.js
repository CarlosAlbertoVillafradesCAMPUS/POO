//Creamos una clase llamada lapiz
class lapiz{
    //cracateristica privada
    #marca
    constructor({color="#FFEA00",
                dimencion= 19,
                marca= "Mongol",
                borrador= "true",
                material= "Madera"}){
        //caracteristicas publicas
        this.color = color;
        this.dimencion = dimencion;
        this.#marca= marca;
        this.borrador = borrador;
        this.material = material;

    }
    //metodo para obtener los datos del formulario
    obtener({color, dimencion, marca, borrador, material}){
        this.color = color,
        this.dimencion = dimencion,
        this.#marca = marca,
        this.borrador = borrador,
        this.material = material
    }
    
    //metodo para poder llamar a nuestra caracteristica privada
    getMarca(){
        return this.#marca
    }
}
let obj = undefined
let color = document.querySelector(`[name="color"]`);
let dimencion = document.querySelector(`[name="dimension"]`);
let spanNumber = document.querySelector("#number");
let marca = document.querySelectorAll(`[name="marca"]`);
let borrador = document.querySelectorAll(`[name="borrador"]`);
let material = document.querySelectorAll(`[name="material"]`);

//evento de mostrar el numero de la dimencion
dimencion.addEventListener("input", function () {
    let valor = dimencion.value;
    spanNumber.innerHTML = valor;
});

//evento de mostrar los datos por defecto cuando se carge la pagina
addEventListener("DOMContentLoaded", (e) => {
    obj = new lapiz({});
    color.value = obj.color;
    dimencion.value = obj.dimencion;
    // manera para saber cual marca es la seleccionada
    marca.forEach(element => {
        if(element.value == obj.getMarca()) {
            element.checked = true;
        }
    });
    borrador.forEach(element => {
        if(element.value == obj.borrador) {
            element.checked = true;
        }
    });
    material.forEach(element => {
        if(element.value == obj.material) {
            element.checked = true;
        }
    });
    
})

let myFomulario = document.querySelector("#myFormulario");
//evento submit
myFomulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    //llamar a nuestra clase y camiar los valores de nuestras caracteristicas por los datos obtenidos en el formulario
    let obj =  new lapiz({});
    obj.obtener({color:data.color,
        dimencion: data.dimension,
        marca: data.marca,
        borrador: data.borrador,
        material: data.material
    })

    //agregando los lapices a nuestra tabla
    let tableBody = document.querySelector("#tableBody");
    tableBody.insertAdjacentHTML("beforeend", `
    <tr>
                <td>${obj.color}</td>
                <td>${obj.dimencion}</td>
                <td>${obj.getMarca()}</td>
                <td>${obj.borrador}</td>
                <td>${obj.material}</td>
    </tr>
    `)
})