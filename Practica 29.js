function jugar() {

    var vocales = ["A", "E", "I", "O", "U"];
    var nombres = ["Ana", "Ernesto", "Isabel", "Oscar", "Uriel"];
    var i = 0;
    var intentos;
    var nombre;

    alert("Adivina el nombre segun la vocal");

    for (; i < vocales.length; i++) {

        intentos = 0;

        for (;;) {
            nombre = prompt("Vocal: " + vocales[i] + "\nIntento " + (intentos + 1) + " de 5\n" + "Escribe un nombre que empiece con esa vocal" );

            intentos++;

            if (nombres[i] === nombre) {
                alert(" Correcto, pasas a la siguiente vocal");
                break; 
            }

            if (intentos == 5) {
                alert("Perdiste el juego vuelve a empezar de nuevo");
                return; 
            }
        }
    }

    alert(" FELICIDADES HAS GANADO EL JUEGO ");
}