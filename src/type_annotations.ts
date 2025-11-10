// src/
// type_annotations.ts
let firstName = "Petr"; // ? Probíhá implicitní určení typu - nastavuju přímo hodnotu
// firstName = true;
firstName = "Adam";
console.log(firstName);

// * Doporučené použití typové anotace:
let lastName: string;
lastName = "Fifka";
lastName = "Veselý";
console.log(lastName);

let isPlaywright: boolean;
isPlaywright = true;
isPlaywright = false;
console.log(isPlaywright);

const cities: string[] = ["Praha", "Beroun"];
console.log(cities);

/*
Cvičení - typové anotace (⌛4:00)
Vytvoř složku: src/exercises a v ní jednoduchý program:  type_annotations_exercise.ts, který:
Vytvoří number proměnnou let age a tu inicializujte
Změňte age na jiné číslo na dalším řádku
Vypíše hodnotu proměnné age do terminálu
Následně program spusť pomocí tsx
*/
