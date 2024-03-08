var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHi = function (name) {
    console.log("Hello", name);
};
sayHi("Jimmy");
function sayGoodbye() {
    console.log("Adios...");
}
sayGoodbye();
function show(name) {
    console.log("Hola", name[0]);
    return 1;
}
var response = show(["jimmy"]);
console.log(response);
var response1 = {
    id: 1,
    name: "Jimmy",
    number: 555,
    charge: "developer",
};
function showResponse(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log("Id:", name);
    console.log("Otros datos:", other);
    return 1;
}
showResponse(response1);
