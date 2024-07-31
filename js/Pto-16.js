const texto = prompt("Ingrese un texto de 50 caracteres");
    if (texto.length >= 1 && texto.length <= 50) {
        for (let i = texto.length; i >= 0; i--) {
        document.write(texto.charAt(i))
        }
    } else {
        alert("Error! ingrese menos caracteres");
    }