var _a;
var person = {
    name: "Jennifer",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: function () {
        return "Hola man!";
    },
};
person.code = 404;
console.log(person.sayHello());
var secondPerson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () { return "Hello 2"; },
};
(_a = secondPerson.description) === null || _a === void 0 ? void 0 : _a.toUpperCase();
