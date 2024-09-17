/*2. Crea un proyecto*/
console.log("Ejercicio 2: Corriendo desde typescript");
//3. 3. Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
let text : string = "Hola, TypeScript";
let aNumber : number = 123;
let aBoolean : boolean = true;
let aDate : Date = new Date(2024, 8, 8);

const textElement = document.getElementById('text');
const numberElement = document.getElementById('number');
const booleanElement = document.getElementById('boolean');
const dateElement = document.getElementById('date')

if (textElement) textElement.textContent = `Texto: ${text}`
if (numberElement) numberElement.textContent = `Número: ${aNumber}`;
if (booleanElement) booleanElement.textContent = `Booleano: ${aBoolean}`;
if (dateElement) dateElement.textContent = `Fecha: ${aDate.toLocaleDateString()}`

//4.  Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y devolver su representación en cadena.

let n1 : number = 456

function convertNumberToString (num : number) : string {
    return num.toString();
}

const numberElement1 = document.getElementById('n1');
if (numberElement1) numberElement1.textContent = `Numero convertido a cadena: ${convertNumberToString(n1)}`;

//5.  Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.

let numbers : number[] = [1,2,3,4,5];

function addElements(arr: number[]):number {
    return arr.reduce((acc, curr) => acc + curr, 0); //sumar todos los elementos
}

let sum : number = addElements(numbers);

const sumElement = document.getElementById('n2');
if (sumElement) sumElement.textContent = `Suma del array: ${sum}`;

//6. Crea un objeto que representa a un estudiante con nombre, edad y curso. Muestra al estudiante y sus propiedades en el HTML.  El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
interface Student {
    name: string;
    age: number;
    course: string;
}

let student1 : Student = {
    name: "Juan",
    age: 20,
    course: "Matemáticas"
}

const nameElement = document.getElementById('name-est');
const ageElement = document.getElementById('age-est');
const courseElement = document.getElementById('course-est');

if (nameElement) nameElement.textContent = `Estudiante: ${student1.name}`;
if (ageElement) ageElement.textContent = `Edad: ${student1.age}`;
if (courseElement) courseElement.textContent = `Curso: ${student1.course}`;

//7. Define un “type” personalizado para representar una dirección con calle, ciudad y código postal. Usa este tipo para crear una dirección y muéstrala en el HTML. El tipo debe tener propiedades para calle, ciudad y código postal.

type Direction = {
    street: string;
    city: string;
    postalCode: number;
};

let dir1: Direction = {
    street: "Av. Principal",
    city: "Ciudad",
    postalCode: 12345
};

function formatDirection(dir: Direction): string {
    return `Calle: ${dir.street}, Ciudad: ${dir.city}, CP: ${dir.postalCode}`;
}

let formattedDirection: string = formatDirection(dir1);

const directionElement = document.getElementById('formatted-direction');
if (directionElement) directionElement.textContent = formattedDirection;

//8.  Define una interfaz para un usuario que tenga nombre, correo y un método para saludar. Implementa esta interfaz en un objeto y muestra el saludo en el HTML. La interfaz debe definir propiedades para nombre, correo y un método que devuelva un saludo.
// Define la interfaz "User"
interface User {
    name: string;
    email: string;
    greet(): string;
}

const user: User = {
    name: "Ana",
    email: "ana.perez@example.com",
    greet: function() {
        return `Hola, mi nombre es ${this.name}`;
    }
};

const greetingElement = document.getElementById('greeting');
if (greetingElement) greetingElement.textContent = user.greet();

//9.  Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML. La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.


class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const persona = new Persona("Carlos", 30);

const presentationElement = document.getElementById('presentation');
if (presentationElement) presentationElement.textContent = persona.presentarse();

//10.  Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML. La clase debe permitir almacenar y obtener un valor de cualquier tipo.
class Caja<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    obtenerValor(): T {
        return this.valor;
    }
}

const cajaString = new Caja<string>("Mensaje secreto");

const cajaNumber = new Caja<number>(42);

const stringElement2 = document.getElementById('string-value');
const numberElement2 = document.getElementById('number-value');

if (stringElement2) stringElement2.textContent = `Contenido de cajaDeTexto: ${cajaString.obtenerValor()}`;
if (numberElement2) numberElement2.textContent = `Contenido de cajaDeNumero: ${cajaNumber.obtenerValor()}`;

//11. Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML. La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.

function identidad<T>(valor: T): T {
    return valor;
}

const valorString = identidad<string>("Texto");
const valorNumber = identidad<number>(123);

const stringElement3 = document.getElementById('string-identity');
const numberElement3 = document.getElementById('number-identity');

if (stringElement3) stringElement3.textContent = `Identidad del texto: ${valorString}`;
if (numberElement3) numberElement3.textContent = `Identidad del número: ${valorNumber}`;

//12. Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito a una variable y muéstralo en el HTML. La enumeración debe incluir al menos tres colores diferentes.

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

const colorFavorito: Color = Color.Azul;

const colorElement = document.getElementById('favorite-color');

if (colorElement) colorElement.textContent = `Color favorito: ${colorFavorito}`;
