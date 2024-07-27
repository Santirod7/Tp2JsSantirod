/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/
for(let contador = 1; contador <= 30 ; contador++){
    for (let repeticiones = 0; repeticiones < contador; repeticiones++) {
        document.write(contador);
    }
    document.write("<br>")
}

