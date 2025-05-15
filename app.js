let jugarDeNuevo = "si";

while (jugarDeNuevo === "si") {

    alert("¡Bienvenido a mi juego! 🤩");

    let aleatorio = Math.floor(Math.random() * 10) + 1;

    let intentos = 0;

    let num = Number(prompt("Intento 1 de 3: Adivina el número entre 1 y 10 🤑:  "));

    while (num !== aleatorio && intentos < 2) {

        let proximidad = Math.abs(aleatorio - num); // El Math.abs hace que la resta salga positiva y no haya error

        if (proximidad <= 2) {

            alert("¡Caliente! 🥵");

        } else {

            alert("Frío... 🥶");

        }

        intentos++;

        //Este if se encarga de contar los intentos que le quedan al usuario
        if (intentos < 3) {

            num = Number(prompt("Intento " + (intentos + 1) + " de 3: Intenta nuevamente 😄:"));

        }
    }


    //Este if se encarga de verificar si el número ingresado es igual al número secreto o no
    if (num === aleatorio) {

        alert("¡Felicidades! Adivinaste el número secreto 🎉🎉🎉");

    } else {

        alert("Se acabaron los intentos. El número era " + aleatorio + " 😥😥😥");

    }

    //En este espacio se pregunta si el usuario desea jugar nuevamente o no.
    jugarDeNuevo = prompt("¿Quieres jugar otra vez? 🤔 (si/no):").toLowerCase();
}

alert("¡Gracias por jugar! 😌");


