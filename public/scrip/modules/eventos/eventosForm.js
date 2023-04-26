
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
        const formData = new FormData()
        formData.append("nombre", form.nombre.value)
        formData.append("precio", form.precio.value)
        formData.append("marca", form.marca.value)
        formData.append("categoria", form.categoria.value)
        formData.append("descripcion", form.descripcion.value)
        formData.append("imagen", form.imagen.files[0])
        

        const response = await fetch("/api/productos",{
            method: "POST",
            body: formData,
        }).then(
            window.alert("se a creado un nuevo producto")
        )
    })
}