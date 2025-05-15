// set 

// Declaración

let mySet = new Set()
let mySet2 = {}   // no es un Set vacío

console.log(mySet)
console.log(mySet2)

// Inicialización

mySet = new Set(["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5"])  

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("Alfredo")   // Añade al final

console.log(mySet)

mySet.delete("Alfredo")

console.log(mySet)

console.log(mySet.delete("Elemento5"))
console.log(mySet.delete(3))

console.log(mySet)

// has

console.log(mySet.has("Alfredo"))
console.log(mySet.has("Elemento1"))

// size

console.log(mySet.size)

// Convertir un set a Array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Elemento3")
mySet.add("Elemento3")
mySet.add("Elemento3")
mySet.add("EleMento3")
console.log(mySet)


