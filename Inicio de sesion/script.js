const btnInicioSesion = document.getElementById('btncLogin'),
    btnRegistro = document.getElementById('btncRegistrarse'),
    formRegistro = document.querySelector(".registro"),
    formInicioSesion = document.querySelector(".login");

btnInicioSesion.addEventListener("click", e =>{
    formRegistro.classList.add("hide");
    formInicioSesion.classList.remove("hide");
})
btnRegistro.addEventListener("click", e =>{
    formRegistro.classList.remove("hide");
    formInicioSesion.classList.add("hide");
})