/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
let filas = parseInt(prompt("Ingrese numero de filas"));
let columnas = parseInt(prompt("Ingrese numero de columnas"));
//verificar si se ingreso un numero
let celdas = filas * columnas
        document.write("<table border>")
        document.write("<tbody>")
        for (let i = 0; i <= filas; i++) {
            document.write("<tr>")
            for (let col = 0; col <= columnas; col++) {
                if (celdas>=0){
                    document.write(`<td> ${celdas} </td>`)
                    celdas--;
                }
            }
            document.write("</tr>")
        }
        document.write("<tbody>")
        document.write("</table>")
