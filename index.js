/*   Encriptar el texto   */
function encriptar() {
    var texto = document.getElementById("entrada-texto").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("texto-encriptado").value = texto;
}
var boton = document.getElementById("encriptar-texto");
boton.onclick = function () {    
    if(document.getElementById("entrada-texto").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se pueden utilizar letras minusculas, los caracteres especiales y mayusculas no son permitidas.")
}};

/*   Desencriptar el texto   */
function desencriptar() {
    var texto = document.querySelector("#entrada-texto").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("texto-encriptado").value = texto;
};
var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("entrada-texto").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
}};

/*   Copiar el texto   */
function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("texto-encriptado").value
)};
document.querySelector("#copiar-texto").addEventListener("click", copiar);
