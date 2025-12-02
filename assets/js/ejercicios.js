/* ========================Ejercicio 1========================*/
function agregarBorde() {

    // Obtener la referencia al elemento de la imagen "imagen"
    const imageElement = document.getElementById('imagen');

    // Verificar si el ancho del borde es 2px.
    if (imageElement.style.borderWidth === '2px') {

        // Si tiene borde (2px), quitarlo (0px)
        imageElement.style.borderWidth = '0px';

    } else {

        // Si no tiene borde
        imageElement.style.borderWidth = '2px';

        // Asegurar que el borde sea rojo y sólido.
        imageElement.style.borderColor = 'red';
        imageElement.style.borderStyle = 'solid';
    }
}
/* ========================Ejercicio 2========================*/
function verificar() {
    // obtener valores
    let s1 = Number(document.getElementById("sticker1").value);
    let s2 = Number(document.getElementById("sticker2").value);
    let s3 = Number(document.getElementById("sticker3").value);
    let total = s1 + s2 + s3;
    let resultado = document.getElementById("resultado");
    // verifica el total del contenido 
    if (total <= 10) {
        // si tiene menos o igual a 10 muestra la cantidad de stickers que lleva
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        // aqui muestra que lleva muchos stikers
        resultado.textContent = "Llevas demasiados stickers";
    }

}

document.getElementById("verificar").addEventListener("click", verificar);


/* ========================Ejercicio 3========================*/
function pass() {
    // obtener valores
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let numero3 = document.getElementById("num3").value;

    let password = numero1 + numero2 + numero3;

    let resultado = document.getElementById("mostrar");

    if (password === "911") {
        resultado.textContent = "password 1 correcto";
    } else if (password === "714") {
        resultado.textContent = "password 2 correcto";
    } else {
        resultado.textContent = "password incorrecto";
    }
}
