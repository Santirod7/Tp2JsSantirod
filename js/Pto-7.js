const numero = parseInt(prompt("Ingrese un numero mayor a 0 y menor a 50"));

if(numero < 50 && numero > 0) {
for(let contador = numero; contador >= 1 ; contador--){
    for (let repeticiones = 0; repeticiones < contador; repeticiones++) {
        document.write(contador);
    }
    document.write("<br>")
}
} else {
document.write("Dato ingresado no valido")
}