let texto = prompt("Ingrese un texto de 20 caracteres");
    if (texto.length >= 1 && texto.length <= 20) {
        for (let i = 0; i < texto.length; i++) {
            document.write(`${texto.charAt(i)}`);
            if(i < texto.length - 1){
                document.write(`-`);
            }
        }
    } else {
        alert("Error! ingrese menos caracteres");
    }
