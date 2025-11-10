// src/first.ts
console.log("Ahoj světe!");
let hello: string = "Programujeme v TypeScript!";
//hello = 12345; // ! Nelze chyba: Type 'number' is not assignable to type 'string'.
hello = "Ahoj!";
console.log(hello);
