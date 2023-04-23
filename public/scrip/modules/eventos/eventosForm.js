
export const añadirEventosForm = () => {
    const form = document.querySelector("#section-alta form")


    form.nombre.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.nombre.value
        const errMsgSpan = form.nombre.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,40}$/
        if (!regEXP.test(value)) {
            errMsg = "no coincide con el valor esperado"
        }

        form.nombre.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })


    form.precio.addEventListener("blur", ev => {
        const input = ev.target
        const value = form.precio.value
        const errMsgSpan = form.precio.parentElement.querySelector(".errMsg")
        let errMsg = ""
        if ( value < 1) {
            errMsg = "Porfavor rellene con el valor estimado"
            input.classList.remove("in")
            input.classList.add("red")
            
        }else{
            input.classList.add("in")
        }

        form.precio.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })


    form.stock.addEventListener("blur", ev => {
        const input = ev.target
        const value = form.stock.value
        const errMsgSpan = form.stock.parentElement.querySelector(".errMsg")
        let errMsg = ""
        if ( value < 1) {
            errMsg = "Porfavor rellene con el valor estimado"
            input.classList.remove("in")
            input.classList.add("red")
            
        }else{
            input.classList.add("in")
        }

        form.stock.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })


    form.marca.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.marca.value
        const errMsgSpan = form.marca.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,40}$/
        if (!regEXP.test(value)) {
            errMsg = "no coincide con el valor esperado"
        }

        form.marca.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })


    form.categoria.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.categoria.value
        const errMsgSpan = form.categoria.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,50}$/
        if (!regEXP.test(value)) {
            errMsg = "no coincide con el valor esperado"
        }

        form.categoria.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg




    })


    form.descripcion.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.descripcion.value
        const errMsgSpan = form.descripcion.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,80}$/
        if (!regEXP.test(value)) {
            errMsg = "El texto no debe tener mas de 80 caracteres"
        }

        form.descripcion.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg




    })


    form.descripcionLarga.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.descripcionLarga.value
        const errMsgSpan = form.descripcionLarga.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,2000}$/
        if (!regEXP.test(value)) {
            errMsg = "no coincide con el valor esperado"
        }

        form.nombre.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })


    form.edadMinima.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.edadMinima.value
        const errMsgSpan = form.edadMinima.parentElement.querySelector(".errMsg")
        let errMsg = ""

        if (value < 1) {
            errMsg = "El año no puede ser menor a uno"
        }

        form.edadMinima.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg


    })


    form.edadMaxima.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.edadMaxima.value
        const errMsgSpan = form.edadMaxima.parentElement.querySelector(".errMsg")
        let errMsg = ""

        if (value < 2) {
            errMsg = "El año no puede ser menor a cero"
        }

        form.edadMaxima.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg


    })


    form.imagen.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.imagen.value
        const errMsgSpan = form.imagen.parentElement.querySelector(".errMsg")
        let errMsg = ""
        if(!value.length==1){
            errMsg = "porfavor inserte solo un archivo"
        }

        form.imagen.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })

    form.addEventListener("submit",async ev => {
        ev.preventDefault()
        //validar que los input tengana 1 caracter
        const body = {
            nombre: form.nombre.value,
            precio: form.precio.value,
            stock: form.stock.value,
            marca: form.marca.value,
            categoria: form.categoria.value,
            descripcion: form.descripcion.value,
            descripcionLarga: form.descripcionLarga.value,
            edadMinima: form.edadMinima.value,
            edadMaxima: form.edadMaxima.value,
            img:form.imagen.files[0].name
        }

        const response = await fetch("http://localhost:8080/api/productos",{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        })

        const nuevoProducto = await response.json() 
        console.log (nuevoProducto)

    })



}