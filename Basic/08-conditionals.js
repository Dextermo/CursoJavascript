// if, else if, else

// if (sí)

let age = 47

if (age == 47) {
    console.log("La edad es 47")
}

// else (si no)
if (age == 47) {
  console.log("La edad es 47")
} else {
  console.log("La edad no es 47")
}

// else if (si no si)
if (age == 47) {
    console.log("La edad es 47")
} else if (age < 18) {
    console.log("Es menor de dad")
} else {
    console.log("La edad no es 47 y no es menor de edad")
}

// Operador ternario
const message = age == 47 ? "La edad es 47" : "La edad no es 47"
console.log(message)

// switch

let day = 3
let dayName

switch (day){
  case 0:
    dayName = "Lunes"
    break
  case 1:
    dayName = "Martes"
    break
  case 2:
    dayName = "Miercoles"
    break
  case 3:
    dayName = "Jueves"
    break
  case 4:
    dayName = "Viernes"
    break
  case 5:
    dayName = "Sabado"
    break
  case 6:
    dayName = "Domingo"
    break
  default:
    dayName = "Número de día incorrecto"
}

console.log(dayName)