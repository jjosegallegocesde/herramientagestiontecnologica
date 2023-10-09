let botonIdentificar=document.getElementById("identificacionbtn")
let botonSeleccionar=document.getElementById("seleccionbtn")
let botonAdquirir=document.getElementById("adquirirbtn")
let botonProteger=document.getElementById("proteccionbtn")
let botonExplotar=document.getElementById("explotarbtn")


botonIdentificar.addEventListener("click",function(){
    window.location.href="./views/identificacion.html"
})

botonSeleccionar.addEventListener("click",function(){
    window.location.href="./views/seleccion.html"
})

botonAdquirir.addEventListener("click",function(){
    window.location.href="./views/adquisicion.html"
})

botonProteger.addEventListener("click",function(){
    window.location.href="./views/proteccion.html"
    
})

botonExplotar.addEventListener("click",function(){
    window.location.href="./views/explotacion.html"
})