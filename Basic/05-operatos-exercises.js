/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 10
let resta = 10 - 5
let multi = 5 * 10
let dividir = 10 / 5
let resto =  10 % 5
let exponente = 5 ** 10

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma += 1
console.log (suma)
resta -= 1
console.log(resta)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma == 16)
console.log(10 == "10")
console.log(resto == 0)
console.log(exponente > 122)
console.log(dividir <= 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 === "10")

// 5. Utiliza el operador lógico and
console.log(suma === 16  && suma > 10)


// 6. Utiliza el operador lógico or
console.log(suma === 16  || suma < 10)

// 7. Combina ambos operadores lógicos
console.log(dividir == 2 || suma < 10 && exponente < 233)

// 8. Añade alguna negación
console.log(!(suma === 16))

// 9. Utiliza el operador ternario
console.log(suma >= 16 ? "Es mayor" : "Es menor")

// 10. Combina operadores aritméticos, de comparáción y lógicas
