// var edad = prompt("Escriba su edad")

// if(edad > 18){
//     alert("podes comprar alcohol")
// }

//   //CONDICION A CUMPLIR    
// // |--------| 
// if(edad < 18){ //-->Bloque a ejercutar si se cumple la condicion
//     alert("NO podes comprar alcohol")
// }

// // < OPERADOR DE COMPARACION 



    //  |--> Lo que esta adentro del parentesis tiene que ser true para que se cumpla la condicion
// if("veinte" === "veinte"){
//     alert("podes comprar alcohol")
// }


// if(true){
//     alert("podes comprar alcohol")
// }


// OPERADOR DE COMPARACION 

// 2 > 3  --> false --> 2 es mayor a 3
// 2 < 3  --> true --> 2 es menor a 3
// 2 > 2  --> false --> 2 es mayor a 2
// 2 >= 3  --> false --> 2 es mayor o igual a 3
// 2 <= 2  --> true --> 2 es menor o igual a 2


// 2 == "2" --> true --> 2 es igual a "2" (string de 2)
// 2 === "2" --> false --> 2 es igual a "2" (string de 2)

// 2 == 2 --> true --> 2 es igual a 2 
// 2 === 2 --> true --> 2 es igual a 2 
// "2" === "2" --> true --> "2" es igual a "2" 

// un solo = no se usa para comparar

//! niega el simbolo --> !== (no es igual) 
// "18" !== 18 --> true (estoy diciendo no es igual con los 3 iguales)
// "18" != 18 --> false (estoy diciendo no es igual con los 2 iguales)


// EJERCICIO NOS VOLEMOS A ENOCNTRAR A LAS 11.15
// introducir 2 contraseñas.. y si son iguales, una alerta que diga son iguales.. y si no son iguales, un alerta que diga no son iguales

//SOLUCION

// var contraseña = prompt("escriba su contraseña")
// var contraseñaRepetida = prompt("vuelva a escribir su contraseña")

// if(contraseña === contraseñaRepetida){
//     alert("Son iguales podes entrar a la pagina")
// }

// if(contraseña !== contraseñaRepetida){
//     alert("No son iguales las contraseñas")
// }


// if (contraseña === contraseñaRepetida){
//     alert("Son iguales podes entrar a la pagina")
// } 
// else {
//     alert("No son iguales las contraseñas")
// }

// var edad = 10

// if(edad >= 16){
//     console.log("podes votar")
// }
// if(edad >= 18){
//     console.log("podes comprar alcohol")
// }
// if(edad < 16){
//     console.log("no podes ni votar ni comprar alcohol")
// }


//Hijo, si mañana hay sol vamos a la plaza, si esta nublado vamos a los jueguitos y sino vemos una peli en casa.

// var clima = "soleado"
// //si esta soliado vamos a la plaza
// if(clima === "soleado"){
//     console.log("VAMOS A LA PLAZA")
// }
// else if(clima === "nublado"){
//     console.log("VAMOS A LOS JUEGUITOS")
// }
// else if(clima === "llueve"){
//     console.log("LLEVO PARAGUAS")
// }
// else if(clima === "piedra"){
//     console.log("TAPO EL AUTO")
// }
// else {
//     console.log("QUE TIEMPO LOCO")
// }

//if --> si sucede la condicion se da el resultado
//else --> sino
//else if --> si no se da lo anterior pero se da mi condicion 



//UNIR LO ANTERIOR CON FUNCIONES DE LA CLASE PASADA
//Repaso de funciones

// function unirConCondicion(parametro){
//     console.log(parametro / 2)
// } 

// unirConCondicion(100)



// function unirConCondicion(parametro){
//     if(parametro === 100){
//         console.log(parametro / 2)
//     }
//     else{
//         console.log(parametro)
//     }
// } 

// unirConCondicion(101)

// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// function puedeVerPelicula(edad, tieneAutorizacion){
//     if(edad >= 15){
//         console.log("puede verla")
//     } 
//     else if(tieneAutorizacion === true){
//         console.log("puede verla por aut")
//     }
//     else {
//         console.log("NO PUEDE VERLA")
//     }
    
// }

// puedeVerPelicula(12, true)  // puede verla por aut
// puedeVerPelicula(15, false) // puede verla
// puedeVerPelicula(11, false) // NO PUEDE VERLA
// puedeVerPelicula(18, true) // puede verla


// && ||

//&& significa "y" tienen que ser si o si true las dos condiciones
// || significa "o" Una de las dos condiciones, o las dos, tienen que ser true

//si esta soleado Y tengo dinero voy al cine
// var clima ="sol"
// var dinero = true

// if(clima === "sol" && dinero === true){
//     console.log("vamos al cine")
// }

// var plata = true
// var cupon = true
// //Si tengo plata O tengo cupon 2X1 vamos al cine

// if(plata === true || cupon === true){
//     console.log("vamos al cine")
// }


// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)
//                    10      3      20
function estaEnRango(valor, minimo, maximo){
    if(valor > minimo && valor < maximo ){
        console.log(true)
    } 
    else {
        console.log(false)
    }

}

estaEnRango(10, 3, 20) // true
estaEnRango(3, 3, 20)   // false
estaEnRango(20, 3, 20)  // false
estaEnRango(100, 3, 20) // false
estaEnRango(-20, 3, 20) // false
estaEnRango(4, 3, 20) // true
