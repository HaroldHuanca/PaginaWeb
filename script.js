function mensaje(argument){

    alert("Hola Mundo");
}
function agregarContenido(){
    let dato = document.getElementById("contenido");
    dato.innerHTML = "Hola este es un <b>nuevo</b> mensaje";
}
function mostrarImagen(){
    let img = document.getElementById("imagen");
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
}