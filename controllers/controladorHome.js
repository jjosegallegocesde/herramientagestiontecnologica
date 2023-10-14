let botonIdentificar = document.getElementById("identificacionbtn")
let botonSeleccionar = document.getElementById("seleccionbtn")
let botonAdquirir = document.getElementById("adquirirbtn")
let botonProteger = document.getElementById("proteccionbtn")
let botonExplotar = document.getElementById("explotarbtn")



let myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasExample'));
let tecnologiaA = sessionStorage.getItem("tecnologiaA");
console.log(tecnologiaA)
if (tecnologiaA != null) {
    
    myOffcanvas.show(); // Abre el offcanvas programáticamente
    
} else {
    // sessionStorage está vacío
    // Puedes manejarlo de acuerdo a tus necesidades
}


botonIdentificar.addEventListener("click", function () {
    window.location.href = "./views/identificacion.html"
})

botonSeleccionar.addEventListener("click", function () {
    window.location.href = "./views/seleccion.html"
})

botonAdquirir.addEventListener("click", function () {
    window.location.href = "./views/adquisicion.html"
})

botonProteger.addEventListener("click", function () {
    window.location.href = "./views/proteccion.html"

})

botonExplotar.addEventListener("click", function () {
    window.location.href = "./views/explotacion.html"
})