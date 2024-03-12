/*interface Pet {
  name: string;
}

class Dog {
  name: string;
}

let pet: Pet;
pet = new Dog();
*/

interface Pet {
  name: string;
}

let pet: Pet;
let dog = { name: "lassie", owner: "Rudd" };
pet = dog;

