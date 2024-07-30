let numrep = parseInt(prompt("Ingrese el numero de repeticiones entre 1 y 50"));
//verificar si se ingreso un numero
if (!isNaN(numrep)) {
    //verificar si el numero esta entre 1 y 50
    if (numrep >= 1 && numrep <= 50) {
        for (let i = 0; i <= numrep; i++) {
            for (let rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else {
    alert("valor erroneo");
}