// Referencias a elementos del formulario
let nombreProyectoInput = document.getElementById('nombreProyectoexplotacion');
let categoriaSelect = document.getElementById('categoriaexplotacion');
let descripcionTextarea = document.getElementById('descripcionexplotacion');
let tipoDesarrolloSelect = document.getElementById('tipodesarrolloexplotacion');
let impactoSelect = document.getElementById('impactoexplotacion');
let importanciaSelect = document.getElementById('importanciaexplotacion');
let facilidadTransferenciaSelect = document.getElementById('facilidadtransferenciaexplotacion');
let impactoTransferenciaSelect = document.getElementById('impactotransferenciaexplotacion');
let seguimientoSelect = document.getElementById('seguimientoexplotacion');
let accionesImplementarTextarea = document.getElementById('accionesimplementarexplotacion');


let resultado=document.getElementById("resulexplota")

let graficabarra = null;
let canvas = document.getElementById('graficoBarras');

let boton = document.getElementById("botonexplotacion")
boton.addEventListener("click", function () {

     // Verifica si ya existe un gráfico y lo destruye
     if (graficabarra) {
        console.log("hola")
        graficabarra.destroy();
    }

    // Obtén los valores de los selectores
    let impactoValor = parseInt(impactoSelect.value);
    let aprovechamientoValor = parseInt(importanciaSelect.value);
    let facilidadTransferenciaValor = parseInt(facilidadTransferenciaSelect.value);
    let impactoTransferenciaValor = parseInt(impactoTransferenciaSelect.value);

    // Calcula la puntuación
    let puntuacion = (impactoValor * 0.25) + (aprovechamientoValor * 0.25) + (facilidadTransferenciaValor * 0.25) + (impactoTransferenciaValor * 0.25);

    // Crear un arreglo con los nombres de las categorías y sus puntuaciones
    let categorias = ['Impacto', 'Aprovechamiento', 'Facilidad de Transferencia', 'Impacto de la Transferencia'];
    let puntuaciones = [impactoValor, aprovechamientoValor, facilidadTransferenciaValor, impactoTransferenciaValor];

    // Crear un arreglo de colores personalizados
    let colores = ['#133D8C', '#3D138C', '#0B5032', '#F0E134'];


    // Crear el gráfico de barras
    graficabarra = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: categorias,
            datasets: [{
                label: 'Resultados Explotación',
                data: puntuaciones,
                backgroundColor: colores,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });


    resultado.classList.remove("d-none")

});

    


