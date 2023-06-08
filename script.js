const textoArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

//Botón Encriptar
function botonEncriptador(){
    if (textoArea.value != 0) {
        const textoEncriptado = encriptar(textoArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"; //oculta la imagen
        textoArea.value = ""; //para limpiar el campo
    }     
}
//Función Encriptar
function encriptar(cadenaEncripta){
    let matrizLlave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; //matriz
    cadenaEncripta = cadenaEncripta.toLowerCase(); //Convierte las letras en minusculas

    for(let i = 0; i < matrizLlave.length; i++){
        if(cadenaEncripta.includes(matrizLlave[i][0])){
            cadenaEncripta = cadenaEncripta.replaceAll(matrizLlave[i][0], matrizLlave[i][1]); //sustituye toda la cadena de caracteres
        }
    }
    return cadenaEncripta;
}

//Botón Desencriptar
function botonDesencriptador(){
    const textoEncriptado = desencriptar(textoArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"; //oculta la imagen
    textoArea.value = "";
}
//Función Desencriptar
function desencriptar(cadenaDesencripta){
    let matrizLlave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaDesencripta = cadenaDesencripta.toLowerCase();

    for(let i = 0; i < matrizLlave.length; i++){
        if(cadenaDesencripta.includes(matrizLlave[i][1])){
            cadenaDesencripta = cadenaDesencripta.replaceAll(matrizLlave[i][1], matrizLlave[i][0]);
        }
    }
    return cadenaDesencripta;
}

//Botón y Función de Copiar
function botonCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}