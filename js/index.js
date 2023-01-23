const   menuMobile = document.querySelector("#header"),
        buttonMenu = document.querySelector(".button-menu")

buttonMenu.addEventListener("click", () => {
        menuMobile.classList.toggle("on")
    })