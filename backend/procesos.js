const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const articulo = document.querySelector(".vision");
const output = document.querySelector(".output");
const botonCopiar = document.getElementById("copiar");
const seccionResultado = document.querySelector(".result");
const toggle = document.getElementById('toggle');
const contenedorToggle = document.querySelector(".contenedor-toggle");
const theme = document.querySelector(".theme");
const input = document.getElementById("input");
let isDark = false;

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
    articulo.style.display="none"
    output.style.display="block";
    botonCopiar.style.display="block";
    if(screen.width>1000){
        seccionResultado.setAttribute("style","justify-content:space-between; padding:2%");
    }else{
        seccionResultado.setAttribute("style","justify-content: space-between");
    }
    if(isDark){
        seccionResultado.style.backgroundColor= "var(--dark-2)";
        botonCopiar.style.backgroundColor=" var(--dark-3)";
        botonCopiar.style.color="white";
    }
}

const visualizarModoInicial = () =>{
    seccionResultado.setAttribute("style","padding:5%");
    articulo.setAttribute("style","display:flex;flex-direction:column; justify-content:center");
    output.style.display= "none";
    botonCopiar.style.display="none";
    if(isDark){
        seccionResultado.style.backgroundColor= "var(--dark-2)";
        botonCopiar.style.backgroundColor=" var(--dark-3)";
        botonCopiar.style.color="white";
    }
}
const encriptar = ()=>{
    let mensajeEntrante = input.value.toLowerCase();
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
        output.value = mensajeResultante;
        visibilizarRespuesta();
    }else{
        visualizarModoInicial();
    }
}

const desencriptar = ()=>{
    let mensajeEntrante = input.value.toLowerCase();
    if(mensajeEntrante.length >0){
        let respuesta = mensajeEntrante.replaceAll('enter','e');
        respuesta = respuesta.replaceAll("ai","a");
        respuesta = respuesta.replaceAll("ober","o");
        respuesta = respuesta.replaceAll("ufat","u");
        respuesta = respuesta.replaceAll("imes","i");
        output.value = respuesta;
        visibilizarRespuesta();
    }else{
        visualizarModoInicial();
    }
}

const darkMode = ()=>{
    const padreWidth = contenedorToggle.clientWidth;
    const toggleWidth = toggle.clientWidth;
    const maxTranslate = padreWidth - toggleWidth - 10;
    toggle.style.translate = `${maxTranslate}px`;
    contenedorToggle.style.border = "1px solid yellow"
    isDark = true;

    // asignar colores oscuros

    document.body.style.backgroundColor= "var(--dark-1)";
    input.style.color = "white";
    botonEncriptar.setAttribute("style","background-color:var(--dark-blur);color:white");
    botonDesencriptar.setAttribute("style","background-color:var(--dark-blue-gray);color:white");
    seccionResultado.style.backgroundColor= "var(--dark-2)";
    botonCopiar.style.backgroundColor="var(--dark-3)";
    document.getElementById("subtitulo").style.color="white";
    output.style.color="white";
}

const lightMode = ()=>{
    toggle.style.translate = '0px';
    contenedorToggle.style.border = "1px solid black"
    isDark = false;

    // asignar colores claros
    document.body.style.backgroundColor= "var(--light-gris)";
    botonEncriptar.setAttribute("style","background-color:var(--light-brown); color:black");
    botonDesencriptar.setAttribute("style","background-color:var(--light-rosa-opaque); color:black");
    // botonCopiar.setAttribute("style","background-color:var(--light-gris); color: black");  
    botonCopiar.style.backgroundColor="var(--light-gris)";
    botonCopiar.style.color="black"; 
    seccionResultado.style.backgroundColor= "var(--light-opaque)";
    document.getElementById("subtitulo").style.color="black";
    input.style.color="black";
    output.style.color="var(--gray-model)";
}

const iconoSol = ()=>{
    theme.setAttribute("src","./assets/sol.png");
}

const iconoLuna = ()=>{
    theme.setAttribute("src","./assets/luna.png");
}

const themeMode = ()=>{
    if(isDark){
        lightMode();
        // poner icono de luna
        iconoLuna();
    }else{
        darkMode();
        // poner icono de sol
        iconoSol();
    }
}

const copiar = ()=>{
    navigator.clipboard.writeText(output.value);
    alert("texto copiado");
}

botonEncriptar.addEventListener('click',encriptar);
botonDesencriptar.addEventListener("click",desencriptar);
toggle.addEventListener('click',themeMode);
botonCopiar.addEventListener('click',copiar);