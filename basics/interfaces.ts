interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

let person: Person = {
  name: "Jennifer",
  code: "01",
  charge: 1,
  description: "Hola",
  sayHello: () => {
    return "Hola man!";
  },
};

person.code = 404;
console.log(person.sayHello());

let secondPerson: Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => "Hello 2",
};

secondPerson.description?.toUpperCase();
