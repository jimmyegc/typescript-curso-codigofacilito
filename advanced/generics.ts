const age: number = 10;

interface myInterface<T> {
  field: T;
}

interface Example {
  id: string;
  name: string;
}

//const myValue: myInterface<Example> = {};

class MyClass<T> {
  field: T;
  constructor(field: T) {
    this.field = field;
  }
}

const myObject: MyClass<string> = new MyClass("hola");

function getData<T>(id: string): Promise<T> | void {}

getData("hola");

// Example with Classes
interface UserReponse {
  id: number;
  name: string;
}

class HttpReponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserReponse => {
  return {
    id: 1,
    name: "Hello",
  };
};

const myUser = fetchUser();
const res = new HttpReponse(myUser, 200, 1);
console.log(myUser);

/* */
class CRUD<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  removeLastItem() {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const users: UserReponse[] = [
  { id: 1, name: "Steve Jobs" },
  { id: 2, name: "Bill Gates" },
  { id: 3, name: "Jimmy García" },
];

const userCRUD: CRUD<UserReponse> = new CRUD(users);
userCRUD.addItem({ id: 4, name: "TypeScript" });

console.log(userCRUD.printItems());
