
//1-Escribe una función que determine si un número es primo o no.

function esPrimo(numero) {
  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos.
  }

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; // Si el número es divisible por otro número distinto de 1 y sí mismo, no es primo.
    }
  }

  return true; // Si no se encontraron divisores, el número es primo.
}

var numero = 4;
if (esPrimo(numero)) {
  console.log(numero + " es un numero primo.");
} else {
  console.log(numero + " no es un numero primo.");
}


//2- Implementa una función que realice operaciones de matriz, como suma, resta o multiplicación, en dos matrices dadas



//3-Escribe una función que calcule la suma de todos los números en un rango dado

function sumaEnRango(inicio, fin) {
  var suma = 0;

  for (var i = inicio; i <= fin; i++) {
    suma += i;
  }

  return suma;
}

var resultado = sumaEnRango(1, 4);
console.log("La suma en el rango es: " + resultado);




//4-Crea una función que cuente el número de vocales en una cadena de texto.

function contarVocales(cadena) {
  var vocales = "aeiouAEIOU";
  var contador = 0;

  for (var i = 0; i < cadena.length; i++) {
    var caracter = cadena.charAt(i);
    if (vocales.includes(caracter)) {
      contador++;
    }
  }

  return contador;
}

var texto = "Hola";
var numeroDeVocales = contarVocales(texto);
console.log("Hola: " + numeroDeVocales);

//6-Crea una función que invierta una cadena de texto sin usar reverse()


function invertirCadena(cadena) {
  var cadenaInvertida = "";

  for (var i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena.charAt(i);
  }

  return cadenaInvertida;
}


var textoOriginal = "Hola mundo!";
var textoInvertido = invertirCadena(textoOriginal);
console.log(textoInvertido);


//DOM
//1 carrusel-

let carrousel = document.getElementById("carrousel");
let arrayImg = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let index = 0;

function carrouselImage(){
  carrousel.src=  `images/${arrayImg[index]} `;

  if (index < 3) {
    index++;
  } else {
    index= 0;
  }
}

setInterval(carrouselImage, 2000);



//2

var classes = ["f0", "f1", "f2", "f3", "f4"];
var classIndex = 2;


document.getElementById('aumentar').addEventListener('click', function () {
  let previousClass = classIndex;
  classIndex++; 
  classIndex = (classIndex == classes.length) ? classes.length - 1 : classIndex;
  changeClass(previousClass, classIndex);
});

document.getElementById('disminuir').addEventListener('click', function () {
  let previousClass = classIndex;
  classIndex--;
  classIndex = (classIndex < 0) ? 0 : classIndex;
  changeClass(previousClass, classIndex);
});

function changeClass(previous, next) {
  if (previous != next) {
    var htmlElement = document.querySelector('html')
    htmlElement.classList.remove(classes[previous]);
    htmlElement.classList.add(classes[next]);
  }
}






