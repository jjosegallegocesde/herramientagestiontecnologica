let opcionproteccion=document.getElementById("categoriatecnologiaproteger")
let textoUno=document.getElementById("metodoproteccionrecomendado")
let textoDos=document.getElementById("recomendaciononlineproteccion")

opcionproteccion.addEventListener("change", function(){
    
    let opcion=opcionproteccion.value

    if(opcion==1){
        textoUno.textContent="Secreto industrial";
        textoDos.textContent="Encuentra recomendaciones online sobre tu secreto industrial"
        textoDos.setAttribute("href","https://www.sic.gov.co/propiedad-Industrial")
        textoDos.setAttribute("target","_Blank")
       
    }else if(opcion==2){
        textoUno.textContent="Patente";
        textoDos.textContent="Encuentra recomendaciones online sobre tu patente"
        textoDos.setAttribute("href","https://www.sic.gov.co/node/47")
        textoDos.setAttribute("target","_Blank")
    }else if(opcion==3){
        textoUno.textContent="Patente";
        textoDos.textContent="Encuentra recomendaciones online sobre tu patente"
        textoDos.setAttribute("href","https://www.sic.gov.co/node/47")
        textoDos.setAttribute("target","_Blank")
    }else if(opcion==4){
        textoUno.textContent="Copyright";
        textoDos.textContent="Encuentra recomendaciones online sobre tu obra"
        textoDos.setAttribute("href","http://derechodeautor.gov.co:8080/registro-de-obras1")
        textoDos.setAttribute("target","_Blank")
    }else if(opcion==5){
        textoUno.textContent="TM";
        textoDos.textContent="Encuentra recomendaciones online sobre el registro tu marca"
        textoDos.setAttribute("href","https://www.sic.gov.co/tema/propiedad-Industrial/pasos-para-solicitar-el-registro-de-una-marca")
        textoDos.setAttribute("target","_Blank")
    }else if(opcion==6){
        textoUno.textContent="Dominio de internet";
        textoDos.textContent="Encuentra recomendaciones online sobre tu dominio"
        textoDos.setAttribute("href","https://www.icann.org/resources/pages/about-domain-names-2018-09-12-es")
        textoDos.setAttribute("target","_Blank")
    }

})