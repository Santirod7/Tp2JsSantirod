let suma = 0
do{
    let numero = prompt("Ingrese un numero");

    if (numero == parseInt(numero)){
        numero = parseInt(numero)
        suma = suma + numero
    } else {
        alert("El dato ingresado no es un numero")
    }
} while (confirm("¿ingresar nuevo numero?"))
    document.write(`La suma es: ${suma} `)