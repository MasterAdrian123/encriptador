const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const articulo = document.querySelector(".vision");
const output = document.querySelector(".output");
const botonCopiar = document.getElementById("copiar");
const seccionResultado = document.querySelector(".result");

// todos los caracteres especiales que no quiero que se inserten en el text area
const textArea = document.getElementById("input");
const regex = /^[^'"\\\/<>=*@&]*$/;

function alertarCaracteresEspeciales(ev){
    if (!regex.test(ev.target.value)) {
        alert("NO SE PERMITEN CARACTERES ESPECIALES");
        textArea.value="";
    }
}
textArea.addEventListener('input', alertarCaracteresEspeciales);


const visibilizarRespuesta = ()=>{
    articulo.setAttribute("style","display:none");
    output.setAttribute("style","display:block");
    botonCopiar.setAttribute("style","display:block");
    if(screen.width>1000){
        seccionResultado.setAttribute("style","justify-content :space-between; padding:2%");
    }else{
        seccionResultado.setAttribute("style","justify-content :space-between");
    }
}

const visualizarModoInicial = () =>{
    articulo.style.display ="";
    seccionResultado.setAttribute("style","justify-content :space-between;padding:5%");
    output.setAttribute("style","display:none");
    botonCopiar.setAttribute("style","display:none");
}
const encriptar = ()=>{
    let mensajeEntrante = document.getElementById("input").value.toLowerCase();
    if(mensajeEntrante.length > 0){
        let mensajeResultante ="";
        for(let i of mensajeEntrante){
            if(i==='e'){
                i = 'enter';
            }else if(i==='i'){
                i = 'imes';
            }else if(i==='a'){
                i = 'ai';
            }else if(i==='o'){
                i = 'ober'
            }else if(i==='u'){
                i = 'ufat';
            }
            mensajeResultante += i;
        }
        output.textContent = mensajeResultante;
        visibilizarRespuesta();
    }else{
        visualizarModoInicial();
    }
}

const desencriptar = ()=>{
    let mensajeEntrante = document.getElementById("input").value.toLowerCase();
    if(mensajeEntrante.length >0){
        let respuesta = mensajeEntrante.replaceAll('enter','e');
        respuesta = respuesta.replaceAll("ai","a");
        respuesta = respuesta.replaceAll("ober","o");
        respuesta = respuesta.replaceAll("ufat","u");
        respuesta = respuesta.replaceAll("imes","i");
        output.textContent = respuesta;
        visibilizarRespuesta();
    }else{
        visualizarModoInicial();
    }
}
botonEncriptar.setAttribute("onclick","encriptar()");
botonDesencriptar.setAttribute("onclick","desencriptar()");