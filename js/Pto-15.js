let texto = prompt("Ingrese un texto de 20 caracteres");
let contador = 0;
let vocal;
    if (texto.length >= 1 && texto.length <= 20) {
        for (let index = 0; index < texto.length; index++) {
            vocal = texto.charAt(index) 
            if(vocal== "a" || vocal =="e" || vocal =="i" || vocal == "o" || vocal == "u"){
                contador++
            }
        }
        document.write(`El numero de vocales es: ${contador}`)
    } else {
        alert("Error! ingrese menos caracteres");
    }