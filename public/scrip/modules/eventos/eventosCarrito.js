import { cartListTemplates } from "../../templates/frangments.templates.js"

export const añadirEventosCarrito = () => {
    const cart = []
    
    function refreshCart(){
        window.dispatchEvent(new Event("locationchange"))
    }

    function renderCart() {
        const total = cart.reduceRight((acc, producto) => {
            return acc + producto.subtotal
        }, 0)
        document.querySelector("#cartList").innerHTML = cartListTemplates({ cart, total })
    }
    

    renderCart()

    // Borrar Producto Carrito
    document.body.addEventListener("click", async ev => {
        const element = ev.target.closest(".subtractCartBtn")
        if (element) {
            ev.preventDefault()
            const idProducto = element.getAttribute("idProducto")
            const found = cart.find(producto => producto._id == idProducto)
            if (found) {
                found.cantidad = found.cantidad > 0 ? found.cantidad - 1 : 0
                found.subtotal = found.precio * found.cantidad
            }
            renderCart()
        }
    })

    // Agregar Producto Carrito
    document.body.addEventListener("click", async ev => {
        const element = ev.target.closest(".addCartBtn")
        
        if (element) {
            ev.preventDefault()
            const idProducto = element.getAttribute("idProducto")
            const found = cart.find(producto => producto._id == idProducto)
            if (found) {
                found.cantidad++
                found.subtotal = found.precio * found.cantidad
            } else {
    
                const response = await fetch("/api/productos/" + idProducto)
                const producto = await response.json()
                producto.cantidad = 1
                producto.subtotal = producto.precio
                cart.push(producto)
            }
    
            renderCart()
    
        }
    })
    
    // Toggle Carrito con Boton Carrito
    document.querySelector("#cartBtn").addEventListener("click", ev => {
        document.querySelector("#cartList").classList.toggle("show")
    })

    // Ocultar Carrito con Click en Boddy
    document.addEventListener("click", ev => {
        const element = ev.target.closest(".search-bar__carrito-container")
        const sumarCarrito = ev.target.closest(".addCartBtn")
        const restaCarrito = ev.target.closest(".subtractCartBtn")
        if (!element && !sumarCarrito && !restaCarrito) {
            document.querySelector("#cartList").classList.remove("show")
        }
    })

    // Cerrar Carrito con x

    document.querySelector("#cerrarCarrito").addEventListener("click", ev => {
        document.querySelector("#cartList").classList.toggle("show")
    })

    // Cerrar Carrito Esc
    document.body.addEventListener("keydown", ev => {
        if (ev.key === "Escape") {
            document.querySelector("#cartList").classList.remove("show")
            document.querySelector("#nav-bar").classList.remove("show")
            menu.innerHTML = 'Menu 🔻 '
        }
    })

    // Enviar Carrito
    document.addEventListener("click", async ev => {
        const element = ev.target.closest("#enviarCarrito")
        if(element){
            ev.preventDefault()
            console.log(cart)
            const enviarCarrito = await fetch("/api/carrito", {
                method: "POST",
                body: JSON.stringify(cart),
                headers: {
                    "Content-type": "application/json"
                }
            })
            cart = []
            renderCart()
        }
    })

}