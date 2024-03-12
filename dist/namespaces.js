var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    //const myUser = new User("Jimbo");
    //console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
//const myOtherUser = new DatabaseEntity.User("Steve Jobs");
//console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUser = new DatabaseEntity.User("Code code code");
console.log(myOtherUser);
