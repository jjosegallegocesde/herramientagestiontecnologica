let filaPregunta1 = document.getElementById("filapregunta1")
let pregunta1 = document.getElementById("pregunta1")

let filaPregunta2 = document.getElementById("filapregunta2")
let pregunta2 = document.getElementById("pregunta2")

let filaPregunta3 = document.getElementById("filapregunta3")
let pregunta3 = document.getElementById("pregunta3")

let filaPregunta4 = document.getElementById("filapregunta4")
let pregunta4 = document.getElementById("pregunta4")

let filaPregunta5 = document.getElementById("filapregunta5")
let pregunta5 = document.getElementById("pregunta5")

let filaPregunta6 = document.getElementById("filapregunta6")
let pregunta6 = document.getElementById("pregunta6")

let filaPregunta7 = document.getElementById("filapregunta7")
let pregunta7 = document.getElementById("pregunta7")

let filaPregunta8 = document.getElementById("filapregunta8")
let pregunta8 = document.getElementById("pregunta8")

let filaPregunta9 = document.getElementById("filapregunta9")
let pregunta9 = document.getElementById("pregunta9")


let filaresultado = document.getElementById("resultadofinaladqisicion")
let alertaadquisicion = document.getElementById("resultadoadquisicion")
let opcionelegida = document.getElementById("opcionelegida")


let reinicio=document.getElementById("iniciofiltro")
reinicio.addEventListener("click",function(){
    location.reload();
})


