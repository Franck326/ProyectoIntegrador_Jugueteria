import { addRoute } from "./modules/spa-librery/index.js";
import { altaTemplate, inicioTemplate,contactoTemplate } from "./templates/pages.template.js";
import "./modules/cart/main.js"
import  {añadirEventosForm} from"./modules/eventos/eventosForm.js"
import {añadirEventosContacto} from"./modules/eventos/eventosContacto.js";

// fetch(`http://localhost:8080/api/productos/${idProducto}`, {
//     method: "DELETE"
// })

addRoute("/productos", async ()=>{
    
    const response = await fetch("http://localhost:8080/api/productos", {
        method: "GET"
    })
    const productos = await response.json()


    const cantidadProductos = productos.length

    document.querySelector("main").innerHTML = inicioTemplate({productos, cantidadProductos})
    
})

addRoute("/alta", ()=> { 
    document.querySelector("main").innerHTML = altaTemplate({})
    añadirEventosForm()
})


addRoute("/contacto", ()=> {
    
    document.querySelector("main").innerHTML = contactoTemplate({})
    añadirEventosContacto()
})

