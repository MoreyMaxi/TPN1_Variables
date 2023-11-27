alert("Bienvenidos!");

document.write("Hello World");

document.write("<br>");

document.write(3 + 5);

document.write("<br>");

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
document.write("Hola " + nombreUsuario);

document.write("<br>");

let numero1= parseInt(prompt("Ingresa un numero"))
let numero2= parseInt(prompt("Ingresa un numero"))
document.write("El resultado es " + (numero1 + numero2));

document.write("<br>");

let numero3 = prompt("Ingresa el primer número:");
let numero4 = prompt("Ingresa el segundo número:");


numero3 = parseInt(numero3);
numero4 = parseInt(numero4);

let mayor = (numero3 > numero4) ? numero3 : numero4;

document.write("El número más grande es: " + mayor);

document.write("<br>");

let numero5 = prompt("Ingresa el primer número de tres:");
let numero6 = prompt("Ingresa el segundo número de tres:");
let numero7  = prompt("Ingresa el segundo número de tres:");
numero5 = parseInt(numero5);
numero6 = parseInt(numero6);
numero6 = parseInt(numero7);

let mayortres;

if (numero5 >= numero6 && numero5 >= numero7) {
    mayortres = numero5;
} else if (numero6 >= numero5 && numero6 >= numero7) {
    mayortres = numero6;
} else {
    mayortres = numero7;
}

document.write("El número más grande es: " + mayortres);

document.write("<br>");
let numerodiv = prompt("ingresa el numero que a dividir")
numerodiv = parseInt(numerodiv);
let div; 
if (numerodiv % 2 === 0){ document.write ( " el numero es divisible en 2")}
else { document.write( "el numero no es divisible en 2");}

/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
*/ 
const frase = prompt("Ingresa una frase:");
let vocales = '';

for (let i = 0; i < frase.length; i++) {
  const letra = frase.charAt(i);
  if ('aeiouAEIOU'.includes(letra)) {
    vocales += letra;
  }
}

console.log("Las vocales que aparecen en la frase son: " + vocales);

document.write("<br>");
let numerodiv2 = prompt("ingresa el numero a dividir")
numerodiv = parseInt(numerodiv);
let div2; 
if (numerodiv2 % 2 === 0 || numerodiv2 % 3 === 0 || numerodiv2 % 5 === 0
    || numerodiv2 % 7 === 0 ){ document.write ( " el numero es divisible")}
else { document.write( "el numero no es divisible ");}