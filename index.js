"use strict";
/*2. Crea un proyecto*/
console.log("Ejercicio 2: Corriendo desde typescript");
//3. 3. Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
let text = "Hola, TypeScript";
let aNumber = 123;
let aBoolean = true;
let aDate = new Date(2024, 8, 8);
const textElement = document.getElementById('text');
const numberElement = document.getElementById('number');
const booleanElement = document.getElementById('boolean');
const dateElement = document.getElementById('date');
if (textElement)
    textElement.textContent = `Texto: ${text}`;
if (numberElement)
    numberElement.textContent = `Número: ${aNumber}`;
if (booleanElement)
    booleanElement.textContent = `Booleano: ${aBoolean}`;
if (dateElement)
    dateElement.textContent = `Fecha: ${aDate.toLocaleDateString()}`;
//4.  Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y devolver su representación en cadena.
let n1 = 456;
function convertNumberToString(num) {
    return num.toString();
}
const numberElement1 = document.getElementById('n1');
if (numberElement1)
    numberElement1.textContent = `Numero convertido a cadena: ${convertNumberToString(n1)}`;
//5.  Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.
let numbers = [1, 2, 3, 4, 5];
function addElements(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0); //sumar todos los elementos
}
let sum = addElements(numbers);
const sumElement = document.getElementById('n2');
if (sumElement)
    sumElement.textContent = `Suma del array: ${sum}`;
let student1 = {
    name: "Juan",
    age: 20,
    course: "Matemáticas"
};
const nameElement = document.getElementById('name-est');
const ageElement = document.getElementById('age-est');
const courseElement = document.getElementById('course-est');
if (nameElement)
    nameElement.textContent = `Estudiante: ${student1.name}`;
if (ageElement)
    ageElement.textContent = `Edad: ${student1.age}`;
if (courseElement)
    courseElement.textContent = `Curso: ${student1.course}`;
let dir1 = {
    street: "Av. Principal",
    city: "Ciudad",
    postalCode: 12345
};
function formatDirection(dir) {
    return `Calle: ${dir.street}, Ciudad: ${dir.city}, CP: ${dir.postalCode}`;
}
let formattedDirection = formatDirection(dir1);
const directionElement = document.getElementById('formatted-direction');
if (directionElement)
    directionElement.textContent = formattedDirection;
const user = {
    name: "Ana",
    email: "ana.perez@example.com",
    greet: function () {
        return `Hola, mi nombre es ${this.name}`;
    }
};
const greetingElement = document.getElementById('greeting');
if (greetingElement)
    greetingElement.textContent = user.greet();
//9.  Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML. La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona = new Persona("Carlos", 30);
const presentationElement = document.getElementById('presentation');
if (presentationElement)
    presentationElement.textContent = persona.presentarse();
//10.  Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML. La clase debe permitir almacenar y obtener un valor de cualquier tipo.
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
const cajaString = new Caja("Mensaje secreto");
const cajaNumber = new Caja(42);
const stringElement2 = document.getElementById('string-value');
const numberElement2 = document.getElementById('number-value');
if (stringElement2)
    stringElement2.textContent = `Contenido de cajaDeTexto: ${cajaString.obtenerValor()}`;
if (numberElement2)
    numberElement2.textContent = `Contenido de cajaDeNumero: ${cajaNumber.obtenerValor()}`;
//11. Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML. La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.
function identidad(valor) {
    return valor;
}
const valorString = identidad("Texto");
const valorNumber = identidad(123);
const stringElement3 = document.getElementById('string-identity');
const numberElement3 = document.getElementById('number-identity');
if (stringElement3)
    stringElement3.textContent = `Identidad del texto: ${valorString}`;
if (numberElement3)
    numberElement3.textContent = `Identidad del número: ${valorNumber}`;
//12. Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito a una variable y muéstralo en el HTML. La enumeración debe incluir al menos tres colores diferentes.
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const colorFavorito = Color.Azul;
const colorElement = document.getElementById('favorite-color');
if (colorElement)
    colorElement.textContent = `Color favorito: ${colorFavorito}`;
