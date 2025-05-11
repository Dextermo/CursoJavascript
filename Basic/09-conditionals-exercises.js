/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Alfredo"
let variable = 1
if (variable == 1){
  console.log(`Mi nombre es ${miNombre}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "alfredo"
let contraseña = "password"

if (usuario == "alfredo" && contraseña == "password") {
  console.log("Datos de acceso correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 3
if (numero < 0) {
  console.log('El numero es negativo')
} else if (numero == 0){
  console.log('El numero es cero')
} else if (numero > 0) {
  console.log('El numero es positivo')
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 25

if (age < 18){
  console.log(`Le faltan ${18 - age} años para poder votar`)
} else if (age >= 18){
  console.log("Ya puedes votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log(age < 18 ? "Menor" : "Adulto")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Mayo"

if (mes == "Enero" || mes == "Febrero" || mes == "Diciembre"){
  console.log("Invierno")
} else if (mes == "Marzo" || mes == "Abril" || mes == "Mayo") {
  console.log("Primavera")
} else if (mes == "Junio" || mes == "Julio" || mes == "Agosto") {
  console.log("Verano")
} else if (mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre") {
  console.log("Otoño")
} else {
  console.log("El mes es incorrecto")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre"){
  console.log("31")
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
  console.log("30")
} else if (mes == "Febrero") {
  console.log("28")
} else {
  console.log("El mes es incorrecto")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "enu"

switch (language) {
  case "enu":
    console.log("El idioma es inglés")
    break
  case "esp":
    console.log("El idioma es castellano")
    break
  case "fra":
    console.log("El idioma es frances")
    break      
  default:
    console.log("El idioma es incorrecto")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = "Abril"
switch (mes){
  case "Enero":
  case "Febrero":
  case "Diciembre":
    console.log("Switch: Invierno")
    break
  case "Marzo":
  case "Abril":
  case "Mayo":
    console.log("Switch: Primavera")
    break   
  case "Junio":
  case "Julio":
  case "Agosto":
    console.log("Switch: Verano")
    break
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    console.log("Switch: Otoño")
    break  
  default:
    console.log("Switch: Mes incorrecto")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = "Agosto"
switch (mes){
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":    
  case "Diciembre":  
    console.log("Switch: 31")
    break
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":    
    console.log("Switch: 30")
    break   
  case "Febrero":
    console.log("Switch: 28")
    break
  default:
    console.log("Switch: Mes incorrecto")
}