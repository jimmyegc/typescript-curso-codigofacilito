var age = 10;
//const myValue: myInterface<Example> = {};
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObject = new MyClass("hola");
function getData(id) { }
getData("hola");
var HttpReponse = /** @class */ (function () {
    function HttpReponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpReponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Hello",
    };
};
var myUser = fetchUser();
var res = new HttpReponse(myUser, 200, 1);
console.log(myUser);
/* */
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Steve Jobs" },
    { id: 2, name: "Bill Gates" },
    { id: 3, name: "Jimmy García" },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "TypeScript" });
console.log(userCRUD.printItems());
