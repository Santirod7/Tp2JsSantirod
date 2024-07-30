/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp.*/
let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));
let nombre2 = prompt("Ingrese el segundo nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));
let nombre3 = prompt("Ingrese el tercer nombre");
let edad3 = parseInt(prompt("Ingrese su edad"));


if (edad1 || edad2 || (edad3 >= 1 && edad1) || edad2 || edad3 <= 150) {
  Math.max(edad1, edad2, edad3);
  switch (Math.max(edad1, edad2, edad3)) {
    case edad1:
      document.write(`El/la mayor es ${nombre1} con ${edad1} años`);
      break;
    case edad2:
      document.write(`El/la mayor es ${nombre2} con ${edad2} años`);
      break;
    case edad3:
      document.write(`El/la mayor es ${nombre3} con ${edad3} años`);
      break;
    default:
      document.write(`Error`);
  }
} else {
  alert("El número introducido no es válido");
}
