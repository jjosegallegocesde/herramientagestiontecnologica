let tecnologiaA = sessionStorage.getItem("tecnologiaA");
let tecnologiaB = sessionStorage.getItem("tecnologiaB");
let tecnologiaC = sessionStorage.getItem("tecnologiaC");

let nombreteca=document.getElementById("nombreteca")
let nombretecb=document.getElementById("nombretecb")
let nombretecc=document.getElementById("nombretecc")

nombreteca.textContent=tecnologiaA.toUpperCase()
nombretecb.textContent=tecnologiaB.toUpperCase()
nombretecc.textContent=tecnologiaC.toUpperCase()


// Declara las variables para las puntuaciones
let valiosaTecA, raraTecA, inimitableTecA;
let valiosaTecB, raraTecB, inimitableTecB;
let valiosaTecC, raraTecC, inimitableTecC;

let mensaje=document.getElementById("mensajeseleccion")

// Obtén una referencia al elemento canvas del gráfico
let canvas = document.getElementById('burbujas');

// Inicializa los datos del gráfico vacíos
let chartData = {
    datasets: []
};

// Crea el objeto del gráfico
let bubbleChart = new Chart(canvas, {
    type: 'bubble',
    data: chartData,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: 'Valiosa',
                },
            },
            y: {
                beginAtZero: true,
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: 'Rara',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    // Personaliza la leyenda para mostrar que el radio representa "Inimitable"
                    generateLabels: function (chart) {
                        return chart.data.datasets.map(function (dataset, i) {
                            return {
                                text: `Tecnología ${i + 1}`,
                                fillStyle: dataset.backgroundColor,
                                hidden: false,
                                index: i,
                                datasetIndex: i,
                                // Agrega la información sobre "Inimitable" al nombre de la burbuja en la leyenda
                                text: `Tecnología ${i + 1} (Inimitable: x${dataset.data[0].r / 10})`,
                            };
                        });
                    },
                },
            },
        },
    },
});

// Función para actualizar el gráfico con datos de tecnología
function actualizarGrafico() {
    // Obtén las puntuaciones de las tecnologías desde los select
    valiosaTecA = parseInt(document.getElementById('valiosaTecA').value);
    raraTecA = parseInt(document.getElementById('raraTecA').value);
    inimitableTecA = parseInt(document.getElementById('inimitableTecA').value);

    valiosaTecB = parseInt(document.getElementById('valiosaTecB').value);
    raraTecB = parseInt(document.getElementById('raraTecB').value);
    inimitableTecB = parseInt(document.getElementById('inimitableTecB').value);

    valiosaTecC = parseInt(document.getElementById('valiosaTecC').value);
    raraTecC = parseInt(document.getElementById('raraTecC').value);
    inimitableTecC = parseInt(document.getElementById('inimitableTecC').value);

    // Actualiza los datos del gráfico
    let puntuacionesTecnologias = [
        {
            label: 'Tecnología 1',
            backgroundColor: 'rgba(255, 99, 132, 0.6',
            data: [
                {
                    x: valiosaTecA,
                    y: raraTecA,
                    r: inimitableTecA * 10,
                },
            ],
        },
        {
            label: 'Tecnología 2',
            backgroundColor: 'rgba(54, 162, 235, 0.6',
            data: [
                {
                    x: valiosaTecB,
                    y: raraTecB,
                    r: inimitableTecB * 10,
                },
            ],
        },
        {
            label: 'Tecnología 3',
            backgroundColor: 'rgba(75, 192, 192, 0.6',
            data: [
                {
                    x: valiosaTecC,
                    y: raraTecC,
                    r: inimitableTecC * 10,
                },
            ],
        },
    ];

    bubbleChart.data.datasets = puntuacionesTecnologias;
    bubbleChart.update();


    // Después de actualizar el gráfico en la función actualizarGrafico

    mensaje.classList.remove("d-none")

    // Realiza un seguimiento de las puntuaciones y tecnologías
    const tecnologias = [
        { nombre: 'Tecnología 1', puntuacion: valiosaTecA + raraTecA + inimitableTecA },
        { nombre: 'Tecnología 2', puntuacion: valiosaTecB + raraTecB + inimitableTecB },
        { nombre: 'Tecnología 3', puntuacion: valiosaTecC + raraTecC + inimitableTecC },
    ];

    // Encuentra la puntuación máxima
    const puntuacionMaxima = Math.max(...tecnologias.map((tecnologia) => tecnologia.puntuacion));

    // Encuentra todas las tecnologías con la puntuación máxima
    const mejoresTecnologias = tecnologias.filter((tecnologia) => tecnologia.puntuacion === puntuacionMaxima);

    if (mejoresTecnologias.length === 1) {
        // Si solo hay una mejor tecnología

        mensaje.textContent= (`Tras evaluar las puntuaciones de las tecnologías, hemos determinado que la mejor opción es ${mejoresTecnologias[0].nombre}. Esta tecnología ha demostrado ser sobresaliente en diversos aspectos, incluyendo su valiosa contribución, su rareza en el mercado y su característica inimitabilidad. De acuerdo con nuestras métricas de evaluación`);
    } else {
        // Si hay múltiples tecnologías empatadas
        mensaje.textContent=('Tecnologías empatadas:');
        
    }



}

// Event listener para el botón de evaluación
let boton = document.getElementById('btnevaluartecnologia');
boton.addEventListener('click', function () {
    actualizarGrafico();
});
