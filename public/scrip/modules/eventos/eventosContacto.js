export const añadirEventosContacto = () => {

    const form = document.querySelector("#section-contacto form")

    form.nombre.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.nombre.value
        const errMsgSpan = form.nombre.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,20}$/
        if (!regEXP.test(value)) {
            errMsg = "no coincide con el valor esperado"
        }

        form.nombre.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })

    form.correo.addEventListener("change", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.correo.value
        const errMsgSpan = form.correo.parentElement.querySelector(".errMsg")
        let errMsg = ""
        let regExp = /^[\w.-]{2,}@[\w-]+(\.\w+){1,2}$/
        
            if( !regExp.test(value) ){
                errMsg = "Debe tener un formato como: ejemplo@email.com"
            }
        
            // "" -> OK      "texto" -> ERROR
            form.correo.setCustomValidity(errMsg)
            errMsgSpan.innerText = errMsg



    })

    form.comentarios.addEventListener("blur", ev => {
        const input = ev.target
        input.classList.add("in")
        const value = form.comentarios.value
        const errMsgSpan = form.comentarios.parentElement.querySelector(".errMsg")
        let errMsg = ""

        const regEXP = /^[\wñáéíóúÜ\.\,\'\"\s\/\-]{2,40}$/
        if (!regEXP.test(value)) {
            errMsg = "no coincide con el valor esperado"
        }

        form.comentarios.setCustomValidity(errMsg)
        errMsgSpan.innerText = errMsg



    })

    


}
