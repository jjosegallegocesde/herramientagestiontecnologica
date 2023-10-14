let ctx = document.getElementById("radarChart").getContext("2d");
let myRadarChart = null;

let nombreTecA = document.getElementById("nombreTecA")
let nombreTecB = document.getElementById("nombreTecB")
let nombreTecC = document.getElementById("nombreTecC")

let tituloA = document.getElementById("tituloA")
let tituloB = document.getElementById("tituloB")
let tituloC = document.getElementById("tituloC")

let tituloA2 = document.getElementById("tituloA2")
let tituloB2 = document.getElementById("tituloB2")
let tituloC2 = document.getElementById("tituloC2")

let filaresultados=document.getElementById("filaresultados")

nombreTecA.addEventListener("input", function () {
    tituloA.textContent = nombreTecA.value.toUpperCase()
    tituloA2.textContent = nombreTecA.value.toUpperCase()
})

nombreTecB.addEventListener("input", function () {
    tituloB.textContent = nombreTecB.value.toUpperCase()
    tituloB2.textContent = nombreTecB.value.toUpperCase()
})

nombreTecC.addEventListener("input", function () {
    tituloC.textContent = nombreTecC.value.toUpperCase()
    tituloC2.textContent = nombreTecC.value.toUpperCase()
})

let magnitudCapacidadTecnologiaA = document.getElementById("magnitudCapacidadTecnologiaA");
let magnitudCapacidadTecnologiaB = document.getElementById("magnitudCapacidadTecnologiaB");
let magnitudCapacidadTecnologiaC = document.getElementById("magnitudCapacidadTecnologiaC");

let magnitudCapacidadRecursosHumanosA = document.getElementById("magnitudCapacidadRecursosHumanosA");
let magnitudCapacidadRecursosHumanosB = document.getElementById("magnitudCapacidadRecursosHumanosB");
let magnitudCapacidadRecursosHumanosC = document.getElementById("magnitudCapacidadRecursosHumanosC");

let magnitudCapacidadRecursosFinancierosA = document.getElementById("magnitudCapacidadRecursosFinancierosA");
let magnitudCapacidadRecursosFinancierosB = document.getElementById("magnitudCapacidadRecursosFinancierosB");
let magnitudCapacidadRecursosFinancierosC = document.getElementById("magnitudCapacidadRecursosFinancierosC");

let relevanciarecursosexternosA = document.getElementById("relevanciarecursosexternosA");
let relevanciarecursosexternosB = document.getElementById("relevanciarecursosexternosB");
let relevanciarecursosexternosC = document.getElementById("relevanciarecursosexternosC");

let estadoMantenimientoA = document.getElementById("estadoMantenimientoA");
let estadoMantenimientoB = document.getElementById("estadoMantenimientoB");
let estadoMantenimientoC = document.getElementById("estadoMantenimientoC");

let culturaOrganizacionalA = document.getElementById("culturaOrganizacionalA");
let culturaOrganizacionalB = document.getElementById("culturaOrganizacionalB");
let culturaOrganizacionalC = document.getElementById("culturaOrganizacionalC");

let capacidadCambiosA = document.getElementById("capacidadCambiosA");
let capacidadCambiosB = document.getElementById("capacidadCambiosB");
let capacidadCambiosC = document.getElementById("capacidadCambiosC");

let experienciapreviaA = document.getElementById("experienciapreviaA");
let experienciapreviaB = document.getElementById("experienciapreviaB");
let experienciapreviaC = document.getElementById("experienciapreviaC");

let capacidadAdquirirA = document.getElementById("capacidadAdquirirA");
let capacidadAdquirirB = document.getElementById("capacidadAdquirirB");
let capacidadAdquirirC = document.getElementById("capacidadAdquirirC");

let gradoconocimeintoA = document.getElementById("gradoconocimeintoA");
let gradoconocimeintoB = document.getElementById("gradoconocimeintoB");
let gradoconocimeintoC = document.getElementById("gradoconocimeintoC");


// Asociación de elementos en JavaScript
let categoriaidentificacionA = document.getElementById("categoriaidentificacionA");
let disponibletecnologiaA = document.getElementById("disponibletecnologiaA");
let madurezA = document.getElementById("madurezA");
let impactoidentificacionA = document.getElementById("impactoidentificacionA");
let valoracionTecnologiaA = document.getElementById("valoracionTecnologiaA");

let categoriaidentificacionB = document.getElementById("categoriaidentificacionB");
let disponibletecnologiaB = document.getElementById("disponibletecnologiaB");
let madurezB = document.getElementById("madurezB");
let impactoidentificacionB = document.getElementById("impactoidentificacionB");
let valoracionTecnologiaB = document.getElementById("valoracionTecnologiaB");

