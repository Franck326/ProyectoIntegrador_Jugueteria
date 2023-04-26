import { addRoute } from "./modules/spa-librery/index.js";
import { altaTemplate, inicioTemplate,contactoTemplate } from "./templates/pages.template.js";
import  {añadirEventosForm} from"./modules/eventos/eventosForm.js"
import {añadirEventosContacto} from"./modules/eventos/eventosContacto.js";
import { añadirEventosCarrito } from "./modules/eventos/eventosCarrito.js";
import { añadirEventosMenu } from "./modules/eventos/eventosMenu.js";
import { añadirEventosInicio } from "./modules/eventos/eventosInicio.js";

añadirEventosCarrito()
añadirEventosMenu()

addRoute("/productos", async ()=>{
    const response = await fetch("/api/productos", {
        method: "GET"
    })

    const productos = await response.json()
    const cantidadProductos = productos.length

    document.querySelector("main").innerHTML = inicioTemplate({productos, cantidadProductos})
    
    añadirEventosInicio() 
})

addRoute("/alta", ()=> { 
    document.querySelector("main").innerHTML = altaTemplate({})
    añadirEventosForm()
})


addRoute("/contacto", ()=> {
    
    document.querySelector("main").innerHTML = contactoTemplate({})
    añadirEventosContacto()
})

