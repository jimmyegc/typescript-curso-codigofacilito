interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  charge: string;
}

const newEmployee: Employee = {
  name: "Jimmy",
  age: 40,
  charge: "CEO",
};

// Union Types
type User = {
  id: string;
};

type Admin = User & Person & { token: string };

const myAdmin: Admin = {
  id: "1",
  token: "abc-uid",
  name: "Jimmy",
  age: 30,
};

// Type tiene mayor especificidad
// Que tipos de datos especificos se pueden unir.
// La unión de tipos no se puede realizar con interfaces.
type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "admin" | "superUser" | 0;

const myUser: UserTypes = "superUser";

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: string;
}

const me: Developer = {
  name: "Jimmy",
  stack: ["JavaScript"],
  phone: "5555",
};
