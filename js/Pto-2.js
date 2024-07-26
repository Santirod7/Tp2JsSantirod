const nota = parseInt(prompt("Ingrese nota numerica"));

if (nota >= 0 && nota <= 10 ) {
    if(nota >= 0 && nota <= 2){
        alert(`Tu nota es ${nota}, es decir, muy deficiente`) 
    }  else if (nota > 2 && nota <= 4){
        alert(`Tu nota es ${nota}, es decir, insuficiente`) 
    }  else if (nota > 4 && nota < 7){
        alert(`Tu nota es ${nota}, es decir, suficiente`) 
    } 
    else if (nota == 7){
        alert(`Tu nota es ${nota}, es decir, bien`) 
    } else if (nota > 7 && nota <= 9){
        alert(`Tu nota es ${nota}, es decir, notable`) 
    } else if (nota == 10){
        alert(`Tu nota es ${nota}, es decir, sobresaliente`) 
    }
} else if (nota > 10 || nota < 0 ){
    document.write(`<p> número erroneo </p>`)  
} else {
    document.write(`<p> Ingrese un número válido </p>`)
}