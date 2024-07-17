const botonEncriptar = document.getElementById("encriptar");
const articulo = document.querySelector(".vision");
const output = document.querySelector(".output");
const botonCopiar = document.getElementById("copiar");
const seccionResultado = document.querySelector(".result");


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
const encriptar = ()=>{
    let mensajeEntrante = document.getElementById("input").value;
}
botonEncriptar.setAttribute("onclick","encriptar()");
