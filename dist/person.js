"use strict";
/* Import Dirección, Mail y Teléfono */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    Person.prototype.sayHi = function () {
        console.log("Hola me llamo " + this.name + " y mi apellido es " + this.lastName);
    };
    return Person;
}());
exports.Person = Person;
