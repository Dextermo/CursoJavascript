// Strings

// Concatenación 

let myName = "Alfredo"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[14])
console.log(greeting[13])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Alfredo"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Noexiste"))  //-1
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Alfredo"))
console.log(greeting.includes("Noexiste")) // false
console.log(greeting.slice(0, 7))
console.log(greeting.replace("Alfredo", "Dexter"))

// Template literals (plantillas literales)

let message = `Hola, este 
es mi 
curso de
JavaScript`

console.log(message)

let email = "alfredo.m3@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)