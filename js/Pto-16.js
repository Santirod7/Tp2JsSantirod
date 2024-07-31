/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */
const texto = prompt("Ingrese un texto de 50 caracteres");
    if (texto.length >= 1 && texto.length <= 50) {
        for (let i = texto.length; i >= 0; i--) {
        document.write(texto.charAt(i))
        }
    } else {
        alert("Error! ingrese menos caracteres");
    }