//Operadores

//Operadores Aritméricos
let a = 10
let b = 5

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //División


console.log(a % b)  //Módulo (Resto)
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable **= 2
myVariable %= 2

//Operadores de comparación


console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 11) //Igualdad por valor
console.log(a == "11") //Igualdad por valor
console.log(a === "11")  //Igualdad por identidad (por valor y tipo)
console.log(a != 11)
console.log(a !== "11")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == false)


// Truthy values (valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 < 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

// not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No está lloviendo")