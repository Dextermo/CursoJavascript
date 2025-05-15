/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = new Array()
myArray = ["Perro", "Gato", "Conejo", "Gallina", "Cerdo"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("Cododrilo")
console.log(myArray)

myArray.push("Zorro")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set()
mySet = new Set(["Libro1", "Libro2","Libro3", "Libro4", "Libro5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido (repetidos no se puede en un Set)
mySet.add("Libro6")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map