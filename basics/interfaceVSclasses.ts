interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  token: string;
  sayHello: () => string;
}

class PersonClass {
  sayHello() {
    console.log("Hi...");
  }
}

// const personOne: PersonInterface = {}
const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

// Las Interfaces se pueden implementar
// mientras que las Clases se pueden extender/herencia.

interface IPet {
  sayHello: () => string;
}

class PetClass {
  sayHello() {
    return "hola";
  }
}

class Dog implements IPet {
  sayHello() {
    return "Hola..";
  }
}

class Cat extends PetClass {
  
}