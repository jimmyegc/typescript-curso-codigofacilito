// import * as Utils from './utils.module'
import { PI, User as Person, generateId } from "./utils.module";

const myNumber = 10 * PI;

const myUser: Person = { id: generateId().toString(), name: "Jimbo" };

console.log(myUser, myNumber);
