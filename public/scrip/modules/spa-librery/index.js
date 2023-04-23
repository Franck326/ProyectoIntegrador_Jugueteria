import "./pollyfill/pollyfillLocationchange.js"



const body = document.querySelector("body")
document.body.addEventListener("click", ev => {
        const element = ev.target.closest("a[to]")
        if(element){
            ev.preventDefault()
            const to = element.getAttribute("to")
            history.pushState({}, null, to)
        }
})

export const routes = []

export function addRoute(path, callback){
    routes.push( {path, callback})
}



window.addEventListener("locationchange", ev =>{


    routes.forEach(route => {

        const regEXP = new RegExp("^"+route.path+"$")

        if(regEXP.test(location.pathname) ){
            const matchs = location.pathname.match(regEXP).slice(1)

            route.callback(matchs)
        }
    })
})