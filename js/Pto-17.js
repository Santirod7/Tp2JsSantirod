/*17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.*/
let posicion
let contador = 0
const texto = prompt("Ingrese un texto de 100 caracteres");
    if (texto.length >= 1 && texto.length <= 100) {
        for (let index = 0; index < texto.length; index++) {
            vocal = texto.charAt(index) 
           if(vocal== "a" && contador == index || vocal =="e" && contador == index || vocal =="i" && contador == index || vocal == "o" && contador == index || vocal == "u" && contador == index){
            posicion = index + 1       
            contador --;
            }
            contador ++;
        }
        document.write(`<p>La posicion de la primera vocal del texto es: ${posicion}</p> <br>`)
        document.write(`<p>texto ingresado: ${texto}</p>`)
    } else {
        alert("Error! ingrese menos caracteres");
    }
