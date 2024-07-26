const edad = parseInt(prompt("Ingrese su edad"));

if (edad > 0 && edad < 120 ) {
    if(edad > 18){
        document.write(`<p> Tu edad es ${edad}, puedes conducir </p>`) 
    } else{
        document.write(`<p> Tu edad es ${edad}, no puedes conducir </p>`) 
    }
    } else{
        document.write(`<p> Ingrese una edad válida </p>`) 
    }