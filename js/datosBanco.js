let btnBanco = document.getElementsByClassName("btnDatosBancarios")
let divBanco = document.getElementById("datosBancarios")
let btnCerrar = document.getElementById("btnCerrar")

btnBanco[0].addEventListener("click",function(){
    divBanco.style.display = "block"
})

btnCerrar.addEventListener("click", function(){
    divBanco.style.display = "none"
})