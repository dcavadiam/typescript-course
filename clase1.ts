// INFERENCIA
// como a y b infiere que son number sin decirle nada

let a = 1;
let b = 2;
const c = a + b;
// c tambien será number

let cadenaTexto = "hola";

cadenaTexto.toLocaleLowerCase();

// ✖️ cadenaTexto = 2;
// ✖️ cadenaTexto.propiedadInexistente;

// ANY
let obj: any = { x: 0 };

obj.foo();
obj();
obj.barr = 100;
obj = "hola";
const n: number = obj;

// FUNCTIONS

// function saludar (name: string) {
//     console.log(`hola ${name}`);
// }

// saludar('Diego');
// saludar(2);

// TIPADO DE OBJETOS EN FUNCIONES

// Forma 2
// function saludar (persona: {name: string, age: number}) {
//     const {name, age} = persona;
//     console.log(`hola ${name}, eres ${age} años de edad`);
// }

// function saludar ({name, age}: {name: string, age: number}): string {
//     console.log(`hola ${name}, eres ${age} años de edad`);
//     return age;
// }

// const sayHiFromFunction = ( fn : (name: string) => void) => { // void es que la funcion no devuelve nada, es decir, no tiene un return
//     fn('Diego')
// }

// const sayHi = (name: string) => console.log(`hola ${name}`);

// sayHiFromFunction(sayHi);

// TIPAR ARROW FUNCTIONS

// // Forma 1
// const sumar = (a: number, b: number): number => {
//     return a + b;
// }

// // Forma 2
// const restar: (a: number, b: number) => number = (a, b) => a - b;

// NEVER
// function throwError(message: string): never {
//     throw new Error(message);
// }

// INFERENCIA DE FUNCIONES ANINONIMAS SEGUN EL CONTEXTO

// const avengers = ['Iron Man', 'Spider Man', 'Hulk', 'Thor'];

// avengers.forEach(avenger => {
//     console.log(avenger.toUpperCase());
// })

// OBJETOS

// let hero = {
//     name: 'Spider Man',
//     age: 22,
// }

// function createHero(name: string, age: number) {
//     return {
//         name, age
//     }
// }

// const thor = createHero('Thor', 42);

// TYPE ALIAS

// type Hero = {
//   name: string;
//   age: number;
// };

// let hero: Hero = {
//   name: "Spider Man",
//   age: 22,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     name,
//     age,
//   };
// }

// const thor = createHero({name:"Thor", age: 42});


// OPTIONALS PROPERTIES

// type HeroId = `${string}-${string}-${string}-${string}-${string}`; // <-- template union type

// type Hero = {
//   readonly id?: HeroId; // <-- es opcional y solo se puede leer
//   name: string;
//   age: number;
//   isActive?: boolean; // <-- es opcional
// };

// let hero: Hero = {
//   name: "Spider Man",
//   age: 22,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = createHero({name:"Thor", age: 42});

// thor.id?.toString(); // <-- optional chaining, si tiene id, devuelve el id como string, si no, devuelve undefined o lo que este antes de el ?.


// TEMPLATE UNION TYPES

// type HexadecimalColor = `#${string}`;

// const color: HexadecimalColor = 'ff0000';
// const color2: HexadecimalColor = '#033f';

// UNION TYPES

// type HeroId = `${string}-${string}-${string}-${string}-${string}`; 
// type HeroPowerScale = 'local' | 'planetary' | 'solar' | 'universal'; // <-- union type

// type Hero = {
//   readonly id?: HeroId; 
//   name: string;
//   age: number;
//   isActive?: boolean; 
//   powerScale?: HeroPowerScale;
// };

// let hero: Hero = {
//   name: "Spider Man",
//   age: 22,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = createHero({name:"Thor", age: 42});
// thor.powerScale = 'planetary';

// INTERCEPTIONS TYPES

// type HeroId = `${string}-${string}-${string}-${string}-${string}`; 
// type HeroPowerScale = 'local' | 'planetary' | 'solar' | 'universal'; 

// type HeroBasicInfo = {
//     name: string;
//     age: number;
// };

// type HeroPropeties = {
//   readonly id?: HeroId; 
//   isActive?: boolean; 
//   powerScale?: HeroPowerScale;
// };

// type Hero = HeroBasicInfo & HeroPropeties; // <-- intersection type

// let hero: Hero = {
//   name: "Thor",
//   age: 22,
// };

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = createHero({name:"Thor", age: 42});
// thor.powerScale = 'planetary';


// TYPE INDEXING

// type HeroPropeties = {
//     isActive?: boolean,
//     address: {
//         planet: string,
//         city: string,
//     },
// }

// const addressProperties: HeroPropeties['address'] = {
//     planet: 'Earth',
//     city: 'New York',
// }

// TYPE FROM VALUE

// const address = {
//     planet: 'Earth',
//     city: 'New York',
// }

// type Address = typeof address;

// const addressTwitch: Address = {
//     planet: 'Earth',
//     city: 'New York',
// }

// TYPE FROM FUNCTION RETURN 

// function createAddress() {
//     return {
//         planet: 'Earth',
//         city: 'New York',
//     }
// }

// type Address = ReturnType<typeof createAddress>; // <-- ReturnType<fn> es el tipo de retorno de la funcion fn

// ARRAYS

// const languages: (string|number)[] = [] // tambien puede ser: const languages: Array<string> = [];

// languages.push('TypeScript')
// languages.push('JavaScript')
// languages.push(1)
// languages.push(2)

// type HeroId = `${string}-${string}-${string}-${string}-${string}`; 
// type HeroPowerScale = 'local' | 'planetary' | 'solar' | 'universal'; 

// type HeroBasicInfo = {
//     name: string;
//     age: number;
// };

// const herosWithBasicInfo: HeroBasicInfo[] = []

// MATRICES 

/**
 * [
 *   ['X', 'O', 'X'], // <-- string[]
 *   ['O', 'X', 'O'], // <-- string[]
 *   ['X', 'O', 'X'], // <-- string[]
 * ]
 */

// type Cell = 'X' | 'O' | ''; // <-- union type

// type GameBoard = [      // <-- esto es una tupla, que es un array con un limite fijo de longitud
//     [Cell, Cell, Cell], // <-- Cell[]
//     [Cell, Cell, Cell], // <-- Cell[]
//     [Cell, Cell, Cell], // <-- Cell[]
// ]
// const gameBoard: GameBoard = [
//     ['X', 'O', 'X'],
//     ['O', 'X', 'O'],
//     ['X', 'O', 'X'],
// ]  

// TUPLES

// type State = [string, (newName: string) => void];
// const [hero, setHero] = useState('Spider Man');

// type RGB = [number, number, number];
// const rgb: RGB = [255, 0, 0];
