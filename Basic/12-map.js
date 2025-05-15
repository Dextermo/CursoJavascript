// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
  ["name","Alfredo"],
  ["email","alfredo.m3@gmail.com"],
  ["age",47]
])

console.log(myMap)

// Métodos y propiedades

// set  (actualizar o agregar un elemento)

myMap.set("alias","dexter")
myMap.set("name", "Alfredo Martínez")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log("has")
console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// keys, values y entries

console.log("keys y values")
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// delete

myMap.delete("name")

console.log(myMap)

// size

console.log("Size")
console.log(myMap.size)


// clear

myMap.clear()
console.log(myMap)

myMap.get
