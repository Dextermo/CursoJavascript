/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Alfredo"
let cadena2 = "Martínez"
console.log(cadena1 + " " + cadena2)

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena1[0])
console.log(cadena1[cadena1.length - 1])


// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase())
console.log(cadena1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let miTexto = `Este es mi
texto 
en varias
líneas`
console.log(miTexto)

// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre es ${cadena1}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let otroTexto = "Cambiar espacios por guiones en una cadena de texto"
console.log(otroTexto.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(otroTexto.includes("una"))

// 9. Comprueba si dos strings son iguales
console.log(miTexto == otroTexto)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(otroTexto.length == miTexto.length)

