// array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Alfredo", "Martínez", 47, true]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Alfredo"
myArray2[1] = "Martínez"
myArray2[2] = 47
myArray2[4] = "Fuera de rango"

console.log(myArray2)

myArray = []
myArray[0] = "Alfredo"
myArray[1] = "Martínez"
myArray[2] = 47

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Alfredo")
myArray.push("prueba")
myArray.push(47)

console.log(myArray)

//myArray.pop()  // Borra el último elemento del array y lo devuelve
console.log(myArray.pop())

console.log(myArray)

// shift y unshift

console.log(myArray.shift())  // Borra el primero elemento del array y lo devuelve
console.log(myArray)

myArray.unshift("Añadido1", "Añadido2")
console.log(myArray)

// length

console.log(myArray.length)

// clear

//myArray = []
myArray.length = 0 // alternativa, no recomendado
console.log(myArray)

// slice
myArray = []
myArray.push("Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5")
let myNewArray = myArray.slice(1, 2)
console.log(myArray)
console.log(myNewArray)

// splice

myArray = ["Alfredo", "Martínez", 47, true]
let myNewArray2 = myArray.splice(1, 2)
console.log(myArray)
console.log(myNewArray2)