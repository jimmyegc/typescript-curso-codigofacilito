const sayHi = (name) => {
  console.log("Hello", name);
};

sayHi("Jimmy");

function sayGoodbye() {
  console.log("Adios...");
}

sayGoodbye();

function show(name: string[]): number {
  console.log("Hola", name[0]);
  return 1;
}

const response = show(["jimmy"]);
console.log(response);

interface ResponseServiceCD {
  id: number;
  name: string;
  number: number;
  charge: string;
}

const response1 = {
  id: 1,
  name: "Jimmy",
  number: 555,
  charge: "developer",
};

function showResponse({ name, ...other }: ResponseServiceCD): number {
  console.log("Id:", name);
  console.log("Otros datos:", other);
  return 1;
}

showResponse(response1);
