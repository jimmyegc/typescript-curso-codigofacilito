console.log("--- types ----");

let nombre: string = "Jimmy";
let age: number = 44;
let isDeveloper: boolean = true;
let person: Object = {};
let fruits: string[] = ["orange", "apple", "banana"];
let users: Object[] = [
  { id: 1, name: "Steve Jobs" },
  { id: 2, name: "Bill Gates" },
];

let response: any;

function saludar(): void {
  console.log("hello");
}

let response2: unknown;
response2 = true;

// Combinación de Tipos
let respuesta: number | null = 5;
respuesta?.toString();

type ResponseTypeService = string | undefined;
let respuestaServicio: ResponseTypeService;
respuestaServicio?.concat("");

// Type Assertion
let message: any = "";
let messageUppercase = <string>message;
messageUppercase.toUpperCase();

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

//ó
//const canvas = document.getElementById('canvas') as HTMLCanvasElement
