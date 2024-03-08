class Animal {
  public name: "Generic animal";
  private age = 10;
  protected identity = "000"; // La clase y las clases que se extienden

  constructor() {
    console.log("Animal creado...");
  }

  sayHi() {
    console.log("Grrr", this.age);
  }
}

// Herencia
class Dog extends Animal {
  type: "Pitbull";

  constructor() {
    super();
    console.log("Perro registrado...");
  }

  sayHi() {
    this.identity;
  }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();
const myDog: Dog = new Dog();
