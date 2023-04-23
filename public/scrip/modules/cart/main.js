const cart = []
import { cartListTemplates } from "../../templates/frangments.templates.js"


function renderCart(){
    
    const total = cart.reduceRight( (acc, producto)=>{
        return acc+producto.subtotal
    },0)

    document.querySelector("#cartList").innerHTML = cartListTemplates({cart, total})

}

// function subtractCartBtn(){
document.body.addEventListener("click", async ev => {
const element = ev.target.closest(".subtractCartBtn")
if (element) {
    ev.preventDefault()
    const idProducto = element.getAttribute("idProducto")
    const found = cart.find(producto => producto.id == idProducto)
        if (found) {
            found.cantidad = found.cantidad > 0 ? found.cantidad-1 : 0
            found.subtotal = found.precio * found.cantidad
        }
        renderCart()
}
})
// }


renderCart()



document.body.addEventListener("click", async ev => {
    const element = ev.target.closest(".addCartBtn")

    if (element) {
        ev.preventDefault()
        const idProducto = element.getAttribute("idProducto")

        const found = cart.find(producto => producto.id == idProducto)
        if (found) {
            found.cantidad++
            found.subtotal = found.precio * found.cantidad
        } else {

            const response = await fetch("http://localhost:3000/productos/" + idProducto)
            const producto = await response.json()
            producto.cantidad = 1
            producto.subtotal = producto.precio
            cart.push(producto)
        }

        renderCart()
        
    }
})


document.querySelector("#cartBtn").addEventListener("click", ev =>{
    document.querySelector("#cartList").classList.toggle("show")
})


document.body.addEventListener("click", ev => {
    const element = ev.target.closest(".search-bar__carrito-container")
    const sumarCarrito = ev.target.closest(".addCartBtn")
    const restaCarrito = ev.target.closest(".subtractCartBtn")
    if(!element && !sumarCarrito && !restaCarrito){
        document.querySelector("#cartList").classList.remove("show")
    }
})

document.querySelector("#cartList .cerrarCarrito").addEventListener("click", ev =>{
    document.querySelector("#cartList").classList.remove("show")
})



document.body.addEventListener("keydown", ev => {
    if(ev.key === "Escape"){
        document.querySelector("#cartList").classList.remove("show")
        document.querySelector("#nav-bar").classList.remove("show")
        menu.innerHTML = 'Menu 🔻 '
    }
})















let menu = document.querySelector("#menu")
menu.addEventListener("click", ev =>{
    document.querySelector("#nav-bar").classList.toggle("show")
    if(menu.innerHTML == "Menu 🔻 "){
        menu.innerHTML = 'Menu 🔺';
    }else{
        menu.innerHTML = 'Menu 🔻 '
    }
})

document.body.addEventListener("click", ev => {
    const element = ev.target.closest(".nav-bar-fullConteiner")

    if(!element){
        document.querySelector("#nav-bar").classList.remove("show")
        menu.innerHTML = 'Menu 🔻 '
    }
})






    