let categoriaidentificacionC = document.getElementById("categoriaidentificacionC");
let disponibletecnologiaC = document.getElementById("disponibletecnologiaC");
let madurezC = document.getElementById("madurezC");
let impactoidentificacionC = document.getElementById("impactoidentificacionC");
let valoracionTecnologiaC = document.getElementById("valoracionTecnologiaC");


let boton = document.getElementById("btnidentificar")
boton.addEventListener("click", function () {

    // Captura los valores de los elementos de textarea
    let datosCapacidades = {
        magnitudCapacidadTecnologiaA: magnitudCapacidadTecnologiaA.value,
        magnitudCapacidadTecnologiaB: magnitudCapacidadTecnologiaB.value,
        magnitudCapacidadTecnologiaC: magnitudCapacidadTecnologiaC.value,
        magnitudCapacidadRecursosHumanosA: magnitudCapacidadRecursosHumanosA.value,
        magnitudCapacidadRecursosHumanosB: magnitudCapacidadRecursosHumanosB.value,
        magnitudCapacidadRecursosHumanosC: magnitudCapacidadRecursosHumanosC.value,
        magnitudCapacidadRecursosFinancierosA: magnitudCapacidadRecursosFinancierosA.value,
        magnitudCapacidadRecursosFinancierosB: magnitudCapacidadRecursosFinancierosB.value,
        magnitudCapacidadRecursosFinancierosC: magnitudCapacidadRecursosFinancierosC.value,
        relevanciarecursosexternosA: relevanciarecursosexternosA.value,
        relevanciarecursosexternosB: relevanciarecursosexternosB.value,
        relevanciarecursosexternosC: relevanciarecursosexternosC.value,
        estadoMantenimientoA: estadoMantenimientoA.value,
        estadoMantenimientoB: estadoMantenimientoB.value,
        estadoMantenimientoC: estadoMantenimientoC.value,
        culturaOrganizacionalA: culturaOrganizacionalA.value,
        culturaOrganizacionalB: culturaOrganizacionalB.value,
        culturaOrganizacionalC: culturaOrganizacionalC.value,
        capacidadCambiosA: capacidadCambiosA.value,
        capacidadCambiosB: capacidadCambiosB.value,
        capacidadCambiosC: capacidadCambiosC.value,
        experienciapreviaA: experienciapreviaA.value,
        experienciapreviaB: experienciapreviaB.value,
        experienciapreviaC: experienciapreviaC.value,
        capacidadAdquirirA: capacidadAdquirirA.value,
        capacidadAdquirirB: capacidadAdquirirB.value,
        capacidadAdquirirC: capacidadAdquirirC.value,
        gradoconocimeintoA: gradoconocimeintoA.value,
        gradoconocimeintoB: gradoconocimeintoB.value,
        gradoconocimeintoC: gradoconocimeintoC.value
    };

    // Convierte los valores capturados en un objeto JSON
    let jsonData = JSON.stringify(datosCapacidades);

    

    

    // Ejemplo de datos de muestra, debes reemplazarlos con los valores reales de tus campos
let datospreeliminares = {
    labels: ["Disponibilidad", "Madurez", "Impacto", "Valoración"],
    datasets: [
        {
            label: "TecnologiaA",
            data: [disponibletecnologiaA.value*5, madurezA.value, impactoidentificacionA.value, valoracionTecnologiaA.value],
            borderColor: "rgba(75, 192, 192, 1)",
            fill: true,
        },
        {
            label: "TecnologiaB",
            data: [disponibletecnologiaB.value*5, madurezB.value, impactoidentificacionB.value, valoracionTecnologiaB.value],
            borderColor: "rgba(255, 99, 132, 1)",
            fill: true,
        },
        {
            label: "TecnologiaC",
            data: [disponibletecnologiaC.value*5, madurezC.value, impactoidentificacionC.value, valoracionTecnologiaC.value],
            borderColor: "rgba(153, 102, 255, 1)",
            fill: true,
        },
    ],
};

if (myRadarChart) {
    myRadarChart.destroy();
}

// Crea la gráfica de radar
myRadarChart = new Chart(ctx, {
    type: "radar",
    data: datospreeliminares,
    options: {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 5,
            },
        },
    },
});

//Mostramos resultados
filaresultados.classList.remove("d-none")


//session storage
let tecnologiaA=nombreTecA.value
let tecnologiaB=nombreTecB.value
let tecnologiaC=nombreTecC.value

sessionStorage.setItem("tecnologiaA", tecnologiaA);
sessionStorage.setItem("tecnologiaB", tecnologiaB);
sessionStorage.setItem("tecnologiaC", tecnologiaC);
sessionStorage.setItem("datosCapacidades", jsonData);


})