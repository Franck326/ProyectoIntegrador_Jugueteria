export const añadirEventosMenu = () => {

    let menu = document.querySelector("#menu")
    menu.addEventListener("click", ev => {
        document.querySelector("#nav-bar").classList.toggle("show")
        if (menu.innerHTML == "Menu 🔻 ") {
            menu.innerHTML = 'Menu 🔺';
        } else {
            menu.innerHTML = 'Menu 🔻 '
        }
    })
    
    document.addEventListener("click", ev => {
        const element = ev.target.closest(".nav-bar-fullConteiner")
    
        if (!element) {
            document.querySelector("#nav-bar").classList.remove("show")
            menu.innerHTML = 'Menu 🔻 '
        }
    })
}