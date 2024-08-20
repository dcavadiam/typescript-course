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
    name: 'Diego',
    age: 24,
}

obj.name = 10
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

let n = 'hola';
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
