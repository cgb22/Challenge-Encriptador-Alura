const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const icono = document.querySelector(".contenedor-icono");
const titulo3 = document.querySelector(".contenedor-titulo3");
const parrafo = document.querySelector(".contenedor-ingresa");
const textoEncriptado = document.querySelector(".textoEncriptado");
const contmensaje = document.querySelector(".contenedor-mensaje");
const botCopiar = document.querySelector(".btn-copiar");

function encriptarTexto(texto){
    let encriptacion = texto
    let resultado = "";

    for (let i = 0; i< encriptacion.length; i++) {
        if(encriptacion [i] == "a") {
            resultado = resultado + "ai"
        }
        else if(encriptacion[i] == "e") {
            resultado = resultado + "enter"
        }
        else if(encriptacion[i] == "i") {
            resultado = resultado + "imes"
        }
        else if(encriptacion[i] == "o") {
            resultado = resultado + "ober"
        }
        else if(encriptacion[i] == "u") {
            resultado = resultado + "ufat"
        }
        else {
            resultado = resultado + encriptacion[i];
            
        }

    }
    return resultado;
}


    function desencriptarTexto (texto){
        let encriptacion = texto
        let resultado = "";

    for (let i = 0; i < encriptacion.length; i++) {
        if(encriptacion [i] == "a") {
            resultado = resultado + "a"
            i = i + 1;
        }
        else if(encriptacion[i] == "e") {
            resultado = resultado + "e"
            i = i + 4;
        }
        else if(encriptacion[i] == "i") {
            resultado = resultado + "i"
            i = i + 3;
        }
        else if(encriptacion[i] == "o") {
            resultado = resultado + "o"
            i = i + 3;
        }
        else if(encriptacion[i] == "u") {
            resultado = resultado + "u"
            i = i + 3;
        }
        else {
            resultado = resultado + encriptacion[i];
        }
    }
    return resultado;
    }

    function recuperarTexto(){
    let texto = document.querySelector(".texto-area");
    return texto.value.toLowerCase()
    }

    function encriptar() {
        document.getElementById("iconoarcher").style.display = "none"
        document.getElementById("titulo-3").style.display = "none"
        document.getElementById("parra").style.display = "none"
        let cuadroTexto = recuperarTexto()
        textoEncriptado.textContent = encriptarTexto(cuadroTexto)
        document.getElementById("listomensaje").style.display = "block"
        document.getElementById("copiar").style.display = "block"
        document.getElementById("resultadoencript").style.display = "block"
    }
    
    function desencriptar(){
        document.getElementById("iconoarcher").style.display = "none"
        document.getElementById("titulo-3").style.display = "none"
        document.getElementById("parra").style.display = "none"
        let cuadroTexto = recuperarTexto()
        textoEncriptado.textContent = desencriptarTexto(cuadroTexto)
        document.getElementById("listomensaje").style.display = "block"
        document.getElementById("copiar").style.display = "block"
        document.getElementById("resultadoencript").style.display = "block"
        }

    function copiarAlPortapapeles () {
        const BotonCopiar = document.querySelector(".btn-copiar");
        BotonCopiar.addEventListener("click", copiar = () => {
        let texto = textoEncriptado.textContent;
        navigator.clipboard.writeText(texto);
        document.getElementById("listomensaje").style.display = "none"
        document.getElementById("copiar").style.display = "none"
        document.getElementById("resultadoencript").style.display = "none"
        document.getElementById("iconoarcher").style.display = "block"
        document.getElementById("titulo-3").style.display = "block"
        document.getElementById("parra").style.display = "block"
        alert ("Mensaje copiado al portapapeles exitosamente");
        document.querySelector(".texto-area").focus();
        }) 
        }

        copiarAlPortapapeles()
        botonEncriptar.onclick = encriptar;
        botonDesencriptar.onclick = desencriptar;
