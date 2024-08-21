# Curso de TypeScript

## ¿Por qué aprender TypeScript?

- Popularidad
- Empleo
- Compila a JavaScript

## ¿Qué es TypeScript?

(Abrir excalidraw)

- Lenguaje de programación
- Superset de JavaScript
- Para añadir tipos al lenguaje JavaScript

## ¿Por qué usar TypeScript?

Uno de los problemas de JavaScript es que es un lenguaje de programación con tipado débil y dinámico.

2 + '2' = '22'

// Hacer ejemplos de problemas de JavaScript

## ¿Qué no hace TypeScript?

Analiza en tiempo de compilación, de forma estática.
No arregla los problemas en tiempo de ejecución.

## Primeros ejemplos de TypeScript sin escribir tipos

```ts
const a = 1;
const b = 2;
const c = a + b;
```

Ahora con un objeto

```ts
const obj = {
  name: "Diego",
  age: 24,
};

obj.name = 10;
```

## Los tipos básicos de TypeScript

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

## La inferencia de tipos

```ts
const a = 1;
const b = 2;
const c = a + b;

let n = "hola";
n = 2;
```

## Tipos especiales: Any

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using 'any' disables all futher type checking, and it's assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hola";
const n: number = obj;
```

## Enums

En JavaScript se puede hacer así

```js
const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAVAILABLE: "unavailable",
  SERVER_ERROR: "serverError",
};
function mostrarMensaje(tipoDeError) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No encontrado");
  } else if (tipoDeError === ERROR_TYPES.UNAVAILABLE) {
    console.log("No disponible");
  } else if (tipoDeError === ERROR_TYPES.SERVER_ERROR) {
    console.log("Error del servidor");
  }
}
```

En TypeScript se puede hacer así

```ts
const enum ERROR_TYPES {
  NOT_FOUND = "notFound",
  UNAVAILABLE = "unavailable",
  SERVER_ERROR = "serverError",
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No encontrado");
  } else if (tipoDeError === ERROR_TYPES.UNAVAILABLE) {
    console.log("No disponible");
  } else if (tipoDeError === ERROR_TYPES.SERVER_ERROR) {
    console.log("Error del servidor");
  }
}
```

### ¿Cuando usar enums con const y sin const?

En la mayoria de los casos, se usan con const, pero si quieres hacer algo que sea destinado para el exterior (librerias, plugins, etc.) se recomienda usar sin const.

## Acersiones de tipos

```ts
const canvas = document.querySelector("canvas");

// null si no se encuentra el elemento
// HTMLElement si se encuentra el elemento

// ?? Cómo sabe TypeScript que realmente estas recuperando un elemento <canvas>?

// es inferencia --> TypeScript se da cuenta de que el elemento que está
// dentro del if va a poder ser un HTMLCanvasElement
if (canvas !== null && canvas instanceof HTMLCanvasElement) {
  const ctx = (canvas as HTMLCanvasElement).getContext("2d");
}
```

## Fetching de datos en TypeScript

```ts
// Tipado sacado de Quicktype
export interface APIResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

const response = await fetch(API_URL);
if (!response.ok) {
  throw new Error("Something went wrong");
}

const dataJson = await response.json();

dataJson.map((item: APIResponse) => {
  return {
    id: item.id,
    name: item.name,
    username: item.username,
    email: item.email,
    address: item.address.city,
    phone: item.phone,
    website: item.website,
    company: item.company,
  };
});
```

## Interfaces

Define la forma de un objeto, pero no define su contenido.

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Diego",
  age: 24,
};
```

## Interfaces anidadas

```ts
interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface Shoe extends Product {
  size: string;
}

interface ShoppingCartItem {
  products: (Product | Shoe)[];
  quantity: number;
}

const shoppingCart: ShoppingCartItem = {
  products: [
    {
      name: "T-shirt",
      price: 29.99,
      quantity: 1,
      size: "M",
    },
  ],
  quantity: 1,
};
```

### Indicar funciones en interfaces

```ts
// Forma 1
interface CarritoOps {
  add(product: Product): void;
  remove(id: number): void;
  clear(): void;
}

// Forma 2
interface CarritoOps {
  add(product: Product): void;
  remove(id: number): void;
  clear(): void;
}
```

### Interfaces o tipos?

En general se usan los tipos, las interfaces se pueden usar con objetos o clases.

## Narrowing y type guards

```ts
interface Mario {
    name: string    ;
    saltar: () => void;
}

interface Sonic {
    name: string;
    correr: () => void;
}

type Character = Mario | Sonic;

// Type guard
// dejame pensar o comprobar si character es un Sonic
// y esta funcion determina si es un Sonic o no
function checkIsSonic(character: Character): character is Sonic {
    return (character as Sonic).correr !== undefined;
}

// Hay que evitar usar type guards
function play(character: Character) {
    // if (character.company === 'Nintendo') {
    //     character.saltar(); // Seguro que es Mario
    //     return;
    // }
    // character.correr(); // Seguro que es Sonic
     
    if (checkIsSonic(character)) {
        character.correr();
    }
}
```

## Never

```ts
function fn(x: string | number) {
    if (typeof x === 'string') {
        // do something
    } else if (typeof x === 'number') {
        // do something
    } else {
        x // x is never
    }
}
```

## InstanceOf y Class

```ts
interface Avenger {
    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;
}

class Avenger implements Avenger {

    constructor(name: string,  powerScore: number) {
        this.name = name;
        this.powerScore = powerScore;
    }

    get fullName() {
        return `${this.name}, the power score is ${this.powerScore}`;
    }

    set power(newPower: number) {
        if (newPower > 100) {
            this.powerScore = newPower;
        } else {
            throw new Error("The power score must be between 0 and 100");   
        }
    }
}

const ironMan = new Avenger("Iron Man", 100);

ironMan.powerScore = 100;

```



