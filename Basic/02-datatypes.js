// Tipos de datos primitivos, datos básicos e inmutables, identifican un único valor
// 7 tipos de datos

//Cadena de texto (String)
let myName = "Alfredo Martínez"
let alias = "DexterDev"
let email = `dexter@dexterdev.com`

// Números (number) 64bits
let age = 47  // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null
console.log(nullValue)

// Symbol
let mySymbol = Symbol("mySymbol")

// BigInt 
let myBigInt = BigInt(3253462543625462345634563456435654)
let myBigInt2 = 3253462543625462345634563456435654n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof nullValue)

console.log(typeof undefinedValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)
