
  initApp1();

  function initApp1() {
      console.log('...Inicializando APP del ejercicio 1');
  
  let numeros = [2, 6, 1, 8];
  let resultado = calcularPromedio(numeros);
  console.log("Promedio:", resultado);

  }

  function calcularPromedio(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let suma = 0;
  
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }

    let promedio = suma / arr.length;
    return promedio;
  }
  
  initApp2();

  function initApp2() {
      console.log('...Inicializando APP del ejercicio 2');
  
  let numeros = [4, 8, 5, 3];
  let resultado = obtenerUltimoElemento(numeros);
  console.log("Último elemento:", resultado);

  }

  function obtenerUltimoElemento(arr) {
    if (arr.length === 0) {
      return null;
    }

    return arr[arr.length - 1];
  }

  initApp3();

  function initApp3() {
      console.log('...Inicializando APP del ejercicio 3');

      let numeros = [1, 2, 5, 8, 9, 12, 2, 3];
      let resultado = sumarNumerosPares(numeros);
      console.log("Suma de números pares:", resultado); 
  }

  function sumarNumerosPares(arr) {
    let suma = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { 
        suma += arr[i]; 
      }
    }
  
    return suma;
  }
  
  initApp4();

  function initApp4() {
    console.log('...Inicializando APP del ejercicio 4');

    let numero = 6;
    let resultado = calcularFactorial(numero);
    console.log("Factorial de", numero, "es:", resultado);
}

function calcularFactorial(n) {
    let factorial = 1; // Inicializamos el factorial en 1
  
    // Utilizamos un bucle for para multiplicar los números desde n hasta 1
    for (let i = n; i > 0; i--) {
      factorial *= i; // Multiplicamos el valor actual de i con factorial
    }
  
    return factorial; // Retornamos el valor del factorial
  }
  
  initApp5();

  function initApp5() {
    console.log('...Inicializando APP del ejercicio 5');

    for (let i = 1; i <= 15; i++) {
        if (i % 2 === 0) {
          console.log(i + " es par");
        } else {
          console.log(i + " es impar");
        }
      }
}

initApp6();

function initApp6() {
  console.log('...Inicializando APP del ejercicio 6');

    let numero1 = 4;
    let numero2 = 33; 

    for (let i = 1; i <= 50; i++) {
        if (i === numero1 || i === numero2) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }
    }

}

initApp7();

function initApp7() {
  console.log('...Inicializando APP del ejercicio 7');

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
}

initApp8();

function initApp8() {
  console.log('...Inicializando APP del ejercicio 8');

  const precioHelado = 50;

  let topping = "oreo"; 
  
  let costoTopping = 0;
  
  switch (topping) {
    case "oreo":
      costoTopping = 10;
      break;
    case "kitkat":
      costoTopping = 15;
      break;
    case "brownie":
      costoTopping = 20;
      break;
    default:
      console.log("No tenemos este topping, lo sentimos.");
      costoTopping = 0;
  }
  
  let costoTotal = precioHelado + costoTopping;
  
  if (costoTopping === 0) {
    console.log(`El precio del helado sin ningún topping es: ${precioHelado} MXN`);
  } else {
    console.log(`El precio del helado con topping de ${topping} es: ${costoTotal} MXN`);
  }
}

initApp9();

function initApp9() {
  console.log('...Inicializando APP del ejercicio 9');

  // Datos de entrada
  const precioCourse = 4999;
  const precioCarrera = 3999;
  const precioMaster = 2999;
  
  const duracionCourse = 2;
  const duracionCarrera = 6;
  const duracionMaster = 12;
  
  let programaElegido = "Carrera"; 
  let beca = "Beca Google"; 
  
  let precioMensual = 0;
  
  switch (programaElegido) {
    case "Course":
      precioMensual = precioCourse;
      break;
    case "Carrera":
      precioMensual = precioCarrera;
      break;
    case "Master":
      precioMensual = precioMaster;
      break;
    default:
      console.log("Programa no válido");
      break;
  }
  
  let descuento = 0;
  switch (beca) {
    case "Beca Facebook":
      descuento = 0.20;
      break;
    case "Beca Google":
      descuento = 0.15;
      break;
    case "Beca Jesua":
      descuento = 0.50;
      break;
    case "":
      descuento = 0;
      break;
    default:
      console.log("Beca no válida");
      break;
  }
  
  let precioConDescuento = precioMensual * (1 - descuento);
  
  let duracionTotal = 0;
  switch (programaElegido) {
    case "Course":
      duracionTotal = duracionCourse;
      break;
    case "Carrera":
      duracionTotal = duracionCarrera;
      break;
    case "Master":
      duracionTotal = duracionMaster;
      break;
  }
  
  let costoTotal = precioConDescuento * duracionTotal;
  
  console.log(`El precio mensual con descuento es: ${precioConDescuento.toFixed(2)} MXN`);
  console.log(`El costo total del programa ${programaElegido} es: ${costoTotal.toFixed(2)} MXN`);
  
}

initApp10();

function initApp10() {
  console.log('...Inicializando APP del ejercicio 10');

// Datos de entrada
let tipoVehiculo = "coche"; 
let kilometrosRecorridos = 150; 
let litrosConsumidos = 120; 

let precioKilometro = 0;

switch (tipoVehiculo) {
  case "coche":
    precioKilometro = 0.20;
    break;
  case "moto":
    precioKilometro = 0.10;
    break;
  case "autobús":
    precioKilometro = 0.50;
    break;
  default:
    console.log("Tipo de vehículo no válido");
    break;
}

let cargoExtra = 0;

if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
  cargoExtra = 5;
} else if (litrosConsumidos > 100) {
  cargoExtra = 10;
}

let totalAPagar = (precioKilometro * kilometrosRecorridos) + cargoExtra;

console.log(`El total a pagar es: ${totalAPagar.toFixed(2)} MXN`);

}