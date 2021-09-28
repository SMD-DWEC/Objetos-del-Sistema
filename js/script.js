'use strict';

console.log("JS Cargado correctamente");

let fecha = new Date();

console.log("Fecha: "+ fecha);

let fecha2 = new Date(2021, 8, 29);

console.log("Fecha 2: "+fecha2);

const meses = ["Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio" , "Julio", "Agosto", "Septiembre" , "Octubre", "Noviembre",
"Diciembre"];

const semana = ["domingo", "lunes", "martes","miercoles", "jueves", "viernes", "sabado"]

let hoy = `Hoy es ${semana[fecha.getDay()]} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
console.log(hoy);

let ms1 = fecha.getTime();

console.log(ms1+" ms");

let dentro5dias = ms1 + 5*24*60*60*1000;
//5 días, 24h al día, 60 minutos en cada hora, 60 segundos cada minuto, 1000 milisegundos en cada segundo

dentro5dias = new Date(dentro5dias); //5 días a partir de HOY.

console.log(dentro5dias);

let nombre1 = "Ana";
let nombre2 = "Abel";
if(nombre1>nombre2)console.log(nombre1 + " es mayor que " + nombre2);

let texto = "En un lugar de la mancha, de cuyo nombre no quiero...";
console.log(texto.charAt(6));

//Pos de la primera e despues de la ,
let pos = texto.indexOf(",");

console.log(texto.charAt(pos+3))
console.log(texto.indexOf("e", texto.indexOf(",")))
console.log(texto.includes("la mancha"));
console.log(texto.toLocaleLowerCase());
console.log(texto.substr(4,3));//Inicio, longitud

//Objetos math

console.log(Math.floor(Math.PI));

let input = "42e5";

console.log(isNaN(input));
console.log(Number.parseInt(input));
let input2 = "3.1415HOLA";
console.log(Number.parseFloat(input2));

//Estructuras avanzadas de datos:

// - Listas: son elementos ordenados y con repeticiones

// - Conjunto: sin orden y sin repeticiones

    //- SET; JavaScript tiene un conjunto, que es un grupo de objetos sin orden y repeticiones


// - Mapas: parejas de clave y valor, (clave dni, valor persona), los mapas permiten buscar por la clave
//Es basicamente un conjunto de parejas clave -> valor


console.log("Estructuras avanzadas de datos: SET");
let amigos = new Set();
amigos.add("Ana");
amigos.add("Juan");
amigos.add("Conde draco");

console.log(amigos);
console.log("Tienes: "+amigos.size+" amigos");

//Recorrer un conjunto
for(let amigo of amigos)
    console.log(amigo)

//Mapas:
console.log("=MAPAS=")

let coches = new Map();
coches.set("BA-9282-ZT","Porsche");
coches.set("BA-666-ZT","Seat Ibiza");
coches.set("ABC-DEF","Testa Turbo Volador");

console.log(coches);

//Objeto symbol