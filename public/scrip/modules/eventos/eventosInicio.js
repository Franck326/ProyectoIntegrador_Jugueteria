export const añadirEventosInicio = () => {
    function refreshProduct(){
        window.dispatchEvent(new Event("locationchange"))
    }
    
    let allBotonsDel = document.querySelectorAll(".borrarProducto")
    allBotonsDel.forEach(element => {
        element.onclick = async (ev) => {
            if (element) {
                ev.preventDefault()
                const idProducto = element.getAttribute("idProducto")
                
                var resultado = window.confirm(`Seguro que desea eliminar el producto?`)
                if (resultado === true) {
                    await fetch(`/api/productos/${idProducto}`, {
                        method: "DELETE"
                    })
                    window.alert(`El Producto se a borrado!`)
                    refreshProduct()
                } else {
                    window.alert(`Fiuuuu! El Producto esta a salvo!`)
                }
            } 
        }
    })
}