pregunta1.addEventListener("change", function () {
    if (pregunta1.value == "si") {
        filaPregunta2.scrollIntoView({ behavior: "smooth" });
        filaPregunta2.classList.remove("text-muted")
        filaPregunta2.classList.add("text-primary")
        pregunta2.disabled = false;
        pregunta2.addEventListener("change", function () {
            if (pregunta2.value == "corto") {
                filaPregunta4.scrollIntoView({ behavior: "smooth" });
                filaPregunta4.classList.remove("text-muted")
                filaPregunta4.classList.add("text-primary")
                pregunta4.disabled = false;
                pregunta4.addEventListener("change", function () {
                    if (pregunta4.value == "propiedad") {
                        filaPregunta8.scrollIntoView({ behavior: "smooth" });
                        filaPregunta8.classList.remove("text-muted")
                        filaPregunta8.classList.add("text-primary")
                        pregunta8.disabled = false;
                        pregunta8.addEventListener("change", function () {
                            if (pregunta8.value == "si") {
                                filaPregunta9.scrollIntoView({ behavior: "smooth" });
                                filaPregunta9.classList.remove("text-muted")
                                filaPregunta9.classList.add("text-primary")
                                pregunta9.disabled = false;
                                pregunta9.addEventListener("change", function () {
                                    if (pregunta9.value == "si") {
                                        opcionelegida.textContent = "DESARROLLO COLABORATIVO"
                                        alertaadquisicion.textContent = "Implica la cooperación entre dos o más organizaciones, entidades o partes interesadas para desarrollar conjuntamente tecnología, sistemas o recursos tecnológicos."
                                        filaresultado.classList.remove("d-none")
                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        opcionelegida.textContent = "ADQUISIÓN INTERNA"
                                        alertaadquisicion.textContent = "Se refiere a la estrategia en la que una organización obtiene tecnología, sistemas o recursos tecnológicos a través de su propio desarrollo interno o mediante la utilización de su propio personal y capacidades."
                                        filaresultado.classList.remove("d-none")
                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                    }
                                })
                            } else {
                                filaPregunta5.scrollIntoView({ behavior: "smooth" });
                                filaPregunta5.classList.remove("text-muted")
                                filaPregunta5.classList.add("text-primary")
                                pregunta5.disabled = false;
                                pregunta5.addEventListener("change", function () {
                                    if (pregunta5.value == "alto") {
                                        opcionelegida.textContent = "DESARROLLO COLABORATIVO"
                                        alertaadquisicion.textContent = "Implica la cooperación entre dos o más organizaciones, entidades o partes interesadas para desarrollar conjuntamente tecnología, sistemas o recursos tecnológicos."
                                        filaresultado.classList.remove("d-none")
                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        opcionelegida.textContent = "SUBCONTRATACIÓN"
                                        alertaadquisicion.textContent = "Se refiere a la práctica de contratar a terceros, generalmente empresas especializadas, para realizar ciertas tareas o proporcionar servicios tecnológicos en lugar de realizarlos internamente."
                                        filaresultado.classList.remove("d-none")
                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                    }
                                })
                            }
                        })
                    } else {
                        filaPregunta3.scrollIntoView({ behavior: "smooth" });
                        filaPregunta3.classList.remove("text-muted")
                        filaPregunta3.classList.add("text-primary")
                        pregunta3.disabled = false;
                        pregunta3.addEventListener("change", function () {
                            if (pregunta3.value == "si") {
                                filaPregunta5.scrollIntoView({ behavior: "smooth" });
                                filaPregunta5.classList.remove("text-muted")
                                filaPregunta5.classList.add("text-primary")
                                pregunta5.disabled = false;
                                pregunta5.addEventListener("change", function () {
                                    if (pregunta5.value == "alto") {
                                        filaPregunta6.scrollIntoView({ behavior: "smooth" });
                                        filaPregunta6.classList.remove("text-muted")
                                        filaPregunta6.classList.add("text-primary")
                                        pregunta6.disabled = false;
                                        pregunta6.addEventListener("change", function () {
                                            if (pregunta6.value == "si") {
                                                opcionelegida.textContent = "ADQUISICIÓN DE LA EMPRESA PROPETIARIA"
                                                alertaadquisicion.textContent = "Se refiere a la estrategia en la que una organización compra o toma el control de otra empresa con el propósito de obtener sus recursos tecnológicos, capacidades, productos o servicios"
                                                filaresultado.classList.remove("d-none")
                                                filaresultado.scrollIntoView({ behavior: "smooth" });

                                            } else {
                                                filaPregunta7.scrollIntoView({ behavior: "smooth" });
                                                filaPregunta7.classList.remove("text-muted")
                                                filaPregunta7.classList.add("text-primary")
                                                pregunta7.disabled = false;
                                                pregunta7.addEventListener("change", function () {
                                                    if (pregunta7.value == "si") {
                                                        opcionelegida.textContent = "FUSIONAMIENTO"
                                                        alertaadquisicion.textContent = "Se refiere a la estrategia en la que dos o más organizaciones se combinan para unir sus recursos, tecnologías y capacidades en busca de objetivos comunes."
                                                        filaresultado.classList.remove("d-none")
                                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                                    } else {
                                                        opcionelegida.textContent = "LICENCIAMIENTO"
                                                        alertaadquisicion.textContent = "Se refiere a la estrategia en la que una organización obtiene el derecho de usar, distribuir o acceder a tecnología, software, propiedad intelectual u otros activos tecnológicos de una empresa o entidad propietaria a través de un acuerdo de licencia. "
                                                        filaresultado.classList.remove("d-none")
                                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                                    }
                                                })
                                            }
                                        })

                                    } else {
                                        opcionelegida.textContent = "LICENCIAMIENTO"
                                        alertaadquisicion.textContent = "Se refiere a la estrategia en la que una organización obtiene el derecho de usar, distribuir o acceder a tecnología, software, propiedad intelectual u otros activos tecnológicos de una empresa o entidad propietaria a través de un acuerdo de licencia. "
                                        filaresultado.classList.remove("d-none")
                                        filaresultado.scrollIntoView({ behavior: "smooth" });
                                    }
                                })
                            } else {
                                opcionelegida.textContent = "COMPRA"
                                alertaadquisicion.textContent = "Se refiere a la adquisición de tecnología, sistemas o recursos tecnológicos directamente del mercado, ya sea a través de la compra de productos o servicios de empresas proveedoras."
                                filaresultado.classList.remove("d-none")
                                filaresultado.scrollIntoView({ behavior: "smooth" });
                            }
                        })
                    }
                })

            } else {
                //largo plazo
                filaPregunta3.scrollIntoView({ behavior: "smooth" });
                filaPregunta3.classList.remove("text-muted")
                filaPregunta3.classList.add("text-primary")
                pregunta3.disabled = false;
                pregunta3.addEventListener("change", function () {
                    if (pregunta3.value == "si") {
                        filaPregunta5.scrollIntoView({ behavior: "smooth" });
                        filaPregunta5.classList.remove("text-muted")
                        filaPregunta5.classList.add("text-primary")
                        pregunta5.disabled = false;
                        pregunta5.addEventListener("change", function () {
                            if (pregunta5.value == "alto") {
                                opcionelegida.textContent = "DESARROLLO COLABORATIVO"
                                alertaadquisicion.textContent = "Implica la cooperación entre dos o más organizaciones, entidades o partes interesadas para desarrollar conjuntamente tecnología, sistemas o recursos tecnológicos."
                                filaresultado.classList.remove("d-none")
                                filaresultado.scrollIntoView({ behavior: "smooth" });
                            } else {
                                opcionelegida.textContent = "SUBCONTRATACIÓN"
                                alertaadquisicion.textContent = "Se refiere a la práctica de contratar a terceros, generalmente empresas especializadas, para realizar ciertas tareas o proporcionar servicios tecnológicos en lugar de realizarlos internamente."
                                filaresultado.classList.remove("d-none")
                                filaresultado.scrollIntoView({ behavior: "smooth" });
                            }
                        })

                    } else {
                        opcionelegida.textContent = "COMPRA"
                        alertaadquisicion.textContent = "Se refiere a la adquisición de tecnología, sistemas o recursos tecnológicos directamente del mercado, ya sea a través de la compra de productos o servicios de empresas proveedoras."
                        filaresultado.classList.remove("d-none")
                        filaresultado.scrollIntoView({ behavior: "smooth" });
                    }
                })
            }
        })

    } else {
        filaPregunta8.scrollIntoView({ behavior: "smooth" });
        filaPregunta8.classList.remove("text-muted")
        filaPregunta8.classList.add("text-primary")
        pregunta8.disabled = false;
        pregunta8.addEventListener("change", function () {
            if (pregunta8.value == "si") {
                filaPregunta9.scrollIntoView({ behavior: "smooth" });
                filaPregunta9.classList.remove("text-muted")
                filaPregunta9.classList.add("text-primary")
                pregunta9.disabled = false;
                pregunta9.addEventListener("change", function () {
                    if (pregunta9.value == "si") {
                        opcionelegida.textContent = "DESARROLLO COLABORATIVO"
                        alertaadquisicion.textContent = "Implica la cooperación entre dos o más organizaciones, entidades o partes interesadas para desarrollar conjuntamente tecnología, sistemas o recursos tecnológicos."
                        filaresultado.classList.remove("d-none")
                        filaresultado.scrollIntoView({ behavior: "smooth" });
                    } else {
                        opcionelegida.textContent = "ADQUISIÓN INTERNA"
                        alertaadquisicion.textContent = "Se refiere a la estrategia en la que una organización obtiene tecnología, sistemas o recursos tecnológicos a través de su propio desarrollo interno o mediante la utilización de su propio personal y capacidades"
                        filaresultado.classList.remove("d-none")
                        filaresultado.scrollIntoView({ behavior: "smooth" });
                    }
                })
            } else {
                filaPregunta5.scrollIntoView({ behavior: "smooth" });
                filaPregunta5.classList.remove("text-muted")
                filaPregunta5.classList.add("text-primary")
                pregunta5.disabled = false;
                pregunta5.addEventListener("change", function () {
                    if (pregunta5.value == "alto") {
                        opcionelegida.textContent = "DESARROLLO COLABORATIVO"
                        alertaadquisicion.textContent = "Implica la cooperación entre dos o más organizaciones, entidades o partes interesadas para desarrollar conjuntamente tecnología, sistemas o recursos tecnológicos."
                        filaresultado.classList.remove("d-none")
                        filaresultado.scrollIntoView({ behavior: "smooth" });
                    } else {
                        opcionelegida.textContent = "SUBCONTRATACIÓN"
                        alertaadquisicion.textContent = "Se refiere a la práctica de contratar a terceros, generalmente empresas especializadas, para realizar ciertas tareas o proporcionar servicios tecnológicos en lugar de realizarlos internamente."
                        filaresultado.classList.remove("d-none")
                        filaresultado.scrollIntoView({ behavior: "smooth" });
                    }
                })
            }
        })
    }
})

